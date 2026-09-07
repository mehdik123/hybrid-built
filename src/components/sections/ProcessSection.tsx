import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";

const ProcessSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.process;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-padding bg-ink relative overflow-hidden" ref={ref}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 10% 20%, rgba(232,0,28,0.14), transparent 60%)",
        }}
      />

      <div className="container-tight relative">
        <div className={`max-w-2xl mb-14 md:mb-20 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-editorial text-[10px] uppercase tracking-[0.28em] text-red-br mb-4"
          >
            {t.eyebrow[language]}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-5xl uppercase leading-[1.08] text-foreground"
          >
            {t.title[language]}
          </motion.h2>
        </div>

        <ol className="relative">
          <motion.div
            aria-hidden
            className={`absolute top-3 bottom-3 w-px bg-gradient-to-b from-red-br via-white/20 to-transparent ${
              isRTL ? "right-[1.35rem] md:right-[1.85rem]" : "left-[1.35rem] md:left-[1.85rem]"
            }`}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
          />

          {t.steps.map((step, i) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, x: isRTL ? 28 : -28 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.12 + i * 0.14, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={`relative grid grid-cols-[3.2rem_1fr] md:grid-cols-[4.2rem_1fr] gap-5 md:gap-10 pb-12 md:pb-16 last:pb-0 ${
                isRTL ? "text-right" : ""
              }`}
            >
              <div className="relative z-[1] flex justify-center">
                <motion.span
                  className="flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full bg-ink border border-red-br/50 font-display text-sm md:text-base text-red-br"
                  initial={{ scale: 0.6 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.18 + i * 0.14, type: "spring", stiffness: 260, damping: 18 }}
                >
                  {step.num}
                </motion.span>
              </div>
              <div className="pt-1.5 md:pt-2">
                <h3 className="font-display text-2xl md:text-3xl uppercase text-foreground mb-3">
                  {step.title[language]}
                </h3>
                <p className="font-editorial text-sm md:text-base text-white/60 leading-relaxed max-w-xl">
                  {step.body[language]}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
