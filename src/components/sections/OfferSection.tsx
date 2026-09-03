import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";
import { useLightMotion } from "@/hooks/useLightMotion";

const OfferSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.offer;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const light = useLightMotion();

  return (
    <section id="offer" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
      <div className="container-tight">
        <div className={`max-w-2xl mb-10 md:mb-14 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
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
          transition={{ delay: 0.12 }}
          className={`mb-12 max-w-xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}
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

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-3xl">
          {t.tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.14 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 md:p-8 border ${
                tier.featured ? "border-red-br bg-white/[0.03]" : "border-white/[0.08]"
              } ${isRTL ? "text-right" : ""}`}
              layout
            >
              {tier.featured && !light && (
                <motion.div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, transparent 0%, rgba(232,0,28,0.35) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                  }}
                >
                  <motion.div
                    style={{ width: "100%", height: "100%" }}
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={inView ? { backgroundPosition: ["0% 50%", "100% 50%"] } : {}}
                    transition={{ duration: 1.4, ease: "linear" }}
                  />
                </motion.div>
              )}
              <div className={`flex items-center gap-3 mb-5 ${isRTL ? "flex-row-reverse" : ""}`}>
                <span
                  className={`font-editorial text-[10px] uppercase tracking-[0.2em] ${
                    tier.featured ? "text-red-br" : "text-white/40"
                  }`}
                >
                  {tier.featured ? t.defaultBadge[language] : t.premiumBadge[language]}
                </span>
              </div>
              <h3 className="font-display text-2xl uppercase text-foreground">{tier.name[language]}</h3>
              <p className="font-display text-4xl md:text-5xl text-foreground mt-3">{tier.price[language]}</p>
              <p className="mt-4 font-editorial text-sm text-white/55 leading-relaxed">{tier.detail[language]}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className={`mt-8 max-w-xl font-editorial text-sm text-white/45 leading-relaxed ${
            isRTL ? "mr-0 ml-auto text-right" : ""
          }`}
        >
          {t.oneMonth[language]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="mt-10"
        >
          <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
