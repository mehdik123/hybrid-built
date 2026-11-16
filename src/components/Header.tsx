import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IG_DM_URL, ASSETS } from "@/lib/constants";
import LanguageToggle from "@/components/LanguageToggle";
import MagneticCTA from "@/components/motion/MagneticCTA";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      label: language === "en" ? "The app" : language === "fr" ? "L’app" : "التطبيق",
      href: "#app",
    },
    {
      label: language === "en" ? "Coaching" : language === "fr" ? "Coaching" : "الـ coaching",
      href: "#offer",
    },
    {
      label: language === "en" ? "Process" : language === "fr" ? "Process" : "الخطوات",
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
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    if (!isCoachingPage) {
      navigate("/" + href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[90] mix-blend-normal">
        <div
          className={`transition-colors duration-300 ${
            isScrolled || isMenuOpen ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
          }`}
        >
          <div
            className={`container-tight px-5 md:px-8 py-4 md:py-5 flex items-center justify-between gap-4 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <Link to="/" className="relative z-[91] flex items-center gap-3 shrink-0">
              <img src={ASSETS.logo} alt="UNBREAKABLES" className="h-9 w-auto" />
            </Link>

            <div className={`flex items-center gap-4 md:gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <LanguageToggle size="sm" />
              <MagneticCTA
                href={IG_DM_URL}
                className="btn-primary-cta !py-2.5 !px-4 !text-[11px] hidden sm:inline-flex"
              >
                {applyLabel}
              </MagneticCTA>
              <button
                type="button"
                onClick={() => setIsMenuOpen((v) => !v)}
                className="btn-menu relative z-[91] px-1"
                aria-expanded={isMenuOpen}
                aria-label="Menu"
              >
                {isMenuOpen ? (language === "ar" ? "إغلاق" : "CLOSE") : "MENU"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[85] bg-ink flex flex-col"
          >
            <div
              className={`flex-1 flex flex-col justify-center px-6 md:px-16 pt-24 pb-12 ${
                isRTL ? "items-end text-right" : ""
              }`}
            >
              <p className="font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-8">
                {language === "en" ? "Navigate" : language === "fr" ? "Navigation" : "القائمة"}
              </p>
              <nav className="flex flex-col gap-2 md:gap-3">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    type="button"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleNavClick(link.href)}
                    className="mega-type text-[clamp(2.8rem,10vw,7rem)] text-white hover:text-red-br transition-colors text-left"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <MagneticCTA href={IG_DM_URL} onClick={() => setIsMenuOpen(false)}>
                  {applyLabel}
                </MagneticCTA>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
