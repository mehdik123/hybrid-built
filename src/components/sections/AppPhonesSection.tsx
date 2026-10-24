import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SCREENS = [
  { src: ASSETS.appHome, label: { en: "Home", ar: "الرئيسية", fr: "Accueil" } },
  { src: ASSETS.appTrain, label: { en: "Train", ar: "تدريب", fr: "Train" } },
  { src: ASSETS.appNutrition, label: { en: "Nutrition", ar: "تغذية", fr: "Nutrition" } },
  { src: ASSETS.appProgress, label: { en: "Progress", ar: "التقدم", fr: "Progrès" } },
] as const;

const copy = {
  eyebrow: { en: "My coaching app", ar: "تطبيق التدريب ديالي", fr: "Mon app de coaching" },
  title: {
    en: "Private coaching in my app.",
    ar: "أنا اللي كنوجّهك. التطبيق غير كيساعدنا ننظمو.",
    fr: "Coaching privé dans mon app.",
  },
  lead: {
    en: "A smooth experience where we track your PRs, milestones, bodyweight, weekly photos, training volume, and muscle progress.",
    ar: "بزاف ديال الكوتشات كيعطيوك PDF وكيخليوك بوحدك. أنا اللي كنقاد البرنامج وكنتابع معاك نهار بنهار. التطبيق غير بلاصة كتلقا فيها التمارين، الماكلة والتقدم ديالك.",
    fr: "Une expérience fluide: on suit tes PRs, milestones, poids, photos hebdo, volume d’entraînement et progrès musculaire.",
  },
  hint: {
    en: "Tap a screen to focus it",
    ar: "كليكي على الشاشة باش تركز عليها",
    fr: "Tape un écran pour le mettre en avant",
  },
} as const;

const PhoneCard = ({
  src,
  label,
  inView,
  active,
  index,
  onSelect,
}: {
  src: string;
  label: string;
  inView: boolean;
  active: boolean;
  index: number;
  onSelect: () => void;
}) => (
  <motion.button
    type="button"
    onClick={onSelect}
    aria-label={label}
    aria-pressed={active}
    initial={{ opacity: 0, y: 28 }}
    animate={
      inView
        ? {
            opacity: 1,
            y: active ? -10 : 0,
            scale: active ? 1.06 : 0.94,
          }
        : {}
    }
    transition={{ type: "spring", stiffness: 220, damping: 24, delay: index * 0.06 }}
    className="relative shrink-0 snap-center border-0 bg-transparent p-0 cursor-pointer touch-manipulation"
    style={{
      width: "min(148px, 38vw)",
      zIndex: active ? 20 : 10,
      WebkitTapHighlightColor: "transparent",
    }}
  >
    <div
      className="relative aspect-[9/19] rounded-[1.6rem] border overflow-hidden bg-black transition-[border-color,box-shadow] duration-300"
      style={{
        borderColor: active ? "rgba(232,0,28,0.7)" : "rgba(255,255,255,0.22)",
        boxShadow: active
          ? "0 28px 56px rgba(0,0,0,0.65), 0 0 0 1px rgba(232,0,28,0.35)"
          : "0 16px 36px rgba(0,0,0,0.45)",
      }}
    >
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-2.5 w-10 rounded-full bg-black/90 z-10" />
      <img
        src={src}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover object-top"
        loading="eager"
        decoding="async"
        draggable={false}
      />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent pointer-events-none" />
      <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 font-editorial text-[9px] uppercase tracking-[0.18em] text-white/90">
        {label}
      </span>
    </div>
  </motion.button>
);

const AppPhonesSection = () => {
  const { language, isRTL } = useLanguage();
  const lang = language as "en" | "ar" | "fr";
  const ref = useRef(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  // Gentle auto-cycle so every screen gets focus without a click
  useEffect(() => {
    if (!inView || reduced) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % SCREENS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [inView, reduced]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[active] as HTMLElement | undefined;
    if (!card) return;
    const left = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
    el.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <section id="app" className="section-padding pt-6 md:pt-10 bg-ink" ref={ref}>
      <div className="container-tight">
        <div className={`max-w-2xl mb-6 md:mb-8 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-editorial text-[10px] uppercase tracking-[0.28em] text-red-br mb-4"
          >
            {copy.eyebrow[lang]}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.04 }}
            className="font-display text-3xl md:text-5xl uppercase leading-[1.08] text-foreground"
          >
            {copy.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="mt-4 font-editorial text-base text-white/55 leading-relaxed max-w-xl"
          >
            {copy.lead[lang]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.12 }}
            className="mt-3 font-editorial text-[11px] uppercase tracking-[0.18em] text-white/30"
          >
            {copy.hint[lang]}
          </motion.p>
        </div>

        <div
          className={`mb-5 flex flex-wrap gap-2 ${isRTL ? "justify-end" : "justify-start"} sm:justify-center`}
        >
          {SCREENS.map((screen, i) => (
            <button
              key={screen.src}
              type="button"
              onClick={() => setActive(i)}
              className={`font-editorial text-[10px] uppercase tracking-[0.16em] px-3 py-2 transition-colors ${
                active === i
                  ? "text-white border border-red-br/70 bg-white/[0.04]"
                  : "text-white/40 border border-white/10 hover:text-white/70"
              }`}
            >
              {screen.label[lang]}
            </button>
          ))}
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[70%] h-20 w-[70%] -translate-x-1/2 rounded-[100%] bg-black/50 blur-3xl"
          />

          <div
            ref={scrollerRef}
            className={`relative flex items-end gap-3 sm:gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 pt-6 px-4 sm:px-2 scrollbar-none ${
              isRTL ? "flex-row-reverse" : ""
            } sm:justify-center sm:overflow-visible`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {SCREENS.map((screen, i) => (
              <PhoneCard
                key={screen.src}
                src={screen.src}
                label={screen.label[lang]}
                index={i}
                inView={inView}
                active={active === i}
                onSelect={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPhonesSection;
