import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSelectorModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLanguage, language } = useLanguage();
  const t = translations.languageModal;

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (!savedLang) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelect = (lang: "en" | "ar" | "fr") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/90 z-[100]"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none"
          >
            <div className="bg-[#111] border border-white/[0.1] p-8 md:p-10 max-w-md w-full pointer-events-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-red-br/30 mb-6">
                  <Globe className="w-5 h-5 text-red-br" />
                </div>

                <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight mb-3">
                  {t.title1[language]} <span className="text-red-br">{t.title2[language]}</span>
                </h2>
                <p className="text-muted-foreground mb-8 font-editorial text-sm">{t.subtitle[language]}</p>

                <div className="grid grid-cols-1 gap-3">
                  <Button className="btn-primary-cta w-full" onClick={() => handleSelect("en")}>
                    English
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/15 text-foreground hover:border-red-br hover:text-red-br font-editorial uppercase tracking-widest py-6 bg-transparent rounded-[14px]"
                    onClick={() => handleSelect("fr")}
                  >
                    Français
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/15 text-foreground hover:border-red-br hover:text-red-br font-editorial uppercase tracking-widest py-6 bg-transparent rounded-[14px]"
                    onClick={() => handleSelect("ar")}
                  >
                    العربية / Darija
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LanguageSelectorModal;
