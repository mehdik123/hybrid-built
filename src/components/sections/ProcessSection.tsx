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
    <section id="process" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
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
        </div>

        <ol className="space-y-0">
          {t.steps.map((step, i) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 + i * 0.08 }}
              className={`grid grid-cols-[4.5rem_1fr] md:grid-cols-[6rem_1fr] gap-4 md:gap-8 py-7 md:py-9 border-t border-white/[0.08] ${
                isRTL ? "text-right" : ""
              }`}
            >
              <span className="font-display text-2xl md:text-3xl text-red-br">{step.num}</span>
              <div>
                <h3 className="font-display text-xl md:text-2xl uppercase text-foreground mb-2">
                  {step.title[language]}
                </h3>
                <p className="font-editorial text-sm md:text-base text-white/55 leading-relaxed max-w-xl">
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
