import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import { ASSETS, TESTIMONIAL_REEL_URL } from "@/lib/constants";
import { useLightMotion } from "@/hooks/useLightMotion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/* ─── Extra transformations not in the 4 featured cases ─── */
const EXTRA_PAIRS = [
  { beforeImg: "/transformation-1-before.png",  afterImg: "/transformation-1-after.png"  },
  { beforeImg: "/transformation-5-before.png",  afterImg: "/transformation-5-after.png"  },
  { beforeImg: "/transformation-6-before.png",  afterImg: "/transformation-6-after.png"  },
  { beforeImg: "/transformation-8-before.png",  afterImg: "/transformation-8-after.png"  },
  { beforeImg: "/transformation-9-before.png",  afterImg: "/transformation-9-after.png"  },
  { beforeImg: "/transformation-10-before.png", afterImg: "/transformation-10-after.png" },
  { beforeImg: "/transformation-11-before.png", afterImg: "/transformation-11-after.png" },
];

/* ─── Single before/after photo with hover-parallax ─── */
const BAPhoto = ({
  src,
  label,
  delay = 0,
  inView,
}: {
  src: string;
  label: string;
  delay?: number;
  inView: boolean;
}) => {
  const light = useLightMotion();
  const reduced = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 120, damping: 22 });
  const sy = useSpring(my, { stiffness: 120, damping: 22 });
  const imgX = useTransform(sx, [0, 1], ["-3%", "3%"]);
  const imgY = useTransform(sy, [0, 1], ["-3%", "3%"]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (light || reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      className="relative aspect-[3/4] overflow-hidden bg-muted"
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        style={
          light || reduced
            ? undefined
            : { x: imgX, y: imgY, width: "106%", height: "106%", margin: "-3%" }
        }
      />
      <span className="absolute bottom-2 left-2 font-editorial text-[9px] uppercase tracking-[0.18em] text-white/80 bg-black/55 px-2 py-1 pointer-events-none">
        {label}
      </span>
    </motion.div>
  );
};

/* ─── Featured card (shows text) ─── */
const FeaturedCard = ({
  item,
  index,
  inView,
  isRTL,
  language,
  t,
}: {
  item: typeof landing.proof.cases[number];
  index: number;
  inView: boolean;
  isRTL: boolean;
  language: string;
  t: typeof landing.proof;
}) => {
  const [expanded, setExpanded] = useState(false);
  const lang = language as "en" | "ar" | "fr";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.06 + index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className={isRTL ? "text-right" : ""}
    >
      <div className="grid grid-cols-2 gap-1 mb-4">
        <BAPhoto
          src={item.beforeImg}
          label={t.before[lang]}
          delay={0.08 + index * 0.09}
          inView={inView}
        />
        <BAPhoto
          src={item.afterImg}
          label={t.after[lang]}
          delay={0.12 + index * 0.09}
          inView={inView}
        />
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className={`w-full flex items-center justify-between gap-3 group ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        <div className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 ${isRTL ? "flex-row-reverse" : ""}`}>
          <span className="font-display text-xl uppercase text-foreground">{item.name[lang]}</span>
          <span className="font-editorial text-xs uppercase tracking-[0.14em] text-red-br">
            {item.profession[lang]}
          </span>
          <span className="font-editorial text-xs text-white/40">· {item.timeframe[lang]}</span>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-white/40 group-hover:text-white/70 transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="font-editorial text-sm text-white/55 leading-relaxed pt-3">
              {item.result[lang]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* thin red accent rule */}
      <motion.div
        className="mt-4 h-px bg-gradient-to-r from-red-br/50 via-red-br/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: isRTL ? "right" : "left" }}
      />
    </motion.article>
  );
};

/* ─── Extra card (no text, just the pair) ─── */
const ExtraCard = ({
  pair,
  index,
  inView,
  before,
  after,
}: {
  pair: { beforeImg: string; afterImg: string };
  index: number;
  inView: boolean;
  before: string;
  after: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 18 }}
    transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="grid grid-cols-2 gap-1">
      <BAPhoto src={pair.beforeImg} label={before} delay={0} inView={inView} />
      <BAPhoto src={pair.afterImg} label={after} delay={0.04} inView={inView} />
    </div>
  </motion.div>
);

/* ─── Main section ─── */
const ProofSection = () => {
  const { language, isRTL } = useLanguage();
  const lang = language as "en" | "ar" | "fr";
  const t = landing.proof;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const seeAllLabel = {
    en: "See all transformations",
    ar: "شوف كل التحولات",
    fr: "Voir toutes les transformations",
  }[lang];

  const collapseLabel = {
    en: "Show less",
    ar: "إخفاء",
    fr: "Réduire",
  }[lang];

  return (
    <section id="proof" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
      <div className="container-tight">

        {/* Header */}
        <div className={`max-w-2xl mb-12 md:mb-16 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-editorial text-[10px] uppercase tracking-[0.28em] text-red-br mb-4"
          >
            {t.eyebrow[lang]}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="font-display text-3xl md:text-5xl uppercase leading-[1.08] text-foreground"
          >
            {t.title[lang]}
          </motion.h2>
        </div>

        {/* Featured 4 */}
        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {t.cases.map((item, i) => (
            <FeaturedCard
              key={item.name.en}
              item={item}
              index={i}
              inView={inView}
              isRTL={isRTL}
              language={language}
              t={t}
            />
          ))}
        </div>

        <motion.a
          href={TESTIMONIAL_REEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.28 }}
          className={`mt-10 md:mt-12 flex items-center gap-4 border border-white/[0.08] p-3 md:p-4 hover:border-white/20 transition-colors ${
            isRTL ? "flex-row-reverse text-right" : ""
          }`}
        >
          <img
            src={ASSETS.testimonialCover}
            alt=""
            className="h-16 w-16 md:h-20 md:w-20 object-cover shrink-0"
          />
          <div className="min-w-0">
            <p className="font-editorial text-[10px] uppercase tracking-[0.2em] text-red-br mb-1">
              {t.voice.tag[lang]}
            </p>
            <p className="font-editorial text-sm text-white/70 leading-snug">{t.voice.line[lang]}</p>
            <p className="font-editorial text-[10px] uppercase tracking-[0.16em] text-white/40 mt-2">
              {t.voice.cta[lang]}
            </p>
          </div>
        </motion.a>

        {/* Extra transformations (lazy revealed) */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
            >
              {EXTRA_PAIRS.map((pair, i) => (
                <ExtraCard
                  key={pair.beforeImg}
                  pair={pair}
                  index={i}
                  inView={true}
                  before={t.before[lang]}
                  after={t.after[lang]}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* See all / collapse button */}
        <motion.div
          className={`mt-10 ${isRTL ? "text-right" : ""}`}
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.38 }}
        >
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className={`inline-flex items-center gap-2 font-editorial text-xs uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors group ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <motion.span
              animate={{ rotate: showAll ? 90 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group-hover:text-red-br transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
            {showAll ? collapseLabel : seeAllLabel}
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProofSection;
