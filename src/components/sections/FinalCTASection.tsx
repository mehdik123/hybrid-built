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
    <section id="final-cta" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
      <div className="container-tight">
        <div className={`max-w-2xl mx-auto text-center ${isRTL ? "" : ""}`}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-4xl md:text-6xl uppercase leading-[1.05] text-foreground"
          >
            {t.title[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="mt-5 font-editorial text-base md:text-lg text-white/55 leading-relaxed"
          >
            {t.body[language]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.16 }}
            className="mt-9 flex flex-col items-center gap-4"
          >
            <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
            <a
              href="#products"
              className="font-editorial text-xs uppercase tracking-[0.16em] text-white/40 hover:text-white/70 transition-colors"
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
