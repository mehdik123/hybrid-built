import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import MaskedLines from "@/components/MaskedLines";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { IG_DM_URL } from "@/lib/constants";

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { language, isRTL } = useLanguage();
  const t = translations.finalCta;

  return (
    <section id="final-cta" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
      <div className="container-tight">
        <div className={`max-w-3xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <MaskedLines
            lines={[`${t.title1[language]} ${t.title2[language]}`]}
            lineClassName="text-4xl md:text-5xl lg:text-6xl"
            redWordIndex={{ line: 0, wordIndex: language === "en" ? 2 : 0 }}
          />

          <p className="font-editorial text-sm uppercase tracking-[0.2em] text-muted-foreground mt-8 mb-6">
            {t.weeksFrom[language]}
          </p>

          <ul className={`space-y-3 mb-10 ${isRTL ? "text-right" : ""}`}>
            {t.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: isRTL ? 8 : -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-center gap-3 font-editorial text-foreground ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.25, delay: index * 0.12 + 0.05 }}
                >
                  <Check className="w-4 h-4 text-red-br shrink-0" />
                </motion.span>
                <span>{benefit[language]}</span>
              </motion.li>
            ))}
          </ul>

          <MagneticCTA href={IG_DM_URL}>{t.cta[language]} →</MagneticCTA>

          <p className={`font-editorial text-xs text-red-br mt-5 ${isRTL ? "text-right" : ""}`}>
            {t.spots[language]}
          </p>

          <p
            className={`font-editorial text-xs text-muted-foreground mt-5 ${isRTL ? "text-right" : ""}`}
          >
            {t.dmText[language]}{" "}
            <span className="text-red-br font-semibold uppercase">{t.coaching[language]}</span>{" "}
            {t.onInstagram[language]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
