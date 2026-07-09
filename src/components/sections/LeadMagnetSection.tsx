import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { ASSETS } from "@/lib/constants";

const LeadMagnetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { language, isRTL } = useLanguage();
  const t = translations.products;

  return (
    <section id="lead-magnet" className="section-padding section-paper border-t border-black/[0.08]" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className={`grid lg:grid-cols-12 gap-8 items-center ${isRTL ? "text-right" : ""}`}
        >
          <div className={`lg:col-span-7 ${isRTL ? "lg:order-2" : ""}`}>
            <p className="font-editorial text-[10px] uppercase tracking-[0.25em] text-red-br mb-3">{t.free[language]}</p>
            <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight text-ink mb-4">
              {t.freeTitle[language]}
            </h2>
            <p className="font-editorial text-ink/70 leading-relaxed mb-6">{t.freeDescription[language]}</p>
            <ul className="space-y-2 mb-8">
              {[
                language === "ar" ? "خطة تمارين هجينة (علوي/سفلي)" : "Complete Hybrid Starter Routine",
                language === "ar" ? "دليل الماكروز الأساسي" : "The Core Hybrid Macro Guide",
                language === "ar" ? "قائمة تسوق للمحترفين" : "Elite Performance Grocery List",
              ].map((item) => (
                <li key={item} className={`flex gap-2 font-editorial text-sm text-ink/80 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Check className="w-4 h-4 text-red-br shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://gainz-frequency-finder.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-editorial text-xs font-semibold uppercase tracking-[0.15em] text-ink border border-ink/20 px-6 py-4 hover:border-red-br hover:text-red-br transition-colors"
            >
              {t.joinWaitlist[language]}
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="font-editorial text-xs text-ink/50 mt-3 italic">
              {language === "en" ? "Instant access — no email required" : language === "fr" ? "Accès instantané" : "الولوج فوري"}
            </p>
          </div>

          <div className={`lg:col-span-5 ${isRTL ? "lg:order-1" : ""}`}>
            <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
              <img
                src={ASSETS.mehdiTransformAfter}
                alt=""
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper/90 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-editorial text-xs uppercase tracking-wider text-ink/60">
                {language === "en" ? "Real hybrid results" : "نتائج حقيقية"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
