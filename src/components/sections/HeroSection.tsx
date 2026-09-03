import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS, IG_DM_URL } from "@/lib/constants";
import EditorialPhoto from "@/components/EditorialPhoto";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";
import { useLightMotion } from "@/hooks/useLightMotion";
import MaskedLines from "@/components/MaskedLines";

const HeroSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.hero;
  const light = useLightMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const headlineLines =
    language === "en"
      ? ["I build complete physiques", "for busy people."]
      : language === "fr"
        ? ["Je construis des physiques", "complets pour les gens occupés."]
        : [t.headline[language]];

  const redWordIndex = language === "en" ? { line: 1, wordIndex: 1 } : undefined;

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <EditorialPhoto
          src={ASSETS.heroCoaching}
          fallbackSrc={ASSETS.heroFallback}
          alt=""
          warm
          priority
          className="h-full w-full"
          imgClassName={`object-cover object-center ${light ? "" : "scale-[1.02]"}`}
        />
        <div
          className="absolute inset-0 z-[3]"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.72) 45%, rgba(10,10,10,0.94) 100%)",
          }}
        />

        {!light && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-32 left-1/2 w-[56rem] h-[56rem] -translate-x-1/2 rounded-full blur-[140px] bg-[radial-gradient(circle_at_center,rgba(232,0,28,0.18)_0%,transparent_60%)]"
          />
        )}
      </div>

      <div
        className={`relative z-10 w-full section-padding pt-28 pb-16 md:pt-36 md:pb-24 ${
          isRTL ? "text-right" : ""
        }`}
      >
        <div className="container-tight max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-[10px] uppercase tracking-[0.28em] text-white/50 mb-6"
          >
            {t.brand[language]}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={`font-display leading-[1.05] text-foreground ${isRTL ? "mr-0" : ""}`}
          >
            <MaskedLines
              lines={headlineLines}
              className="inline-block"
              lineClassName="text-[2.35rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
              redWordIndex={redWordIndex}
              stagger={110}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg font-editorial text-base md:text-lg text-white/70 leading-relaxed"
          >
            {t.subhead[language]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
            <p className="mt-4 font-editorial text-xs text-white/45 tracking-wide">
              {t.ctaNote[language]}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
