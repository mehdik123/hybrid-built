import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import { IG_DM_URL } from "@/lib/constants";

const Products = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.products;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-ink flex flex-col">
      <LanguageSelectorModal />
      <Header />

      <div className="flex-1 flex items-center">
        <div className={`w-full container-tight px-5 md:px-8 pt-28 pb-16 md:pt-36 md:pb-24 ${isRTL ? "text-right" : ""}`}>
          {/* Full-page lock banner */}
          <div className="relative mb-8 overflow-hidden bg-red-br px-5 py-4 md:px-6 md:py-5">
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.28) 10px, rgba(0,0,0,0.28) 20px)",
              }}
            />
            <p className="relative font-editorial text-xs md:text-sm uppercase tracking-[0.28em] text-white font-semibold">
              {t.comingSoon[language]}
              {language === "ar" ? ". " : " — "}
              {language === "en" ? "Access locked" : language === "fr" ? "Accès verrouillé" : "الوصول مقفول"}
            </p>
          </div>

          <p className="font-editorial text-[10px] uppercase tracking-[0.28em] text-white/40 mb-4">
            {t.eyebrow[language]}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-foreground leading-[1.1] max-w-3xl">
            {t.gateTitle[language]}
          </h1>
          <p className="mt-5 max-w-2xl font-editorial text-base md:text-lg text-white/60 leading-relaxed">
            {t.gateBody[language]}
          </p>

          <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-4 md:gap-5 max-w-4xl">
            {t.items.map((item) => (
              <article
                key={item.id}
                className={`border border-white/[0.08] bg-white/[0.02] p-6 md:p-7 ${isRTL ? "text-right" : ""}`}
              >
                <div className={`flex items-center gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <span className="font-editorial text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {item.tag[language]}
                  </span>
                  <span className="font-editorial text-[10px] uppercase tracking-[0.18em] text-red-br">
                    {t.comingSoon[language]}
                  </span>
                </div>
                <h2 className="font-display text-xl md:text-2xl uppercase text-foreground mb-3">
                  {item.title[language]}
                </h2>
                <p className="font-editorial text-sm text-white/55 leading-relaxed mb-5">
                  {item.details[language]}
                </p>
                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <Check className="w-4 h-4 text-red-br shrink-0 mt-0.5" />
                      <span className="font-editorial text-sm text-white/65 leading-relaxed">
                        {bullet[language]}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={`mt-10 flex flex-col sm:flex-row gap-3 sm:items-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <MagneticCTA href={IG_DM_URL}>{t.notifyCta[language]}</MagneticCTA>
            <Link
              to="/"
              className="btn-ghost-cta"
            >
              {language === "en" ? "Back to coaching" : language === "fr" ? "Retour au coaching" : "رجوع للـ coaching"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
