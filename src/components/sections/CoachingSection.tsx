import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import MaskedLines from "@/components/MaskedLines";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { IG_DM_URL } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const METHOD_DETAILS = {
  training: {
    en: "Hybrid strength + hypertrophy blocks. Form checks via video. Progressions updated every week based on your log.",
    ar: "بلوكات قوة + حجم. تصحيح بالفيديو. تحديث أسبوعي حسب السجل.",
    fr: "Blocs force + hypertrophie. Corrections vidéo. Progressions mises à jour chaque semaine.",
  },
  nutrition: {
    en: "Macros matched to your goal. Swap meals freely. Prep guides with photos. Weekly adjustments from check-ins.",
    ar: "ماكروز حسب هدفك. بدّل الوجبات. أدلة تحضير. تعديل أسبوعي.",
    fr: "Macros selon objectif. Repas interchangeables. Guides photo. Ajustements hebdo.",
  },
  support: {
    en: "Daily WhatsApp accountability. Direct access to me — not a bot, not an assistant.",
    ar: "متابعة يومية واتساب. وصول مباشر ليا — بلا بوت.",
    fr: "Suivi WhatsApp quotidien. Accès direct à moi — pas un bot.",
  },
};

const CoachingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { language, isRTL } = useLanguage();
  const t = translations.coaching;
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const methodRows = [
    {
      key: "training" as const,
      num: "01",
      title: t.features.training.title[language],
      points: t.features.training.points,
    },
    {
      key: "nutrition" as const,
      num: "02",
      title: t.features.nutrition.title[language],
      points: t.features.nutrition.points,
    },
    {
      key: "support" as const,
      num: "03",
      title: t.features.support.title[language],
      points: t.features.support.points,
    },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduced || window.innerWidth < 1024) return;
    if (v < 0.33) setActive(0);
    else if (v < 0.66) setActive(1);
    else setActive(2);
  });

  const activeRow = methodRows[active];

  return (
    <section id="coaching" className="bg-ink border-t border-white/[0.06]" ref={sectionRef}>
      <div className="container-tight section-padding !pb-0">
        <div className={`mb-10 md:mb-14 max-w-2xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <p className="font-editorial text-[10px] uppercase tracking-[0.3em] text-red-br mb-3">
            {t.whatYouGet[language]}
          </p>
          <MaskedLines
            lines={[t.title1[language], t.title2[language]]}
            lineClassName="text-4xl md:text-5xl lg:text-6xl"
            redWordIndex={{ line: 1, wordIndex: language === "en" ? 1 : 0 }}
          />
        </div>
      </div>

      {/* Desktop: pinned scrub */}
      <div className="hidden lg:block relative h-[280vh]">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="container-tight w-full grid grid-cols-12 gap-10 items-center">
            <div className={`col-span-4 space-y-2 ${isRTL ? "order-2 text-right" : ""}`}>
              {methodRows.map((row, i) => (
                <button
                  key={row.num}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`relative w-full text-left p-5 border transition-colors ${
                    active === i ? "border-red-br bg-white/[0.03]" : "border-white/[0.06] hover:border-white/20"
                  } ${isRTL ? "text-right" : ""}`}
                >
                  {hoveredRow === i && (
                    <div
                      className="absolute inset-0 opacity-[0.15] bg-cover bg-center pointer-events-none"
                      style={{ backgroundImage: "url(/hero-placeholder.jpg)" }}
                    />
                  )}
                  <span
                    className={`font-display text-5xl transition-all duration-500 ${
                      active === i ? "text-red-br" : "text-white/20"
                    }`}
                  >
                    {row.num}
                  </span>
                  <h3 className="font-display text-xl uppercase mt-1 relative z-10">{row.title}</h3>
                </button>
              ))}
            </div>

            <div className={`col-span-8 relative min-h-[320px] ${isRTL ? "order-1 text-right" : ""}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: isRTL ? -24 : 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? 24 : -24 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-display text-[8rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)] absolute -top-8 pointer-events-none">
                    {activeRow.num}
                  </span>
                  <h3 className="font-display text-4xl uppercase mb-6 relative z-10">{activeRow.title}</h3>
                  <ul className="space-y-3 relative z-10">
                    {activeRow.points.map((point, pi) => (
                      <li
                        key={pi}
                        className={`flex gap-3 font-editorial text-base text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}
                      >
                        <span className="text-red-br shrink-0">—</span>
                        <span>{point[language]}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(openAccordion === active ? null : active)}
                    className="mt-6 font-editorial text-xs uppercase tracking-wider text-red-br flex items-center gap-2"
                  >
                    {openAccordion === active ? "Less" : "More"}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === active ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-500 ease-expo"
                    style={{ maxHeight: openAccordion === active ? 120 : 0 }}
                  >
                    <p className="font-editorial text-sm text-muted-foreground mt-3 leading-relaxed">
                      {METHOD_DETAILS[activeRow.key][language]}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal snap */}
      <div className="lg:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 px-5 pb-8 scrollbar-hide">
        {methodRows.map((row, index) => (
          <div
            key={row.num}
            className="snap-center shrink-0 w-[85vw] max-w-sm border border-white/[0.08] bg-[#111] p-6"
          >
            <span className="font-display text-4xl text-red-br">{row.num}</span>
            <h3 className="font-display text-2xl uppercase mt-2 mb-4">{row.title}</h3>
            <ul className="space-y-2 mb-4">
              {row.points.map((point, pi) => (
                <li key={pi} className="font-editorial text-sm text-muted-foreground">
                  — {point[language]}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
              className="font-editorial text-xs uppercase text-red-br"
            >
              {openAccordion === index ? "Less ↑" : "More ↓"}
            </button>
            {openAccordion === index && (
              <p className="font-editorial text-sm text-muted-foreground mt-3">{METHOD_DETAILS[row.key][language]}</p>
            )}
          </div>
        ))}
      </div>

      <div className="container-tight section-padding">
        <div className={`mt-8 max-w-xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <h3 className="font-editorial text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            {t.whoIsFor[language]}
          </h3>
          <ul className="space-y-3">
            {t.whoIsForItems.map((item, i) => (
              <li key={i} className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Check className="w-4 h-4 text-red-br shrink-0" />
                <span className="font-editorial text-foreground">{item[language]}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 pt-10 border-t border-white/[0.06]">
          <div className={`grid lg:grid-cols-2 gap-10 items-end ${isRTL ? "text-right" : ""}`}>
            <div>
              <h3 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-4">
                {language === "ar" ? "واش راك مستعد؟" : language === "fr" ? "Prêt ?" : "Ready?"}
              </h3>
              <p className="font-editorial text-xs uppercase tracking-[0.2em] text-red-br mb-3">
                {t.dmInstructions[language]}
              </p>
              <ul className="space-y-1 font-editorial text-sm text-muted-foreground">
                <li>— {t.dmItem1[language]}</li>
                <li>— {t.dmItem2[language]}</li>
                <li>— {t.dmItem3[language]}</li>
              </ul>
            </div>
            <MagneticCTA href={IG_DM_URL}>{t.messageMe[language]} →</MagneticCTA>
          </div>
        </div>

        <div
          className={`mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center gap-4 ${isRTL ? "sm:flex-row-reverse text-right" : ""}`}
        >
          <p className="font-editorial text-sm text-muted-foreground flex-1">{t.affordabilityMessage[language]}</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-editorial text-xs font-semibold uppercase tracking-[0.15em] text-red-br hover:gap-3 transition-all shrink-0 nav-link-editorial"
          >
            {t.checkProducts[language]}
            <ArrowRight className="w-4 h-4 cta-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoachingSection;
