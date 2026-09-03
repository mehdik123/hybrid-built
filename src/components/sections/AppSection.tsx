import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import { useLightMotion } from "@/hooks/useLightMotion";

const PhoneShell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`relative w-[200px] sm:w-[220px] aspect-[9/19] rounded-[2rem] border border-white/15 bg-[#111] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)] ${className}`}
  >
    <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-black/80 z-10" />
    <div className="absolute inset-[6px] rounded-[1.65rem] bg-[#0a0a0a] overflow-hidden">{children}</div>
  </div>
);

const AppScreens = ({ active }: { active: number }) => (
  <div className="relative flex items-end justify-center gap-3 md:gap-4 min-h-[420px] md:min-h-[480px]">
    <PhoneShell className={`hidden sm:block transition-transform duration-500 ${active === 1 ? "translate-y-0 z-20" : "translate-y-8 opacity-70"}`}>
      <div className="p-4 pt-8 font-editorial">
        <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">Nutrition</p>
        <p className="font-display text-sm text-white mt-1">TODAY</p>
        {["Eggs, oats, fruit", "Chicken, rice, salad", "Yogurt + honey"].map((meal) => (
          <div key={meal} className="mt-3 border border-white/[0.08] px-2.5 py-2">
            <p className="text-[10px] text-white/80">{meal}</p>
            <p className="text-[8px] text-white/35 mt-1">Swap available</p>
          </div>
        ))}
      </div>
    </PhoneShell>

    <PhoneShell className={`z-30 transition-transform duration-500 ${active === 0 ? "-translate-y-2" : "translate-y-2"}`}>
      <div className="p-4 pt-8 font-editorial">
        <p className="text-[8px] uppercase tracking-[0.2em] text-red-br">Session 03</p>
        <p className="font-display text-base text-white mt-1">UPPER</p>
        <p className="text-[9px] text-white/40 mt-1">Updated this week</p>
        {[
          ["Bench press", "4 × 6"],
          ["Weighted pull-up", "4 × 5"],
          ["Incline DB", "3 × 10"],
        ].map(([n, s]) => (
          <div key={n} className="mt-3 flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-[11px] text-white/85">{n}</span>
            <span className="text-[10px] text-white/40">{s}</span>
          </div>
        ))}
      </div>
    </PhoneShell>

    <PhoneShell className={`hidden sm:block transition-transform duration-500 ${active === 2 ? "translate-y-0 z-20" : "translate-y-8 opacity-70"}`}>
      <div className="p-4 pt-8 font-editorial">
        <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">Progress</p>
        <p className="font-display text-sm text-white mt-1">WEEK 6</p>
        <div className="mt-5 flex items-end gap-1.5 h-28">
          {[32, 40, 38, 52, 60, 72].map((h, i) => (
            <div key={i} className="flex-1 bg-red-br/80" style={{ height: `${h}%`, opacity: 0.45 + i * 0.09 }} />
          ))}
        </div>
        <p className="text-[9px] text-white/45 mt-3">Strength climbing</p>
      </div>
    </PhoneShell>
  </div>
);

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
          <AppScreens active={Math.min(activeIndex, 2)} />
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
