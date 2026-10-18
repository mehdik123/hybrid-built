import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import TestimonialVideoCard from "@/components/TestimonialVideoCard";

type Lang = "en" | "ar" | "fr";

type RailItem = {
  beforeImg: string;
  afterImg: string;
  name?: Record<Lang, string>;
  profession?: Record<Lang, string>;
  timeframe?: Record<Lang, string>;
};

/** Featured first in the rail */
const LEAD_PAIR: RailItem = {
  beforeImg: "/transformation-16-before.png",
  afterImg: "/transformation-16-after.png",
};

const EXTRA_PAIRS: RailItem[] = [
  { beforeImg: "/transformation-1-before.png", afterImg: "/transformation-1-after.png" },
  { beforeImg: "/transformation-5-before.png", afterImg: "/transformation-5-after.png" },
  { beforeImg: "/transformation-6-before.png", afterImg: "/transformation-6-after.png" },
  { beforeImg: "/transformation-8-before.png", afterImg: "/transformation-8-after.png" },
  { beforeImg: "/transformation-9-before.png", afterImg: "/transformation-9-after.png" },
  { beforeImg: "/transformation-10-before.png", afterImg: "/transformation-10-after.png" },
  { beforeImg: "/transformation-11-before.png", afterImg: "/transformation-11-after.png" },
  { beforeImg: "/transformation-12-before.png", afterImg: "/transformation-12-after.png" },
  { beforeImg: "/transformation-13-before.png", afterImg: "/transformation-13-after.png" },
  { beforeImg: "/transformation-14-before.png", afterImg: "/transformation-14-after.png" },
  { beforeImg: "/transformation-15-before.png", afterImg: "/transformation-15-after.png" },
];

const wrapX = (value: number, half: number, rtl: boolean) => {
  if (half <= 0) return value;
  let x = value;
  if (!rtl) {
    while (x <= -half) x += half;
    while (x > 0) x -= half;
    return x;
  }
  while (x >= half) x -= half;
  while (x < 0) x += half;
  return x;
};

const BAThumb = ({ src, label }: { src: string; label: string }) => (
  <div className="relative h-full overflow-hidden bg-muted">
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover pointer-events-none"
      draggable={false}
    />
    <span className="absolute bottom-2.5 left-2.5 font-editorial text-[10px] uppercase tracking-[0.16em] text-white/90 bg-black/55 px-2 py-1 pointer-events-none">
      {label}
    </span>
  </div>
);

const RailTile = ({
  item,
  isRTL,
  lang,
  before,
  after,
}: {
  item: RailItem;
  isRTL: boolean;
  lang: Lang;
  before: string;
  after: string;
}) => (
  <article className="shrink-0 w-[340px] sm:w-[400px] md:w-[460px] select-none">
    <div className="grid grid-cols-2 gap-1.5 h-[280px] sm:h-[340px] md:h-[400px]">
      <BAThumb src={item.beforeImg} label={before} />
      <BAThumb src={item.afterImg} label={after} />
    </div>
    <div className={`mt-3 h-11 ${isRTL ? "text-right" : ""}`}>
      {item.name && (
        <p className="font-editorial text-sm leading-snug text-white/70 line-clamp-2">
          <span className="font-display text-base uppercase text-foreground tracking-wide">
            {item.name[lang]}
          </span>
          {item.profession && (
            <span className="text-red-br"> · {item.profession[lang]}</span>
          )}
          {item.timeframe && (
            <span className="text-white/40"> · {item.timeframe[lang]}</span>
          )}
        </p>
      )}
    </div>
  </article>
);

const ProofSection = () => {
  const { language, isRTL } = useLanguage();
  const lang = language as Lang;
  const t = landing.proof;
  const sectionRef = useRef(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  const rail: RailItem[] = [
    LEAD_PAIR,
    ...t.cases.map((c) => ({
      beforeImg: c.beforeImg,
      afterImg: c.afterImg,
      name: c.name,
      profession: c.profession,
      timeframe: c.timeframe,
    })),
    ...EXTRA_PAIRS,
  ];

  const loop = [...rail, ...rail];

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    let x = 0;
    let raf = 0;
    let lastTime = performance.now();
    let visible = true;
    let dragging = false;
    let lastPointerX = 0;
    let startX = 0;
    let startY = 0;
    let axis: "h" | "v" | null = null;
    let activePointer: number | null = null;

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { rootMargin: "120px" }
    );
    io.observe(viewport);

    const paint = () => {
      const half = track.scrollWidth / 2;
      x = wrapX(x, half, isRTL);
      track.style.transform = `translate3d(${x}px, 0, 0)`;
    };

    const baseSpeed = reduced ? 0.25 : 0.55;

    const tick = (time: number) => {
      if (!visible || dragging) {
        lastTime = time;
        raf = requestAnimationFrame(tick);
        return;
      }

      const dt = Math.min(time - lastTime, 32);
      lastTime = time;
      x += (isRTL ? 1 : -1) * baseSpeed * (dt / 16);
      paint();
      raf = requestAnimationFrame(tick);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = true;
      axis = null;
      activePointer = e.pointerId;
      lastPointerX = e.clientX;
      startX = e.clientX;
      startY = e.clientY;
      viewport.setPointerCapture(e.pointerId);
      viewport.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging || e.pointerId !== activePointer) return;

      if (!axis) {
        const adx = Math.abs(e.clientX - startX);
        const ady = Math.abs(e.clientY - startY);
        if (adx < 8 && ady < 8) return;
        axis = adx > ady ? "h" : "v";
        if (axis === "v") {
          dragging = false;
          activePointer = null;
          viewport.style.cursor = "grab";
          try {
            viewport.releasePointerCapture(e.pointerId);
          } catch {
            /* already released */
          }
          return;
        }
      }

      if (axis !== "h") return;

      const dx = e.clientX - lastPointerX;
      lastPointerX = e.clientX;
      if (dx === 0) return;
      x += dx;
      paint();
    };

    const endDrag = (e: PointerEvent) => {
      if (activePointer !== null && e.pointerId !== activePointer) return;
      dragging = false;
      activePointer = null;
      axis = null;
      lastTime = performance.now();
      viewport.style.cursor = "grab";
      try {
        viewport.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
    };

    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", endDrag);
      viewport.removeEventListener("pointercancel", endDrag);
    };
  }, [isRTL, reduced, language]);

  return (
    <section
      id="proof"
      className="section-padding bg-ink border-t border-white/[0.06]"
      ref={sectionRef}
    >
      <div className="container-tight">
        <div className={`max-w-2xl mb-8 md:mb-10 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
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
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.45 }}
        ref={viewportRef}
        className="relative overflow-hidden cursor-grab touch-pan-y"
        style={{ touchAction: "pan-y" }}
      >
        <div
          ref={trackRef}
          className="flex w-max gap-5 md:gap-6 will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {loop.map((item, i) => (
            <RailTile
              key={`${item.beforeImg}-${i}`}
              item={item}
              isRTL={isRTL}
              lang={lang}
              before={t.before[lang]}
              after={t.after[lang]}
            />
          ))}
        </div>
      </motion.div>

      <div className="container-tight">
        <TestimonialVideoCard
          tag={t.voice.tag[lang]}
          line={t.voice.line[lang]}
          cta={t.voice.cta[lang]}
          inView={inView}
        />
      </div>
    </section>
  );
};

export default ProofSection;
