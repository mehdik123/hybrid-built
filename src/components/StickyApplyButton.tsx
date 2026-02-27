import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const StickyDMButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = translations.sticky;
  const instagramDMLink = "https://ig.me/m/unbreakablesteam?text=COACHING";

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden pointer-events-none"
        >
          <div className="max-w-md mx-auto pointer-events-auto">
            <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="xxl"
                className="group w-full bg-primary/95 hover:bg-primary text-white font-black uppercase tracking-[0.3em] shadow-[0_18px_60px_rgba(255,0,0,0.45)] py-7 text-sm border border-white/15 rounded-2xl relative overflow-hidden"
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 translate-x-[-30%] group-hover:translate-x-[30%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  <Instagram className="w-5 h-5" />
                  <span>{t.apply[language]}</span>
                </span>
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyDMButton;
