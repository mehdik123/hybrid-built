import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";
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
    <section id="offer" className="section-paper section-padding relative overflow-hidden" ref={ref}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[rgba(232,0,28,0.08)] blur-3xl"
      />

      <div className="container-tight relative">
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-start`}>
          <div className={`lg:col-span-6 ${isRTL ? "text-right lg:order-2" : ""}`}>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-editorial text-[10px] uppercase tracking-[0.28em] text-red-br mb-4"
            >
              {t.eyebrow[language]}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 }}
              className="font-display text-3xl md:text-5xl uppercase leading-[1.08]"
            >
              {t.title[language]}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="mt-5 font-editorial text-base md:text-lg text-[color:rgba(10,10,10,0.65)] leading-relaxed"
            >
              {t.valueLead[language]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 }}
              className="mt-10 flex flex-col gap-3"
            >
              <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
              <p className="font-editorial text-xs text-[color:rgba(10,10,10,0.45)]">{t.priceNote[language]}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 ${isRTL ? "text-right lg:order-1" : ""}`}
          >
            <p className="font-editorial text-[10px] uppercase tracking-[0.22em] text-[color:rgba(10,10,10,0.4)] mb-5">
              {t.includedTitle[language]}
            </p>
            <ul className="space-y-0 border-t border-[color:rgba(10,10,10,0.1)]">
              {t.included.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 16 : -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.16 + i * 0.06 }}
                  className={`flex gap-4 py-4 border-b border-[color:rgba(10,10,10,0.1)] ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span className="font-display text-sm text-red-br shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-editorial text-sm md:text-base text-[color:rgba(10,10,10,0.85)] leading-snug">
                    {item[language]}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className={`mt-14 md:mt-16 flex items-center gap-3 border-t border-[color:rgba(10,10,10,0.1)] pt-6 font-editorial text-xs uppercase tracking-[0.18em] text-[color:rgba(10,10,10,0.5)] hover:text-red-br transition-colors ${
            isRTL ? "flex-row-reverse text-right" : ""
          }`}
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.span>
          {t.pathCue[language]}
        </motion.a>
      </div>
    </section>
  );
};

export default OfferSection;
