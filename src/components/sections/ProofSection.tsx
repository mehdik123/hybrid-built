import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import TestimonialVideoCard from "@/components/TestimonialVideoCard";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

type Lang = "en" | "ar" | "fr";

type RailItem = {
  beforeImg: string;
  afterImg: string;
};

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
  <div className="relative h-full min-h-0 w-full overflow-hidden bg-muted">
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      className="absolute inset-0 block h-full w-full object-cover object-center pointer-events-none"
      draggable={false}
    />
    <span
      className={`absolute top-2 left-2 z-[1] font-editorial text-[9px] uppercase tracking-[0.14em] px-2 py-1 pointer-events-none ${
        variant === "after" ? "bg-red-br text-white" : "bg-black text-white"
      }`}
    >
      {label}
    </span>
  </div>
);

const ProofSection = () => {
  const { language, isRTL } = useLanguage();
  const lang = language as Lang;
  const t = landing.proof;
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const rail: RailItem[] = [
    LEAD_PAIR,
    ...t.cases.map((c) => ({
      beforeImg: c.beforeImg,
      afterImg: c.afterImg,
    })),
    ...EXTRA_PAIRS,
  ];
  const loop = [...rail, ...rail];

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    const section = sectionRef.current;
    if (!track || !viewport || !section) return;

    const { gsap } = getGsap();
    const reduced = prefersReducedMotion();

    const titleCtx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector("[data-proof-title]"),
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 80%" },
        }
      );
    }, section);

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
      const falloff = Math.max(150, vpRect.width * 0.42);
      const tiles = track.querySelectorAll<HTMLElement>("[data-rail-tile]");

      tiles.forEach((tile) => {
        const inner = tile.querySelector<HTMLElement>("[data-rail-scale]");
        if (!inner) return;
        const r = tile.getBoundingClientRect();
        const tileCenter = r.left + r.width / 2;
        const dist = Math.abs(tileCenter - centerX);
        const tNorm = Math.min(1, dist / falloff);

        // Uniform card size — only opacity/z-index change at center (no scale jump)
        if (reduced) {
          inner.style.opacity = "1";
          return;
        }

        const opacity = 1 - tNorm * 0.35;
        inner.style.transform = "scale(1)";
        inner.style.opacity = Math.max(0.6, opacity).toFixed(3);
        inner.style.zIndex = String(Math.round((1 - tNorm) * 20));
      });
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { rootMargin: "100px" }
    );
    io.observe(viewport);

    const paint = () => {
      const half = track.scrollWidth / 2;
      x = wrapX(x, half, isRTL);
      track.style.transform = `translate3d(${x}px, 0, 0)`;
      applyCenterScale();
    };

    const baseSpeed = reduced ? 0.28 : 0.52;

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
            /* */
          }
          return;
        }
      }
      if (axis !== "h") return;
      x += e.clientX - lastPointerX;
      lastPointerX = e.clientX;
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
        /* */
      }
    };

    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);

    requestAnimationFrame(() => {
      paint();
      raf = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(raf);
      titleCtx.revert();
      io.disconnect();
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", endDrag);
      viewport.removeEventListener("pointercancel", endDrag);
    };
  }, [isRTL, language]);

  return (
    <section id="proof" ref={sectionRef} className="relative bg-ink overflow-hidden border-t border-white/[0.08]">
      <div className="px-5 pt-14 md:px-10 md:pt-24 lg:px-14">
        <p className="font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-3">
          {t.eyebrow[lang]}
        </p>
        <h2
          data-proof-title
          className={`mega-type text-white mb-3 ${
            lang === "ar"
              ? "text-[clamp(1.75rem,6vw,4rem)] leading-[1.15] max-w-4xl"
              : "text-[clamp(2.6rem,9vw,7rem)] max-w-[92vw]"
          } ${isRTL ? "text-right ml-auto" : ""}`}
        >
          {t.title[lang]}
        </h2>
        <p
          className={`font-editorial text-sm md:text-base text-white/50 max-w-md mb-6 md:mb-10 ${
            isRTL ? "mr-0 ml-auto text-right" : ""
          }`}
        >
          {t.subhead[lang]}
        </p>
      </div>

      <div
        ref={viewportRef}
        className="relative overflow-x-clip overflow-y-visible cursor-grab touch-pan-y py-6 md:py-10"
        style={{ touchAction: "pan-y" }}
      >
        <div
          ref={trackRef}
          className="flex w-max items-start gap-4 md:gap-5 px-5 md:px-10 will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {loop.map((item, i) => (
            <article
              key={`${item.beforeImg}-${i}`}
              data-rail-tile
              className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[380px] select-none"
            >
              <div
                data-rail-scale
                className="relative flex flex-col will-change-transform"
                style={{ opacity: 0.75 }}
              >
                {/* Identical frame for every pair */}
                <div className="grid grid-cols-2 gap-[2px] w-full h-[260px] md:h-[300px] overflow-hidden bg-black">
                  <BAThumb src={item.beforeImg} label={t.before[lang]} variant="before" />
                  <BAThumb src={item.afterImg} label={t.after[lang]} variant="after" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="container-tight px-5 pb-14 md:px-10 md:pb-24">
        <TestimonialVideoCard
          tag={t.voice.tag[lang]}
          title={t.voice.title[lang]}
          line={t.voice.line[lang]}
          mediaLabel={t.voice.mediaLabel[lang]}
          cta={t.voice.cta[lang]}
          inView
        />
      </div>
    </section>
  );
};

export default ProofSection;
