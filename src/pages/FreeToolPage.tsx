import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import OneRepMaxCalculator from "@/components/OneRepMaxCalculator";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { ASSETS } from "@/lib/constants";
import MaskedLines from "@/components/MaskedLines";

const FreeToolPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations.freeToolPage;
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("freeToolUnlocked") === "true") {
      setUnlocked(true);
    }
  }, []);

  return (
    <main className="min-h-screen bg-ink relative overflow-hidden">
      <LanguageSelectorModal />
      <Header />
      <div className="absolute inset-0">
        <img
          src={ASSETS.freeToolHero}
          alt=""
          className="h-full w-full object-cover object-top opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
      </div>

      <div className={`relative z-10 pt-28 md:pt-36 pb-20 px-5 md:px-8 container-tight max-w-4xl mx-auto ${isRTL ? "text-right" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl"
        >
          <MaskedLines
            lines={[t.title1[language], t.title2[language]]}
            lineClassName="text-4xl md:text-5xl lg:text-6xl"
            redWordIndex={language === "en" ? { line: 1, wordIndex: 0 } : undefined}
          />
          <p className="mt-4 font-editorial text-muted-foreground text-base md:text-lg max-w-xl">{t.subtitle[language]}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-white/[0.1] bg-[#0d0d0d] p-6 md:p-10 mb-12"
        >
          {!unlocked ? (
            <EmailCaptureForm
              source="free-tool-page"
              subject="Hybrid Split Identifier Auto Send"
              onSuccess={() => setUnlocked(true)}
            />
          ) : (
            <div className="text-center py-4">
              <h2 className="font-display text-2xl md:text-3xl uppercase text-red-br mb-3">{t.sentTitle[language]}</h2>
              <p className="font-editorial text-muted-foreground">{t.sentDesc[language]}</p>
            </div>
          )}
        </motion.div>

        {unlocked && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <h2 className="font-editorial text-xs uppercase tracking-[0.25em] text-muted-foreground text-center mb-6">
              {t.calculatorTitle[language]}
            </h2>
            <div className="border border-white/[0.1] bg-[#0d0d0d] p-4 md:p-6">
              <OneRepMaxCalculator />
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
};

export default FreeToolPage;
