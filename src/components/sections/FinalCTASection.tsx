import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";

const FinalCTASection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.finalCta;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-red-br section-padding"
      ref={ref}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.3 } : {}}
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(0,0,0,0.12) 12px, rgba(0,0,0,0.12) 24px)",
        }}
      />

      <div className="container-tight relative">
        <div className={`max-w-3xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-editorial text-[10px] uppercase tracking-[0.28em] text-white/70 mb-4"
          >
            {t.eyebrow[language]}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-[1.02] text-white"
          >
            {t.title[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
            className="mt-6 font-editorial text-base md:text-lg text-white/80 leading-relaxed max-w-xl"
          >
            {t.body[language]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <MagneticCTA href={IG_DM_URL} className="btn-invert-cta">
              {t.cta[language]}
            </MagneticCTA>
            <a
              href="#products"
              className={`font-editorial text-xs uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors ${
                isRTL ? "text-right" : ""
              }`}
            >
              {t.secondary[language]}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
