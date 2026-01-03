import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '@/lib/translations';

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
    const [language, setLanguage] = useState<Language>('en');

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isRTL = language === 'ar';

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    };

    useEffect(() => {
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
