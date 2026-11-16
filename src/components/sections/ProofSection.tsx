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

const ProofSection = () => {
  const { language, isRTL } = useLanguage();
  const lang = language as Lang;
  const t = landing.proof;
  const pinRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

  useEffect(() => {
    const section = pinRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!section || !track) return;

    const { gsap, ScrollTrigger } = getGsap();
    const reduced = prefersReducedMotion();
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 75%" },
        }
      );

      // Cinematic wipe on each pair as it passes center
      const cards = track.querySelectorAll<HTMLElement>("[data-xform-card]");
      cards.forEach((card) => {
        const wipe = card.querySelector<HTMLElement>("[data-wipe]");
        const scaleEl = card.querySelector<HTMLElement>("[data-scale]");
        if (!wipe || !scaleEl) return;

        if (reduced) {
          wipe.style.clipPath = "inset(0 0% 0 0)";
          scaleEl.style.transform = "scale(1)";
          scaleEl.style.opacity = "1";
          return;
        }

        // Mobile / vertical: wipe as each card enters view
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
          onUpdate: (self) => {
            if (window.matchMedia("(min-width: 768px)").matches) return;
            const p = self.progress;
            if (isRTL) {
              wipe.style.clipPath = `inset(0 ${p * 100}% 0 0)`;
            } else {
              wipe.style.clipPath = `inset(0 ${(1 - p) * 100}% 0 0)`;
            }
            const s = 0.92 + p * 0.08;
            scaleEl.style.transform = `scale(${s})`;
            scaleEl.style.opacity = String(0.6 + p * 0.4);
          },
        });
      });

      mm.add("(min-width: 768px)", () => {
        if (reduced) return;

        const getScroll = () => -(track.scrollWidth - window.innerWidth + 64);

        const tween = gsap.to(track, {
          x: () => (isRTL ? Math.abs(getScroll()) : getScroll()),
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => `+=${Math.max(track.scrollWidth * 0.9, window.innerHeight * 2.4)}`,
            pin: true,
            scrub: 0.75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const center = window.innerWidth / 2;
              cards.forEach((card) => {
                const wipe = card.querySelector<HTMLElement>("[data-wipe]");
                const scaleEl = card.querySelector<HTMLElement>("[data-scale]");
                if (!wipe || !scaleEl) return;
                const r = card.getBoundingClientRect();
                const c = r.left + r.width / 2;
                const dist = Math.abs(c - center);
                const falloff = window.innerWidth * 0.4;
                const tNorm = Math.min(1, dist / falloff);
                const reveal = 1 - tNorm;
                if (isRTL) {
                  wipe.style.clipPath = `inset(0 ${reveal * 100}% 0 0)`;
                } else {
                  wipe.style.clipPath = `inset(0 ${(1 - reveal) * 100}% 0 0)`;
                }
                const s = 0.88 + reveal * 0.14;
                scaleEl.style.transform = `scale(${s})`;
                scaleEl.style.opacity = String(0.55 + reveal * 0.45);
              });
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });
    }, section);

    return () => {
      ctx.revert();
      mm.revert();
      ScrollTrigger.refresh();
    };
  }, [isRTL, language]);

  return (
    <section id="proof" ref={pinRef} className="relative bg-ink overflow-hidden">
      <div className="px-5 pt-16 md:px-10 md:pt-24 lg:px-14">
        <p className="font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-3">
          {t.eyebrow[lang]}
        </p>
        <h2
          ref={titleRef}
          className={`mega-type text-white mb-3 ${
            lang === "ar"
              ? "text-[clamp(1.75rem,6vw,4rem)] leading-[1.15] max-w-4xl"
              : "text-[clamp(2.6rem,9vw,7rem)] max-w-[92vw]"
          } ${isRTL ? "text-right ml-auto" : ""}`}
        >
          {t.title[lang]}
        </h2>
        <p
          className={`font-editorial text-sm md:text-base text-white/50 max-w-md mb-8 md:mb-12 ${
            isRTL ? "mr-0 ml-auto text-right" : ""
          }`}
        >
          {t.subhead[lang]}
        </p>
      </div>

      <div ref={stageRef} className="relative md:h-screen flex flex-col justify-center">
        <p
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mega-type text-white/[0.03] text-[clamp(5rem,22vw,18rem)] whitespace-nowrap"
        >
          RESULTS
        </p>

        <div
          ref={trackRef}
          className={`relative z-[1] flex gap-4 md:gap-6 px-5 md:px-10 will-change-transform ${
            isRTL ? "flex-row-reverse" : ""
          } overflow-x-auto md:overflow-visible scrollbar-none pb-6 md:pb-0`}
        >
          {rail.map((item, i) => (
            <article
              key={`${item.beforeImg}-${i}`}
              data-xform-card
              className="relative shrink-0 w-[85vw] sm:w-[420px] md:w-[520px] lg:w-[580px]"
            >
              <div
                data-scale
                className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted will-change-transform origin-center"
                style={{ transform: "scale(0.92)", opacity: 0.7 }}
              >
                {/* After (base) */}
                <img
                  src={item.afterImg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                  draggable={false}
                />
                {/* Before (wipes away to reveal after) */}
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

                {/* Divider line hint */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/40 mix-blend-overlay" />

                <span className="absolute top-3 left-3 font-editorial text-[9px] uppercase tracking-[0.16em] bg-black/80 text-white px-2 py-1">
                  {t.before[lang]}
                </span>
                <span className="absolute top-3 right-3 font-editorial text-[9px] uppercase tracking-[0.16em] bg-red-br text-white px-2 py-1">
                  {t.after[lang]}
                </span>

                {item.name && (
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="font-display text-white text-lg">{item.name[lang]}</p>
                    {item.timeframe && (
                      <p className="font-editorial text-xs text-white/60 mt-0.5">
                        {item.timeframe[lang]}
                        {item.profession ? ` · ${item.profession[lang]}` : ""}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="container-tight px-5 pb-16 md:px-10 md:pb-24">
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
