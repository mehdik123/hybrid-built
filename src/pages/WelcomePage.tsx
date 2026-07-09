import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { ASSETS } from "@/lib/constants";
import MaskedLines from "@/components/MaskedLines";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import LanguageToggle from "@/components/LanguageToggle";
import PathCard from "@/components/motion/PathCard";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { language, isRTL } = useLanguage();
  const g = translations.gateway;

  return (
    <main className="relative min-h-screen bg-ink text-foreground flex flex-col">
      <header
        className={`relative z-20 flex items-center justify-between gap-3 px-4 md:px-10 py-4 md:py-6 border-b border-white/[0.06] ${isRTL ? "flex-row-reverse" : ""}`}
      >
        <img src="/logo.png" alt="UNBREAKABLES TEAM" className="h-7 md:h-9 w-auto shrink-0" />
        <LanguageToggle scope="welcome" size="sm" />
      </header>

      <div className="flex-1 container-tight px-4 md:px-8 py-6 md:py-16 max-w-lg md:max-w-none mx-auto w-full">
        <div className="mb-5 md:mb-14">
          <MaskedLines
            lines={[g.title1[language], g.title2[language]]}
            lineClassName="text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
            redWordIndex={language === "en" ? { line: 1, wordIndex: 0 } : undefined}
          />
        </div>

        <div className="flex flex-col gap-2.5 md:gap-5">
          <PathCard
            compact
            animIndex={0}
            imageSrc={ASSETS.pathCoaching}
            imageAlt="Mehdi — 1-on-1 coaching"
            coverTag={g.coaching.coverTag[language]}
            index={g.coaching.tag[language]}
            title={g.coaching.title[language]}
            desc={g.coaching.desc[language]}
            cta={g.coaching.cta[language]}
            objectPosition="center 42%"
            mobileObjectPosition="center 35%"
            isRTL={isRTL}
            onClick={() => navigate("/coaching")}
          />

          <PathCard
            compact
            animIndex={1}
            imageSrc={ASSETS.pathBlueprint}
            imageAlt="Mehdi — hybrid program"
            coverTag={g.blueprint.coverTag[language]}
            index={g.blueprint.tag[language]}
            title={g.blueprint.title[language]}
            desc={g.blueprint.desc[language]}
            cta={g.blueprint.cta[language]}
            objectPosition="center 28%"
            mobileObjectPosition="center 22%"
            isRTL={isRTL}
            onClick={() => navigate("/products")}
          />

          <PathCard
            compact
            animIndex={2}
            as="div"
            imageSrc={ASSETS.pathFreeTool}
            imageAlt="Mehdi — free tool"
            coverTag={g.freeTool.coverTag[language]}
            index={g.freeTool.tag[language]}
            title={g.freeTool.title[language]}
            desc={g.freeTool.desc[language]}
            objectPosition="center 40%"
            mobileObjectPosition="center 30%"
            isRTL={isRTL}
          >
            <EmailCaptureForm
              source="path-page"
              subject="Free Hybrid Tool — Path Page"
              compact
              className="mb-2"
            />
            <button
              type="button"
              onClick={() => navigate("/free-tool")}
              className="font-editorial text-[10px] uppercase tracking-[0.15em] text-muted-foreground hover:text-red-br active:text-red-br transition-colors"
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
