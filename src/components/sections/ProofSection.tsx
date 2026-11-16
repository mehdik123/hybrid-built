import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import TestimonialVideoCard from "@/components/TestimonialVideoCard";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

type Lang = "en" | "ar" | "fr";

type RailItem = {
  beforeImg: string;
  afterImg: string;
  name?: Record<Lang, string>;
  profession?: Record<Lang, string>;
  timeframe?: Record<Lang, string>;
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
    const section = sectionRef.current;
    if (!track || !viewport || !section) return;

    const { gsap } = getGsap();
    const reduced = prefersReducedMotion();

    // Title entrance
    const titleCtx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector("[data-proof-title]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 78%" },
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

    const applyCenterEffects = () => {
      const vpRect = viewport.getBoundingClientRect();
      const centerX = vpRect.left + vpRect.width / 2;
      const falloff = Math.max(140, vpRect.width * 0.4);
      const tiles = track.querySelectorAll<HTMLElement>("[data-rail-tile]");

      tiles.forEach((tile) => {
        const scaleEl = tile.querySelector<HTMLElement>("[data-rail-scale]");
        const wipe = tile.querySelector<HTMLElement>("[data-wipe]");
        if (!scaleEl) return;

        const r = tile.getBoundingClientRect();
        const tileCenter = r.left + r.width / 2;
        const dist = Math.abs(tileCenter - centerX);
        const tNorm = Math.min(1, dist / falloff);
        const focus = 1 - tNorm;

        if (reduced) {
          scaleEl.style.transform = "scale(1)";
          scaleEl.style.opacity = "1";
          if (wipe) wipe.style.clipPath = "inset(0 0% 0 0)";
          return;
        }

        const scale = 0.86 + focus * 0.2;
        scaleEl.style.transform = `scale(${scale.toFixed(3)})`;
        scaleEl.style.opacity = String(Math.max(0.5, 0.55 + focus * 0.45));
        scaleEl.style.zIndex = String(Math.round(focus * 20));

        // Before→after wipe: fully revealed (after) when centered
        if (wipe) {
          const reveal = focus; // 0 side → 1 center
          if (isRTL) {
            wipe.style.clipPath = `inset(0 ${reveal * 100}% 0 0)`;
          } else {
            wipe.style.clipPath = `inset(0 ${(1 - reveal) * 100}% 0 0)`;
          }
        }
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
      applyCenterEffects();
    };

    const baseSpeed = reduced ? 0.25 : 0.5;

    const tick = (time: number) => {
      if (!visible || dragging) {
        lastTime = time;
        if (visible) applyCenterEffects();
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
      const dx = e.clientX - lastPointerX;
      lastPointerX = e.clientX;
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
        /* */
      }
    };

    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);

    // Wait a frame so images/layout settle
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
          className="flex w-max items-center gap-3 md:gap-5 px-5 md:px-10 will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {loop.map((item, i) => (
            <article
              key={`${item.beforeImg}-${i}`}
              data-rail-tile
              className="relative shrink-0 w-[78vw] sm:w-[360px] md:w-[440px] lg:w-[500px] select-none"
            >
              <div
                data-rail-scale
                className="relative origin-center will-change-transform"
                style={{ transform: "scale(0.88)", opacity: 0.6 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted shadow-lg shadow-black/40">
                  <img
                    src={item.afterImg}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                    draggable={false}
                  />
                  <div
                    data-wipe
                    className="absolute inset-0"
                    style={{ clipPath: isRTL ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
                  >
                    <img
                      src={item.beforeImg}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                      draggable={false}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/50" />
                  <span className="absolute top-2.5 left-2.5 font-editorial text-[9px] uppercase tracking-[0.16em] bg-black text-white px-2 py-1">
                    {t.before[lang]}
                  </span>
                  <span className="absolute top-2.5 right-2.5 font-editorial text-[9px] uppercase tracking-[0.16em] bg-red-br text-white px-2 py-1">
                    {t.after[lang]}
                  </span>
                  {item.name && (
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/85 to-transparent">
                      <p className="font-display text-white text-base">{item.name[lang]}</p>
                      {item.timeframe && (
                        <p className="font-editorial text-[11px] text-white/60">
                          {item.timeframe[lang]}
                          {item.profession ? ` · ${item.profession[lang]}` : ""}
                        </p>
                      )}
                    </div>
                  )}
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
