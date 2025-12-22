import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const HeroSection = () => {
  const instagramDMLink = "https://instagram.com/direct/t/YOUR_USERNAME";
  const { language, isRTL } = useLanguage();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Hero image placeholder with overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute inset-0 bg-gradient-to-r ${isRTL ? 'from-transparent via-background/80 to-background' : 'from-background via-background/80 to-transparent'} z-10`} />
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-lg">Hero Image Placeholder</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={`absolute top-1/4 ${isRTL ? 'left-1/4' : 'right-1/4'} w-64 h-64 bg-primary/10 rounded-full blur-3xl`} />
      <div className={`absolute bottom-1/4 ${isRTL ? 'right-1/4' : 'left-1/4'} w-96 h-96 bg-primary/5 rounded-full blur-3xl`} />

      <div className="relative z-20 container-tight px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-4">
            {t.headline1[language]}{" "}
            <span className="text-gradient">{t.headline2[language]}</span>
            <br />
            {t.headline3[language]}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light tracking-wide mb-4">
            {t.subheadline[language]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-lg md:text-xl text-foreground/80">
            {t.tagline[language]} <span className="text-primary font-semibold">[Your Name]</span>
          </p>
          <p className="text-muted-foreground mt-2">{t.subtext[language]}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xxl" className="mt-4">
              {t.cta[language]}
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-sm uppercase tracking-widest">{t.scroll[language]}</span>
        <ChevronDown className="w-6 h-6 animate-scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default HeroSection;