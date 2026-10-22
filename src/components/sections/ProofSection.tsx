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

const BAThumb = ({
  src,
  label,
  variant,
}: {
  src: string;
  label: string;
  variant: "before" | "after";
}) => (
  <div className="relative h-full overflow-hidden rounded-md bg-muted">
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover pointer-events-none"
      draggable={false}
    />
    <span
      className={`absolute top-2.5 left-2.5 font-editorial text-[9px] uppercase tracking-[0.16em] px-2 py-1 pointer-events-none ${
        variant === "after" ? "bg-red-br text-white" : "bg-black text-white"
      }`}
    >
      {label}
    </span>
  </div>
);

const RailTile = ({
  item,
  before,
  after,
}: {
  item: RailItem;
  before: string;
  after: string;
}) => (
  <article
    data-rail-tile
    className="relative shrink-0 w-[280px] sm:w-[340px] md:w-[400px] select-none"
  >
    {/* Inner scales — outer stays unscaled so center distance stays stable */}
    <div
      data-rail-scale
      className="relative origin-center will-change-transform"
      style={{ transform: "scale(0.86)", opacity: 0.55 }}
    >
      <div className="grid grid-cols-2 gap-1.5 h-[220px] sm:h-[280px] md:h-[340px] shadow-lg shadow-black/40">
        <BAThumb src={item.beforeImg} label={before} variant="before" />
        <BAThumb src={item.afterImg} label={after} variant="after" />
      </div>
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

  const titleLead = t.title[lang].replace(t.titleAccent[lang], "").trim();
  const titleAccent = t.titleAccent[lang];

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

    const applyCenterScale = () => {
      const vpRect = viewport.getBoundingClientRect();
      const centerX = vpRect.left + vpRect.width / 2;
      // Distance at which a card is fully “side” sized
      const falloff = Math.max(160, vpRect.width * 0.42);

      const tiles = track.querySelectorAll<HTMLElement>("[data-rail-tile]");
      tiles.forEach((tile) => {
        const inner = tile.querySelector<HTMLElement>("[data-rail-scale]");
        if (!inner) return;

        // Measure the unscaled outer shell — avoids scale feedback loops
        const r = tile.getBoundingClientRect();
        const tileCenter = r.left + r.width / 2;
        const dist = Math.abs(tileCenter - centerX);
        const tNorm = Math.min(1, dist / falloff);

        if (reduced) {
          inner.style.transform = "scale(1)";
          inner.style.opacity = "1";
          return;
        }

        // Center ~1.18, sides ~0.82 — clear zoom when a pair hits the middle
        const scale = 1.18 - tNorm * 0.36;
        const opacity = 1 - tNorm * 0.42;
        inner.style.transform = `scale(${scale.toFixed(3)})`;
        inner.style.opacity = Math.max(0.5, opacity).toFixed(3);
        inner.style.zIndex = String(Math.round((1 - tNorm) * 20));
      });
    };

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
      applyCenterScale();
    };

    const baseSpeed = reduced ? 0.22 : 0.4;

    const tick = (time: number) => {
      if (!visible || dragging) {
        lastTime = time;
        if (visible) applyCenterScale();
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

    paint();
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
            className="font-display text-3xl md:text-5xl uppercase leading-[1.05] tracking-tight"
          >
            <span className="text-foreground">{titleLead} </span>
            <span className="text-white/45">{titleAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="mt-4 font-editorial text-sm md:text-base text-white/55 leading-relaxed max-w-md"
          >
            {t.subhead[lang]}
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.45 }}
        ref={viewportRef}
        className="relative overflow-x-clip overflow-y-visible cursor-grab touch-pan-y py-8 md:py-12"
        style={{ touchAction: "pan-y" }}
      >
        <div
          ref={trackRef}
          className="flex w-max items-center gap-3 md:gap-5 will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {loop.map((item, i) => (
            <RailTile
              key={`${item.beforeImg}-${i}`}
              item={item}
              before={t.before[lang]}
              after={t.after[lang]}
            />
          ))}
        </div>
      </motion.div>

      <div className="container-tight">
        <TestimonialVideoCard
          tag={t.voice.tag[lang]}
          title={t.voice.title[lang]}
          line={t.voice.line[lang]}
          mediaLabel={t.voice.mediaLabel[lang]}
          cta={t.voice.cta[lang]}
          inView={inView}
        />
      </div>
    </section>
  );
};

export default ProofSection;
