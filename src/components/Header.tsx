import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const instagramDMLink = "https://ig.me/m/unbreakablesteam?text=HYBRID";
  const { language, setLanguage, isRTL } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { label: translations.nav.products[language], href: "/products", type: "page", highlight: true },
    { label: translations.nav.coaching[language], href: "#coaching", type: "anchor" },
    { label: translations.nav.about[language], href: "#about", type: "anchor" },
    { label: translations.nav.results[language], href: "#transformations", type: "anchor" },
    { label: translations.nav.faq[language], href: "#faq", type: "anchor" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: { label: string; href: string; type: string }) => {
    if (link.type === "page") {
      navigate(link.href);
      setIsMobileMenuOpen(false);
      return;
    }

    if (!isHomePage) {
      navigate("/" + link.href);
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-primary/20 py-4" : "py-6 bg-black/50 backdrop-blur-sm md:bg-transparent"
          }`}
      >
        <div className="container-tight px-4 md:px-8">
          <div className={`flex items-center justify-between h-16 md:h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 md:gap-3 hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="UNBREAKABLES TEAM" className="h-7 sm:h-8 md:h-12 w-auto" />
              <span className="font-display text-base sm:text-lg md:text-2xl text-foreground whitespace-nowrap">
                UNBREAKABLES TEAM
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className={`hidden md:flex items-center gap-6 lg:gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
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
                <Button variant="hero" size="sm" className="bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest px-6 h-10 shadow-lg shadow-primary/20">
                  {translations.nav.applyNow[language]}
                </Button>
              </a>
            </nav>

            {/* Mobile Menu Button, Language & CTA */}
            <div className={`flex md:hidden items-center gap-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={() => navigate('/products')}
                className="bg-accent/10 border border-accent/20 text-accent px-2 sm:px-3 h-8 sm:h-9 rounded-md text-[9px] sm:text-[10px] font-black uppercase tracking-tighter hover:bg-accent/20 transition-all whitespace-nowrap"
              >
                {translations.nav.products[language]}
              </button>
              <a href={instagramDMLink} target="_blank" rel="noopener noreferrer" className="mr-0.5 sm:mr-1">
                <Button variant="hero" size="sm" className="px-2 sm:px-4 h-8 sm:h-9 text-[9px] sm:text-[10px] font-black tracking-tighter bg-primary shadow-lg shadow-primary/20">
                  {translations.nav.applyNow[language]}
                </Button>
              </a>
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center p-1.5 sm:px-2 sm:py-1.5 rounded-md border border-border/50 text-muted-foreground hover:text-primary transition-colors text-[9px] sm:text-[10px] font-bold"
                aria-label="Switch language"
              >
                <Globe className="w-3 h-3" />
                <span className="hidden sm:inline-block ml-1">{language === 'en' ? 'عربي' : 'EN'}</span>
                <span className="sm:hidden">{language === 'en' ? 'AR' : 'EN'}</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 sm:p-1.5 text-foreground"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
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
                  onClick={() => handleNavClick(link)}
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
