import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS, IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";

const STEP_IMAGES = [
  { src: ASSETS.processApply, position: "object-[center_20%]" },
  { src: ASSETS.processCheckin, position: "object-[center_30%]" },
  { src: ASSETS.processTrain, position: "object-[center_22%]" },
] as const;

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
            className="font-editorial text-[11px] uppercase tracking-[0.12em] text-red-br mb-3"
          >
            {t.eyebrow[language]}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.04 }}
            className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight text-foreground"
          >
            {t.title[language]}
          </motion.h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-10 md:gap-6">
          {t.steps.map((step, i) => {
            const img = STEP_IMAGES[i] ?? STEP_IMAGES[0];
            return (
              <motion.li
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: Math.min(0.08 * i, 0.2), duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={isRTL ? "text-right" : ""}
              >
                <div className="relative mb-5 aspect-[3/4] overflow-hidden bg-muted">
                  <motion.img
                    src={img.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    initial={{ scale: 1.08 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 1.1, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute inset-0 h-full w-full object-cover ${img.position}`}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 55%, rgba(17,17,17,0.55) 100%)",
                    }}
                  />
                  <span className="absolute bottom-3 left-3 right-3 font-editorial text-[11px] tracking-[0.14em] text-white/80">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 leading-snug tracking-tight">
                  {step.title[language]}
                </h3>
                <p className="font-editorial text-sm text-white/55 leading-relaxed">
                  {step.body[language]}
                </p>
              </motion.li>
            );
          })}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className={`mt-12 md:mt-16 ${isRTL ? "text-right" : ""}`}
        >
          <MagneticCTA href={IG_DM_URL}>{landing.offer.cta[language]}</MagneticCTA>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
