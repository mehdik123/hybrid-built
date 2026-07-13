import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import MaskedLines from "@/components/MaskedLines";
import MagneticCTA from "@/components/motion/MagneticCTA";
import MethodPinnedDesktop from "@/components/sections/MethodPinnedDesktop";
import { IG_DM_URL } from "@/lib/constants";

const METHOD_DETAILS = {
  training: {
    en: "You stop guessing what to do Monday. I build the block around your goal: size, strength, skills. You film the hard lifts. I correct them before they steal progress. Every week the targets move up. That is how bodies change.",
    ar: "كتوقف تخمّن شنو دير نهار الإثنين. كنيني البلوك على هدفك: حجم، قوة، مهارات. تصوّر التمارين الصعيبة. كنصحّحها قبل ما تسرق التقدم. كل أسبوع الأهداف كطلع. هاكا كيتبدّلو الأجسام.",
    fr: "Tu arrêtes de te demander quoi faire lundi. Je construis le bloc autour de ton objectif: volume, force, skills. Tu filmes les lifts durs. Je corrige avant qu'ils volent ta progression. Chaque semaine les cibles montent. C'est comme ça que les corps changent.",
  },
  nutrition: {
    en: "Food stops being the thing that ruins training. You get numbers that match your goal, meals you can actually live with, and weekly changes when fat loss stalls or the scale lies. The result: stay full enough to train hard and lean enough to see it.",
    ar: "الماكلة ما بقيتش هي اللي كتخسر التدريب. كتحصل على أرقام على هدفك، وجبات تقدر تعيش بيها، وتعديل أسبوعي ملي نقص الدهون كيتوقف أو الميزان كيكذب. النتيجة: تشبع باش تدرّب قوي وتبان النتيجة.",
    fr: "La bouffe arrête de saboter ton training. Des chiffres selon ton objectif, des repas vivables, des ajustements hebdo quand la sèche stagne. Résultat: assez d'énergie pour pousser, assez sec pour le voir.",
  },
  support: {
    en: "The difference between a PDF and a transform is someone in your pocket. You message me. I course-correct the same day. No group chat noise. No waiting three days. That pressure is what turns plans into physiques.",
    ar: "الفرق بين PDF وتحوّل هو شي واحد فجيبك. كتصيفط ليا. كنعدّل نهار نتاعو. بلا ضوضاء غروب. بلا انتظار 3 أيام. هاد الضغط هو اللي كيحوّل البرامج لأجسام.",
    fr: "La différence entre un PDF et une transforme, c'est quelqu'un dans ta poche. Tu m'écris. Je corrige le jour même. Pas de bruit de groupe. Pas d'attente de 3 jours. Cette pression transforme les plans en physiques.",
  },
};

const CoachingSection = () => {
  const { language, isRTL } = useLanguage();
  const t = translations.coaching;
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

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

  return (
    <section id="coaching" className="bg-ink border-t border-white/[0.06]">
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

      <div className="hidden lg:block">
        <MethodPinnedDesktop
          methodRows={methodRows}
          methodDetails={METHOD_DETAILS}
          language={language}
          isRTL={isRTL}
        />
      </div>

      <div className="lg:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 px-5 pb-8 scrollbar-hide overscroll-x-contain touch-pan-x">
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
                  · {point[language]}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
              className="font-editorial text-xs uppercase text-red-br touch-target"
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

        <div className={`mt-12 max-w-xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <h3 className="font-editorial text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            {t.bonusesTitle[language]}
          </h3>
          <ul className="space-y-3">
            {t.bonuses.map((bonus, i) => (
              <li key={i} className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Check className="w-4 h-4 text-red-br shrink-0" />
                <span className="font-editorial text-foreground">{bonus[language]}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 pt-10 border-t border-white/[0.06]">
          <div className={`grid lg:grid-cols-2 gap-10 items-end ${isRTL ? "text-right" : ""}`}>
            <div>
              <h3 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-4">
                {t.applyHeadline[language]}
              </h3>
              <p className="font-editorial text-xs uppercase tracking-[0.2em] text-red-br mb-3">
                {t.dmInstructions[language]}
              </p>
              <ul className="space-y-1 font-editorial text-sm text-muted-foreground">
                <li>· {t.dmItem1[language]}</li>
                <li>· {t.dmItem2[language]}</li>
                <li>· {t.dmItem3[language]}</li>
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
