import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { ASSETS } from "@/lib/constants";
import MaskedLines from "@/components/MaskedLines";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import PathCard from "@/components/motion/PathCard";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { language, setLanguage, isRTL } = useLanguage();
  const g = translations.gateway;

  return (
    <main className="relative min-h-screen bg-ink text-foreground flex flex-col">
      <header
        className={`relative z-20 flex items-center justify-between px-5 md:px-10 py-6 border-b border-white/[0.06] ${isRTL ? "flex-row-reverse" : ""}`}
      >
        <img src="/logo.png" alt="UNBREAKABLES TEAM" className="h-9 w-auto" />
        <div className={`relative flex items-center gap-0.5 border border-white/10 p-0.5 ${isRTL ? "flex-row-reverse" : ""}`}>
          {(["en", "fr", "ar"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              className={`relative z-10 px-3 py-1.5 font-editorial text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                language === lang ? "text-ink" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {language === lang && (
                <motion.span
                  layoutId="lang-pill-welcome"
                  className="absolute inset-0 bg-paper rounded-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{lang}</span>
            </button>
          ))}
        </div>
      </header>

      <div className="flex-1 container-tight section-padding !py-10 md:!py-16">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <MaskedLines
            lines={[g.title1[language], g.title2[language]]}
            lineClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            redWordIndex={language === "en" ? { line: 1, wordIndex: 0 } : undefined}
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          <PathCard
            imageSrc={ASSETS.pathCoaching}
            imageAlt="Mehdi — 1-on-1 coaching"
            coverTag={g.coaching.coverTag[language]}
            index={g.coaching.tag[language]}
            title={g.coaching.title[language]}
            desc={g.coaching.desc[language]}
            cta={g.coaching.cta[language]}
            objectPosition="center 42%"
            isRTL={isRTL}
            onClick={() => navigate("/coaching")}
          />

          <PathCard
            imageSrc={ASSETS.pathBlueprint}
            imageAlt="Mehdi — hybrid program"
            coverTag={g.blueprint.coverTag[language]}
            index={g.blueprint.tag[language]}
            title={g.blueprint.title[language]}
            desc={g.blueprint.desc[language]}
            cta={g.blueprint.cta[language]}
            objectPosition="center 35%"
            isRTL={isRTL}
            onClick={() => navigate("/products")}
          />

          <PathCard
            as="div"
            imageSrc={ASSETS.pathFreeTool}
            imageAlt="Mehdi — free tool"
            coverTag={g.freeTool.coverTag[language]}
            index={g.freeTool.tag[language]}
            title={g.freeTool.title[language]}
            desc={g.freeTool.desc[language]}
            objectPosition="center 40%"
            isRTL={isRTL}
          >
            <EmailCaptureForm source="path-page" subject="Free Hybrid Tool — Path Page" className="max-w-xl mb-4" />
            <button
              type="button"
              onClick={() => navigate("/free-tool")}
              className="font-editorial text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-red-br"
            >
              {g.freeTool.cta[language]} →
            </button>
          </PathCard>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
