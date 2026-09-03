import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import { useLightMotion } from "@/hooks/useLightMotion";

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
        <div className={`max-w-2xl mb-12 md:mb-16 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
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

        <div className={`grid lg:grid-cols-12 gap-8 lg:gap-10`}>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06]">
              {t.features.map((feature, i) => (
                <motion.button
                  key={feature.title.en}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={!light ? () => setActiveIndex(i) : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.08 + i * 0.07 }}
                  className={`bg-ink p-6 md:p-8 text-left ${
                    isRTL ? "text-right" : ""
                  } focus-visible:outline-none`}
                  style={{
                    border: "1px solid transparent",
                    borderColor: activeIndex === i ? "rgba(232,0,28,0.55)" : "transparent",
                  }}
                >
                  <motion.div
                    className="pointer-events-none"
                    animate={activeIndex === i && !light ? { scale: 1.01 } : { scale: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="font-editorial text-[10px] uppercase tracking-[0.2em] text-white/35 mb-3">
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl uppercase text-foreground mb-3">
                      {feature.title[language]}
                    </h3>
                    <p className="font-editorial text-sm text-white/55 leading-relaxed">
                      {feature.body[language]}
                    </p>
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full min-h-[320px] rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,0,28,0.22)_0%,transparent_55%)] opacity-60"
              />

              <div className={`relative p-6 md:p-8 ${isRTL ? "text-right" : ""}`}>
                <p className="font-editorial text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {`0${activeIndex + 1}`}
                </p>
                <h3 className="font-display text-2xl uppercase text-foreground mt-2">
                  {activeFeature.title[language]}
                </h3>

                <div className="mt-4">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeFeature.title.en}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="font-editorial text-sm text-white/60 leading-relaxed"
                    >
                      {activeFeature.body[language]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <motion.div
                  aria-hidden
                  className="mt-8 h-px bg-gradient-to-r from-red-br via-red-br/40 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: isRTL ? "right" : "left" }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:hidden mt-6">
          <motion.div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden p-6">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,0,28,0.18)_0%,transparent_55%)] opacity-60"
            />
            <div className="relative">
              <p className="font-editorial text-[10px] uppercase tracking-[0.22em] text-white/40">
                {`0${activeIndex + 1}`}
              </p>
              <h3 className="font-display text-2xl uppercase text-foreground mt-2">
                {activeFeature.title[language]}
              </h3>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeFeature.title.en}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="font-editorial text-sm text-white/60 leading-relaxed mt-4"
                >
                  {activeFeature.body[language]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
