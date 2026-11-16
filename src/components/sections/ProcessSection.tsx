import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS, IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const STEP_MEDIA = [ASSETS.pathBlueprint, ASSETS.aboutPortrait, ASSETS.heroFallback];

const ProcessSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.process;
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const panels = root.querySelectorAll<HTMLElement>("[data-process-panel]");
    const ctx = gsap.context(() => {
      panels.forEach((panel) => {
        const img = panel.querySelector("[data-process-img]");
        gsap.fromTo(
          img,
          { scale: 1.2, yPercent: 8 },
          {
            scale: 1,
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
        gsap.fromTo(
          panel.querySelectorAll("[data-process-copy]"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: panel, start: "top 70%" },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, [language]);

  return (
    <section id="process" ref={rootRef} className="bg-ink border-t border-white/[0.08]">
      <div className={`px-5 pt-20 md:px-10 md:pt-28 lg:px-14 ${isRTL ? "text-right" : ""}`}>
        <p className="font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-4">
          {t.eyebrow[language]}
        </p>
        <h2
          className={`mega-type text-white max-w-5xl ${
            language === "ar"
              ? "text-[clamp(1.9rem,5vw,3.8rem)] leading-[1.2]"
              : "text-[clamp(2.8rem,8vw,6.5rem)]"
          }`}
        >
          {t.title[language]}
        </h2>
      </div>

      <div className="mt-12 md:mt-16">
        {t.steps.map((step, i) => (
          <article
            key={step.num}
            data-process-panel
            className={`relative min-h-[85svh] grid lg:grid-cols-2 border-t border-white/[0.08] ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative min-h-[45vh] lg:min-h-full overflow-hidden">
              <img
                data-process-img
                src={STEP_MEDIA[i] || STEP_MEDIA[0]}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[center_20%] will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/40" />
              <span className="absolute bottom-6 left-6 mega-type text-[5rem] md:text-[8rem] text-white/15 leading-none">
                {step.num}
              </span>
            </div>
            <div
              className={`flex flex-col justify-center px-5 py-14 md:px-12 lg:px-16 ${
                isRTL ? "text-right" : ""
              }`}
            >
              <p data-process-copy className="font-impact text-red-br text-3xl mb-4">
                {step.num}
              </p>
              <h3
                data-process-copy
                className={`font-display text-white mb-5 ${
                  language === "ar" ? "text-2xl md:text-3xl leading-snug" : "text-3xl md:text-5xl"
                }`}
              >
                {step.title[language]}
              </h3>
              <p
                data-process-copy
                className="font-editorial text-base text-white/55 leading-relaxed max-w-md"
              >
                {step.body[language]}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className={`px-5 py-16 md:px-10 lg:px-14 ${isRTL ? "text-right" : ""}`}>
        <MagneticCTA href={IG_DM_URL}>{landing.offer.cta[language]}</MagneticCTA>
      </div>
    </section>
  );
};

export default ProcessSection;
