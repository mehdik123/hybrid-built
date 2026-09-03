import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import { ASSETS } from "@/lib/constants";
import { useLightMotion } from "@/hooks/useLightMotion";

const PhoneShell = ({
  src,
  alt,
  className = "",
  raised = false,
}: {
  src: string;
  alt: string;
  className?: string;
  raised?: boolean;
}) => (
  <div
    className={`relative w-[160px] sm:w-[190px] md:w-[210px] aspect-[9/19] rounded-[2rem] border border-white/15 bg-[#111] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)] transition-all duration-500 ${
      raised ? "translate-y-0 scale-[1.04] z-30 opacity-100" : "translate-y-6 opacity-65 z-10"
    } ${className}`}
  >
    <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-16 rounded-full bg-black/80 z-10 pointer-events-none" />
    <div className="absolute inset-[5px] rounded-[1.7rem] overflow-hidden bg-black">
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" decoding="async" />
    </div>
  </div>
);

/** Map feature tabs → which phone sits forward */
const featureToScreen = (active: number) => {
  if (active === 1) return "nutrition";
  if (active === 2) return "progress";
  if (active === 3) return "home";
  return "train";
};

const AppScreens = ({ active }: { active: number }) => {
  const focus = featureToScreen(active);

  return (
    <div className="relative flex items-end justify-center gap-1.5 sm:gap-3 md:gap-4 min-h-[400px] md:min-h-[500px] px-1 overflow-x-auto">
      <PhoneShell
        src={ASSETS.appNutrition}
        alt="Nutrition screen"
        className="hidden md:block shrink-0"
        raised={focus === "nutrition"}
      />
      <PhoneShell
        src={ASSETS.appTrain}
        alt="Training screen"
        className="shrink-0"
        raised={focus === "train"}
      />
      <PhoneShell
        src={ASSETS.appProgress}
        alt="Strength progress screen"
        className="shrink-0"
        raised={focus === "progress"}
      />
      <PhoneShell
        src={ASSETS.appHome}
        alt="Home screen"
        className="hidden sm:block shrink-0"
        raised={focus === "home"}
      />
    </div>
  );
};

const AppSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.app;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const light = useLightMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = t.features[activeIndex] ?? t.features[0];

  return (
    <section id="app" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
      <div className="container-tight">
        <div className={`max-w-2xl mb-10 md:mb-14 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-editorial text-[10px] uppercase tracking-[0.28em] text-red-br mb-4"
          >
            {t.eyebrow[language]}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="font-display text-3xl md:text-5xl uppercase leading-[1.08] text-foreground"
          >
            {t.title[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-5 font-editorial text-base md:text-lg text-white/60 leading-relaxed"
          >
            {t.lead[language]}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <AppScreens active={activeIndex} />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {t.features.map((feature, i) => (
            <motion.button
              key={feature.title.en}
              type="button"
              onClick={() => setActiveIndex(i)}
              onMouseEnter={!light ? () => setActiveIndex(i) : undefined}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.06 }}
              className={`bg-ink p-5 md:p-6 text-left ${isRTL ? "text-right" : ""} focus-visible:outline-none`}
              style={{
                border: "1px solid transparent",
                borderColor: activeIndex === i ? "rgba(232,0,28,0.55)" : "transparent",
              }}
            >
              <p className="font-editorial text-[10px] uppercase tracking-[0.2em] text-white/35 mb-3">0{i + 1}</p>
              <h3 className="font-display text-lg md:text-xl uppercase text-foreground mb-2">
                {feature.title[language]}
              </h3>
              <AnimatePresence mode="wait">
                {activeIndex === i && (
                  <motion.p
                    key={feature.title.en}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="font-editorial text-sm text-white/55 leading-relaxed overflow-hidden"
                  >
                    {activeFeature.body[language]}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppSection;
