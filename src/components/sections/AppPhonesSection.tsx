import { useRef, useState } from "react";
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

/** Rest fan positions (active phone goes to center) */
const CASCADE = [
  { x: -110, y: 8, z: -40, ry: -28, rx: 6 },
  { x: -40, y: -6, z: -20, ry: -12, rx: 4 },
  { x: 40, y: -6, z: -20, ry: 12, rx: 4 },
  { x: 110, y: 8, z: -40, ry: 28, rx: 6 },
] as const;

const copy = {
  eyebrow: { en: "My coaching app", ar: "الـ app ديالي", fr: "Mon app de coaching" },
  title: {
    en: "Private coaching in my app.",
    ar: "Private coaching فـ app ديالي.",
    fr: "Coaching privé dans mon app.",
  },
  lead: {
    en: "A smooth experience where we track your PRs, milestones, bodyweight, weekly photos, training volume, and muscle progress.",
    ar: "تجربة سلسة كنتبعو فيها الـ PRs، الـ milestones، الوزن، الصور الأسبوعية، الـ training volume، وتقدم العضلات.",
    fr: "Une expérience fluide: on suit tes PRs, milestones, poids, photos hebdo, volume d’entraînement et progrès musculaire.",
  },
  hint: {
    en: "Tap a phone to bring it forward",
    ar: "كليكي على phone باش يجي للقدام",
    fr: "Tape un téléphone pour l’avancer",
  },
} as const;

const PhoneCard = ({
  src,
  label,
  index,
  inView,
  reduced,
  active,
  hovered,
  onSelect,
  onHover,
}: {
  src: string;
  label: string;
  index: number;
  inView: boolean;
  reduced: boolean;
  active: boolean;
  hovered: boolean;
  onSelect: () => void;
  onHover: (v: boolean) => void;
}) => {
  const c = CASCADE[index];
  const raised = active || hovered;

  return (
    <motion.button
      type="button"
      className="absolute left-1/2 top-1/2 border-0 bg-transparent p-0 cursor-pointer touch-manipulation"
      style={{
        width: "min(168px, 34vw)",
        marginLeft: "calc(min(168px, 34vw) / -2)",
        marginTop: "calc(min(168px, 34vw) * 1.05 * -0.5)",
        transformStyle: "preserve-3d",
        zIndex: active ? 60 : raised ? 40 : 10 + index,
        WebkitTapHighlightColor: "transparent",
      }}
      initial={{ opacity: 0, x: 0, y: 36, rotateY: 0, rotateX: 0, z: -60, scale: 0.92 }}
      animate={
        inView
          ? active
            ? {
                opacity: 1,
                x: 0,
                y: -18,
                z: 120,
                rotateY: 0,
                rotateX: 2,
                scale: 1.18,
              }
            : {
                opacity: raised ? 0.55 : 0.9,
                x: c.x,
                y: c.y,
                z: c.z,
                rotateY: c.ry,
                rotateX: c.rx,
                scale: 1,
              }
          : {}
      }
      transition={{ type: "spring", stiffness: 160, damping: 22, mass: 0.85 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onSelect}
      aria-label={label}
      aria-pressed={active}
    >
      <motion.div
        className="relative aspect-[9/19] rounded-[1.75rem] border overflow-hidden bg-black"
        style={{
          transformStyle: "preserve-3d",
          borderColor: active ? "rgba(232,0,28,0.65)" : "rgba(255,255,255,0.28)",
          boxShadow: active
            ? "0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(232,0,28,0.45)"
            : "0 22px 48px rgba(0,0,0,0.55)",
        }}
        animate={
          reduced || !inView || active
            ? { y: 0 }
            : { y: [0, index % 2 === 0 ? -8 : 6, 0] }
        }
        transition={
          reduced || !inView || active
            ? { duration: 0.2 }
            : { duration: 3.2 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }
        }
      >
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-3 w-12 rounded-full bg-black/90 z-10" />
        <img
          src={src}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="eager"
          decoding="async"
          draggable={false}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 font-editorial text-[9px] uppercase tracking-[0.2em] text-white/90">
          {label}
        </span>
      </motion.div>
    </motion.button>
  );
};

const AppPhonesSection = () => {
  const { language, isRTL } = useLanguage();
  const lang = language as "en" | "ar" | "fr";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

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

        {/* Tab strip: always reachable on mobile */}
        <div
          className={`mb-4 flex flex-wrap gap-2 ${isRTL ? "justify-end" : "justify-start"} sm:justify-center`}
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

        <div
          className="relative mx-auto w-full max-w-xl sm:max-w-2xl h-[380px] sm:h-[460px] md:h-[520px] overflow-visible"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 45%" }}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[62%] h-24 w-[80%] -translate-x-1/2 rounded-[100%] bg-black/65 blur-3xl"
          />

          <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
            {SCREENS.map((screen, i) => (
              <PhoneCard
                key={screen.src}
                src={screen.src}
                label={screen.label[lang]}
                index={i}
                inView={inView}
                reduced={reduced}
                active={active === i}
                hovered={hovered === i}
                onSelect={() => setActive(i)}
                onHover={(v) => setHovered(v ? i : null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPhonesSection;
