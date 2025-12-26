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
  const instagramDMLink = "https://ig.me/m/unbreakablesteam?text=HYBRID";

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
          className="fixed bottom-6 left-0 right-0 z-50 px-6 md:hidden pointer-events-none"
        >
          <div className="max-w-md mx-auto pointer-events-auto">
            <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="xxl"
                className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest shadow-2xl shadow-primary/40 py-8 text-lg border-2 border-white/10"
              >
                <Instagram className="w-6 h-6 mr-3" />
                {t.apply[language]}
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyDMButton;
