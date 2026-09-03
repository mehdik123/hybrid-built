import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";

const AudienceSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.audience;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="audience" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
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
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-12 md:gap-16">
          <ul className={`space-y-6 ${isRTL ? "text-right" : ""}`}>
            {t.forItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 + i * 0.08 }}
                className={`flex gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <span className="font-editorial text-xs text-red-br mt-1 shrink-0">0{i + 1}</span>
                <p className="font-editorial text-base text-foreground/85 leading-relaxed">{item[language]}</p>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`border-t md:border-t-0 md:border-l border-white/[0.08] pt-8 md:pt-0 ${
              isRTL ? "md:border-l-0 md:border-r md:pr-10 text-right" : "md:pl-10"
            }`}
          >
            <p className="font-editorial text-[10px] uppercase tracking-[0.22em] text-white/40 mb-5">
              {t.notTitle[language]}
            </p>
            <ul className="space-y-4">
              {t.notItems.map((item, i) => (
                <li key={i} className="font-editorial text-sm text-white/50 leading-relaxed">
                  {item[language]}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
