import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const StickyApplyButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const instagramDMLink = "https://instagram.com/direct/t/YOUR_USERNAME";

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
        >
          <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg" className="shadow-2xl">
              Apply Now
            </Button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyApplyButton;
