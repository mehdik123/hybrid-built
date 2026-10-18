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

const CASCADE = [
  { x: -88, y: -36, z: 60, ry: -30, rx: 10 },
  { x: -28, y: -46, z: 25, ry: -16, rx: 7 },
  { x: 32, y: -54, z: -10, ry: -4, rx: 4 },
  { x: 90, y: -62, z: -45, ry: 10, rx: 2 },
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
    en: "Hover or tap a phone",
    ar: "مرّر أو كليكي على phone",
    fr: "Survole ou tape un téléphone",
  },
} as const;

const PhoneCard = ({
  src,
  label,
  index,
  inView,
  reduced,
  hovered,
  onHover,
}: {
  src: string;
  label: string;
  index: number;
  inView: boolean;
  reduced: boolean;
  hovered: number | null;
  onHover: (i: number | null) => void;
}) => {
  const c = CASCADE[index];
  const isHovered = hovered === index;
  const isDimmed = hovered !== null && !isHovered;

  return (
    <motion.button
      type="button"
      className="absolute left-1/2 top-1/2 border-0 bg-transparent p-0 cursor-pointer"
      style={{
        width: "min(168px, 36vw)",
        marginLeft: "calc(min(168px, 36vw) / -2)",
        marginTop: "calc(min(168px, 36vw) * 1.05 * -0.5)",
        transformStyle: "preserve-3d",
        zIndex: isHovered ? 50 : 10 + index,
        WebkitTapHighlightColor: "transparent",
      }}
      initial={{ opacity: 0, x: 0, y: 40, rotateY: 0, rotateX: 0, z: -80 }}
      animate={
        inView
          ? {
              opacity: isDimmed ? 0.35 : 1,
              x: c.x,
              y: isHovered ? c.y - 22 : c.y,
              z: isHovered ? c.z + 80 : c.z,
              rotateY: isHovered ? c.ry + 10 : c.ry,
              rotateX: isHovered ? c.rx + 2 : c.rx,
              scale: isHovered ? 1.1 : 1,
            }
          : {}
      }
      transition={{ type: "spring", stiffness: 140, damping: 20, mass: 0.9 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onHover(isHovered ? null : index)}
      aria-label={label}
    >
      <motion.div
        className="relative aspect-[9/19] rounded-[1.75rem] border border-white/30 overflow-hidden bg-black"
        style={{
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 40px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(232,0,28,0.5)"
            : "0 26px 55px rgba(0,0,0,0.6)",
        }}
        animate={
          reduced || !inView
            ? { y: 0 }
            : hovered === null
              ? { y: [0, index % 2 === 0 ? -10 : 8, 0] }
              : { y: 0 }
        }
        transition={
          reduced || !inView
            ? { duration: 0.2 }
            : hovered === null
              ? { duration: 3 + index * 0.45, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }
              : { duration: 0.2 }
        }
      >
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-3 w-12 rounded-full bg-black/90 z-10" />
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
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

        <div
          className="relative mx-auto w-full max-w-xl sm:max-w-2xl h-[360px] sm:h-[440px] md:h-[500px]"
          style={{ perspective: "1100px", perspectiveOrigin: "50% 50%" }}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[62%] h-24 w-[80%] -translate-x-1/2 rounded-[100%] bg-black/65 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(232,0,28,0.12)_0%,transparent_55%)]"
          />

          <motion.div
            className="relative h-full w-full"
            style={{ transformStyle: "preserve-3d" }}
            animate={
              reduced || !inView
                ? { rotateY: 0, rotateX: 0 }
                : hovered === null
                  ? { rotateY: [-10, 10, -10], rotateX: [4, -3, 4] }
                  : { rotateY: 0, rotateX: 2 }
            }
            transition={
              reduced || !inView
                ? { duration: 0.4 }
                : hovered === null
                  ? { duration: 7.5, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
            }
          >
            {SCREENS.map((screen, i) => (
              <PhoneCard
                key={screen.src}
                src={screen.src}
                label={screen.label[lang]}
                index={i}
                inView={inView}
                reduced={reduced}
                hovered={hovered}
                onHover={setHovered}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPhonesSection;
