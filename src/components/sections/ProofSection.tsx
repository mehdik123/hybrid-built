import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";

const ProofSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.proof;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proof" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
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

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {t.cases.map((item, i) => (
            <motion.article
              key={item.name.en}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={isRTL ? "text-right" : ""}
            >
              <div className="grid grid-cols-2 gap-1 mb-5">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={item.beforeImg}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute bottom-2 left-2 font-editorial text-[9px] uppercase tracking-[0.18em] text-white/80 bg-black/50 px-2 py-1">
                    {t.before[language]}
                  </span>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={item.afterImg}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute bottom-2 left-2 font-editorial text-[9px] uppercase tracking-[0.18em] text-white/80 bg-black/50 px-2 py-1">
                    {t.after[language]}
                  </span>
                </div>
              </div>
              <div className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <h3 className="font-display text-xl uppercase text-foreground">{item.name[language]}</h3>
                <span className="font-editorial text-xs uppercase tracking-[0.14em] text-red-br">
                  {item.profession[language]}
                </span>
                <span className="font-editorial text-xs text-white/40">· {item.timeframe[language]}</span>
              </div>
              <p className="font-editorial text-sm text-white/55 leading-relaxed">{item.result[language]}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
