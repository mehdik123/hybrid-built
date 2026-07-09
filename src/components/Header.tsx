import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IG_DM_URL, ASSETS } from "@/lib/constants";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isCoachingPage = location.pathname === "/coaching" || location.pathname === "/home";

  const navLinks = [
    { label: translations.nav.products[language], href: "/products", type: "page" as const },
    { label: translations.nav.coaching[language], href: "#coaching", type: "anchor" as const },
    { label: translations.nav.about[language], href: "#about", type: "anchor" as const },
    { label: translations.nav.results[language], href: "#transformations", type: "anchor" as const },
    { label: translations.nav.faq[language], href: "#faq", type: "anchor" as const },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: (typeof navLinks)[number]) => {
    if (link.type === "page") {
      navigate(link.href);
      setIsMobileMenuOpen(false);
      return;
    }
    if (!isCoachingPage) {
      navigate("/coaching" + link.href);
    } else {
      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    if (language === "en") setLanguage("fr");
    else if (language === "fr") setLanguage("ar");
    else setLanguage("en");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 ${
          isScrolled ? "bg-ink/95 border-b border-white/[0.06] py-3" : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="container-tight px-4 md:px-8">
          <div className={`flex items-center justify-between gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Link to={isCoachingPage ? "/coaching" : "/"} className={`flex items-center gap-2 min-w-0 ${isRTL ? "flex-row-reverse" : ""}`}>
              <img src={ASSETS.logo} alt="UNBREAKABLES TEAM" className="h-8 md:h-10 w-auto shrink-0" />
              <span className="font-editorial text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 hidden sm:inline truncate">
                UNBREAKABLES TEAM
              </span>
            </Link>

            <nav className={`hidden lg:flex items-center gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className="nav-link-editorial font-editorial text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </button>
              ))}
              <div className="relative flex items-center gap-0.5 border border-white/10 p-0.5">
                {(["en", "fr", "ar"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`relative z-10 px-2.5 py-1 font-editorial text-[10px] uppercase tracking-wider transition-colors ${
                      language === lang ? "text-ink" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {language === lang && (
                      <motion.span
                        layoutId="lang-pill"
                        className="absolute inset-0 bg-paper rounded-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{lang}</span>
                  </button>
                ))}
              </div>
              <a href={IG_DM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-cta !py-2.5 !px-5 !text-[11px]">
                {translations.nav.applyNow[language]}
              </a>
            </nav>

            <div className={`flex lg:hidden items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <a
                href={IG_DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-cta !py-2 !px-3 !text-[9px] tracking-wider"
              >
                DM
              </a>
              <button type="button" onClick={toggleLanguage} className="touch-target p-2 text-muted-foreground" aria-label="Language">
                <Globe className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="touch-target p-2 text-foreground"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/98 pt-24 px-6 lg:hidden"
          >
            <nav className={`flex flex-col gap-6 ${isRTL ? "items-end text-right" : ""}`}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className="font-display text-2xl uppercase text-left"
                >
                  {link.label}
                </button>
              ))}
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-editorial text-sm text-muted-foreground">
                {translations.nav.choosePath[language]}
              </Link>
              <a href={IG_DM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-cta w-full max-w-xs">
                {translations.nav.applyNow[language]}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
