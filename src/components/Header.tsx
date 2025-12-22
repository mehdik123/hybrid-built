import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const instagramDMLink = "https://ig.me/m/unbreakablesteam";
  const { language, setLanguage, isRTL } = useLanguage();

  const navLinks = [
    { label: translations.nav.products[language], href: "#products", highlight: true },
    { label: translations.nav.coaching[language], href: "#coaching" },
    { label: translations.nav.about[language], href: "#about" },
    { label: translations.nav.results[language], href: "#transformations" },
    { label: translations.nav.faq[language], href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
          }`}
      >
        <div className="container-tight px-4 md:px-8">
          <div className={`flex items-center justify-between h-16 md:h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="UNBREAKABLES TEAM" className="h-8 md:h-12 w-auto" />
              <span className="font-display text-lg md:text-2xl text-foreground">
                UNBREAKABLES TEAM
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className={`hidden md:flex items-center gap-6 lg:gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`transition-colors text-sm uppercase tracking-wide font-medium ${link.highlight
                    ? 'text-primary font-bold px-3 py-1 rounded-md bg-primary/10 hover:bg-primary/20'
                    : 'text-muted-foreground hover:text-primary'
                    }`}
                >
                  {link.label}
                </button>
              ))}

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all"
                aria-label="Switch language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'en' ? 'عربي' : 'EN'}</span>
              </button>

              <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="sm">
                  {translations.nav.applyNow[language]}
                </Button>
              </a>
            </nav>

            {/* Mobile Menu Button & Language */}
            <div className={`flex md:hidden items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/50 text-muted-foreground hover:text-primary transition-colors text-sm font-bold"
                aria-label="Switch language"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'عربي' : 'EN'}</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 text-foreground"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-20 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`transition-colors text-xl uppercase tracking-wide font-display ${link.highlight
                    ? 'text-primary font-bold'
                    : 'text-foreground hover:text-primary'
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <a href={instagramDMLink} target="_blank" rel="noopener noreferrer" className="mt-4">
                <Button variant="hero" size="lg">
                  {translations.nav.applyNow[language]}
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
