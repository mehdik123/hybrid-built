import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IG_DM_URL, ASSETS } from "@/lib/constants";
import LanguageToggle from "@/components/LanguageToggle";
import MagneticCTA from "@/components/motion/MagneticCTA";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, isRTL } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isCoachingPage = location.pathname === "/";

  const navLinks = [
    {
      label: language === "en" ? "Results" : language === "fr" ? "Résultats" : "النتائج",
      href: "#proof",
    },
    {
      label: language === "en" ? "What you get" : language === "fr" ? "Ce que tu obtiens" : "شنو كتحصل",
      href: "#offer",
    },
    {
      label: language === "en" ? "App" : language === "fr" ? "App" : "App",
      href: "#app",
    },
    {
      label: language === "en" ? "How it works" : language === "fr" ? "Comment ça marche" : "كيفاش",
      href: "#process",
    },
    {
      label: language === "en" ? "Products" : language === "fr" ? "Produits" : "Products",
      href: "#products",
    },
  ];

  const applyLabel =
    language === "en" ? "Apply" : language === "fr" ? "Postuler" : "بدا الـ coaching";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    if (!isCoachingPage) {
      navigate("/" + href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[80] transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-ink/95 backdrop-blur-md border-b border-white/[0.06] py-3"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="container-tight px-4 md:px-8">
          <div className={`flex items-center justify-between gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Link to="/" className={`flex items-center gap-2.5 min-w-0 ${isRTL ? "flex-row-reverse" : ""}`}>
              <img src={ASSETS.logo} alt="UNBREAKABLES TEAM" className="h-8 md:h-9 w-auto shrink-0" />
              <span className="font-display text-sm md:text-base uppercase tracking-[0.04em] text-foreground hidden sm:inline">
                UNBREAKABLES
              </span>
            </Link>

            <nav className={`hidden lg:flex items-center gap-7 ${isRTL ? "flex-row-reverse" : ""}`}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="font-editorial text-[11px] uppercase tracking-[0.16em] text-white/55 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className={`flex items-center gap-2.5 ${isRTL ? "flex-row-reverse" : ""}`}>
              <LanguageToggle />
              <MagneticCTA href={IG_DM_URL} className="btn-primary-cta !py-2.5 !px-4 !text-[11px] hidden sm:inline-flex">
                {applyLabel}
              </MagneticCTA>
              <button
                type="button"
                className="lg:hidden p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="fixed inset-0 z-[70] bg-ink pt-24 px-6"
          >
            <nav className={`flex flex-col gap-6 ${isRTL ? "items-end text-right" : ""}`}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-3xl uppercase text-foreground"
                >
                  {link.label}
                </button>
              ))}
              <MagneticCTA href={IG_DM_URL} onClick={() => setIsMobileMenuOpen(false)}>
                {applyLabel}
              </MagneticCTA>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
