import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
        <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-start`}>
          <div className={`lg:col-span-5 ${isRTL ? "text-right lg:order-2" : ""}`}>
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
              transition={{ delay: 0.04 }}
              className="font-display text-4xl md:text-5xl uppercase leading-[1.05] text-foreground"
            >
              {t.title[language]}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="mt-5 font-editorial text-base text-white/55 leading-relaxed"
            >
              {t.valueLead[language]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.14 }}
              className="mt-8 flex flex-col gap-3"
            >
              <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
              <p className="font-editorial text-xs text-white/35">{t.priceNote[language]}</p>
            </motion.div>
          </div>

          <div className={`lg:col-span-7 ${isRTL ? "text-right lg:order-1" : ""}`}>
            <ul className="border-t border-white/[0.1]">
              {t.included.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className={`flex gap-5 py-5 border-b border-white/[0.1] ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <span className="font-editorial text-xs text-red-br shrink-0 pt-1 tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-editorial text-base md:text-lg text-white/85 leading-snug">
                    {item[language]}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
