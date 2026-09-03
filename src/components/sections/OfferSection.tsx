import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";

const OfferSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.offer;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="offer" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
      <div className="container-tight">
        <div className={`max-w-2xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
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
            className="mt-5 font-editorial text-base text-white/60 leading-relaxed"
          >
            {t.valueLead[language]}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className={`mt-10 md:mt-12 max-w-xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}
        >
          <p className="font-editorial text-[10px] uppercase tracking-[0.22em] text-white/40 mb-4">
            {t.includedTitle[language]}
          </p>
          <ul className="space-y-3">
            {t.included.map((item, i) => (
              <li key={i} className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Check className="w-4 h-4 text-red-br shrink-0 mt-0.5" />
                <span className="font-editorial text-sm text-foreground/90">{item[language]}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.22 }}
          className="mt-10"
        >
          <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
