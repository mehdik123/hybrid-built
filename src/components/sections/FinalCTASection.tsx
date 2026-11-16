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
            className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight text-foreground"
          >
            {t.title[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="mt-5 font-editorial text-base md:text-lg text-white/55 leading-relaxed"
          >
            {t.body[language]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="mt-9 flex flex-col items-center gap-4"
          >
            <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
            <a
              href="#products"
              className="font-editorial text-sm text-white/45 hover:text-white/75 transition-colors"
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
