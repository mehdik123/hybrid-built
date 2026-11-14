import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Language } from '@/lib/translations';

/** Bumped key so old English localStorage prefs don't override Arabic default */
const LANG_STORAGE_KEY = 'hybrid-built-lang-v2';

const isLanguage = (value: string | null): value is Language =>
    value === 'en' || value === 'ar' || value === 'fr';

interface AppContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    isRTL: boolean;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem(LANG_STORAGE_KEY);
        return isLanguage(saved) ? saved : 'ar';
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isRTL = language === 'ar';

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(LANG_STORAGE_KEY, lang);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    useEffect(() => {
        localStorage.setItem(LANG_STORAGE_KEY, language);
        // Drop legacy key so it can't fight the new default
        localStorage.removeItem('language');
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language, isRTL]);

    // Close menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) setIsMenuOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    return (
        <AppContext.Provider value={{
            language,
            setLanguage,
            toggleLanguage,
            isRTL,
            isMenuOpen,
            setIsMenuOpen
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

// Aliases for backward compatibility
export const useLanguage = () => {
    const { language, setLanguage, isRTL, toggleLanguage } = useAppContext();
    return { language, setLanguage, isRTL, toggleLanguage };
};
export const useMenu = () => {
    const { isMenuOpen, setIsMenuOpen } = useAppContext();
    return { isMenuOpen, setIsMenuOpen };
};
