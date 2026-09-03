import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IG_DM_URL, ASSETS } from "@/lib/constants";
import LanguageToggle from "@/components/LanguageToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, isRTL } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isCoachingPage = location.pathname === "/";

  const navLinks = [
    { label: translations.nav.about[language], href: "#about", type: "anchor" as const },
    { label: translations.nav.coaching[language], href: "#audience", type: "anchor" as const },
    { label: translations.nav.results[language], href: "#proof", type: "anchor" as const },
    { label: language === "en" ? "How it works" : language === "fr" ? "Processus" : "كيفاش", href: "#process", type: "anchor" as const },
    { label: language === "en" ? "Offer" : language === "fr" ? "Offre" : "العرض", href: "#offer", type: "anchor" as const },
    { label: translations.nav.faq[language], href: "#faq", type: "anchor" as const },
    { label: translations.nav.products[language], href: "/products", type: "page" as const },
    {
      label: language === "en" ? "Finder" : language === "fr" ? "Finder" : "الأداة",
      href: "/free-tool",
      type: "page" as const,
    },
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
      navigate("/" + link.href);
    } else {
      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
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
            <Link to="/" className={`flex items-center gap-2 min-w-0 ${isRTL ? "flex-row-reverse" : ""}`}>
              <img src={ASSETS.logo} alt="UNBREAKABLES TEAM" className="h-8 md:h-10 w-auto shrink-0" />
              <span className="font-editorial text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 hidden md:inline truncate">
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
              <div className="relative flex items-center">
                <LanguageToggle scope="header" size="sm" />
              </div>
              <a href={IG_DM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-cta !py-2.5 !px-5 !text-[11px]">
                {translations.nav.applyNow[language]}
              </a>
            </nav>

            <div className={`flex lg:hidden items-center gap-1.5 ${isRTL ? "flex-row-reverse" : ""}`}>
              <LanguageToggle scope="header-mobile" size="sm" />
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
              <LanguageToggle scope="header-menu" />
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
