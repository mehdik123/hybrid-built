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

const ProofSection = () => {
  const { language, isRTL } = useLanguage();
  const lang = language as Lang;
  const t = landing.proof;
  const pinRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const rail: RailItem[] = [
    LEAD_PAIR,
    ...t.cases.map((c) => ({ beforeImg: c.beforeImg, afterImg: c.afterImg })),
    ...EXTRA_PAIRS,
  ];

  useEffect(() => {
    const section = pinRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const { gsap, ScrollTrigger } = getGsap();
    const reduced = prefersReducedMotion();
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { xPercent: isRTL ? 12 : -12, opacity: 0.15 },
        {
          xPercent: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      mm.add("(min-width: 768px)", () => {
        if (reduced) return;
        const getScroll = () => -(track.scrollWidth - window.innerWidth + 48);
        const tween = gsap.to(track, {
          x: () => (isRTL ? -getScroll() : getScroll()),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(track.scrollWidth * 0.85, window.innerHeight * 2.2)}`,
            pin: true,
            scrub: 0.85,
            anticipatePin: 1,
            invalidateOnRefresh: true,
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
      <div className="px-5 pt-20 md:px-10 md:pt-28 lg:px-14">
        <p className="font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-4">
          {t.eyebrow[lang]}
        </p>
        <h2
          ref={titleRef}
          className={`mega-type text-white mb-3 ${
            lang === "ar"
              ? "text-[clamp(2rem,7vw,5rem)] leading-[1.15] max-w-4xl"
              : "text-[clamp(3rem,11vw,8.5rem)] max-w-[90vw]"
          } ${isRTL ? "text-right ml-auto" : ""}`}
        >
          {t.title[lang]}
        </h2>
        <p
          className={`font-editorial text-sm md:text-base text-white/50 max-w-md mb-10 md:mb-14 ${
            isRTL ? "mr-0 ml-auto text-right" : ""
          }`}
        >
          {t.subhead[lang]}
        </p>
      </div>

      <div className="relative md:h-[70vh] flex items-center">
        <div
          ref={trackRef}
          className={`flex gap-3 md:gap-5 px-5 md:px-10 will-change-transform ${
            isRTL ? "flex-row-reverse" : ""
          } overflow-x-auto md:overflow-visible scrollbar-none pb-8 md:pb-0`}
        >
          {rail.map((item, i) => (
            <article
              key={`${item.beforeImg}-${i}`}
              className="relative shrink-0 w-[78vw] sm:w-[420px] md:w-[520px] lg:w-[560px]"
            >
              <div className="grid grid-cols-2 gap-1 h-[42vh] md:h-[58vh] min-h-[280px]">
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={item.beforeImg}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-[center_18%] scale-105"
                    draggable={false}
                  />
                  <span className="absolute top-3 left-3 font-editorial text-[10px] uppercase tracking-[0.16em] bg-black text-white px-2 py-1">
                    {t.before[lang]}
                  </span>
                </div>
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={item.afterImg}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-[center_18%] scale-105"
                    draggable={false}
                  />
                  <span className="absolute top-3 left-3 font-editorial text-[10px] uppercase tracking-[0.16em] bg-red-br text-white px-2 py-1">
                    {t.after[lang]}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="container-tight px-5 pb-20 md:px-10 md:pb-28">
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
