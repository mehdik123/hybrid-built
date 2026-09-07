import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";

const StickyDMButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = translations.sticky;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) setIsVisible(true);
      else setIsVisible(false);
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
            <MagneticCTA href={IG_DM_URL} className="btn-primary-cta w-full py-5">
              {t.apply[language]}
            </MagneticCTA>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyDMButton;
