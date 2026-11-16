import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const ProcessSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.process;
  const rootRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const { gsap, ScrollTrigger } = getGsap();
    const reduced = prefersReducedMotion();
    const steps = root.querySelectorAll<HTMLElement>("[data-step]");

    const ctx = gsap.context(() => {
      if (progressRef.current && !reduced) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            },
          }
        );
      }

      steps.forEach((step, i) => {
        const num = step.querySelector("[data-step-num]");
        const copy = step.querySelectorAll("[data-step-copy]");
        const line = step.querySelector("[data-step-line]");

        if (reduced) return;

        gsap.fromTo(
          num,
          { y: 40, opacity: 0.2 },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            duration: 0.7,
            scrollTrigger: { trigger: step, start: "top 85%" },
          }
        );

        gsap.fromTo(
          copy,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 0.55,
            ease: "power3.out",
            scrollTrigger: { trigger: step, start: "top 82%" },
          }
        );

        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "power2.out",
              duration: 0.6,
              scrollTrigger: { trigger: step, start: "top 80%" },
            }
          );
        }

        ScrollTrigger.create({
          trigger: step,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => step.classList.add("is-active"),
          onEnterBack: () => step.classList.add("is-active"),
          onLeave: () => {
            if (i < steps.length - 1) step.classList.remove("is-active");
          },
          onLeaveBack: () => step.classList.remove("is-active"),
        });
      });
    }, root);

    return () => ctx.revert();
  }, [language, isRTL]);

  return (
    <section id="process" ref={rootRef} className="relative bg-ink border-t border-white/[0.08]">
      <div className={`px-5 pt-12 md:px-10 md:pt-24 lg:px-14 ${isRTL ? "text-right" : ""}`}>
        <p className="font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-3 md:mb-4">
          {t.eyebrow[language]}
        </p>
        <h2
          className={`mega-type text-white max-w-5xl ${
            language === "ar"
              ? "text-[clamp(1.5rem,5vw,3.6rem)] leading-[1.2]"
              : "text-[clamp(2rem,7vw,6rem)]"
          }`}
        >
          {t.title[language]}
        </h2>
      </div>

      <div className="relative mt-6 md:mt-14 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-14 pb-4 md:pb-8">
        <div
          className={`pointer-events-none absolute top-0 bottom-0 w-px bg-white/10 hidden md:block ${
            isRTL ? "right-10 lg:right-14" : "left-10 lg:left-14"
          }`}
        >
          <div
            ref={progressRef}
            className="origin-top h-full w-full bg-red-br"
            style={{ transform: "scaleY(0)" }}
          />
        </div>

        <ol className="relative">
          {t.steps.map((step, i) => (
            <li
              key={step.num}
              data-step
              className={`relative grid grid-cols-[auto_1fr] md:grid-cols-12 gap-3 md:gap-8 py-6 md:py-20 border-t border-white/[0.08] ${
                isRTL ? "text-right" : ""
              }`}
            >
              <div className={`md:col-span-4 ${isRTL ? "md:order-2" : ""}`}>
                <p
                  data-step-num
                  className="mega-type text-[2.75rem] sm:text-[3.5rem] md:text-[clamp(5rem,14vw,11rem)] leading-none text-white/20 [.is-active_&]:text-red-br transition-colors duration-500"
                >
                  {step.num}
                </p>
              </div>

              <div
                className={`md:col-span-8 flex flex-col justify-center min-w-0 ${
                  isRTL ? "md:order-1" : ""
                }`}
              >
                <div
                  data-step-line
                  className={`hidden md:block h-px w-24 bg-red-br mb-6 origin-${isRTL ? "right" : "left"} ${
                    isRTL ? "ml-auto" : ""
                  }`}
                  style={{ transform: "scaleX(0)" }}
                />
                <h3
                  data-step-copy
                  className={`font-display text-white mb-2 md:mb-4 ${
                    language === "ar"
                      ? "text-lg md:text-3xl leading-snug"
                      : "text-xl md:text-5xl"
                  }`}
                >
                  {step.title[language]}
                </h3>
                <p
                  data-step-copy
                  className="font-editorial text-sm md:text-lg text-white/55 leading-relaxed max-w-xl"
                >
                  {step.body[language]}
                </p>
                <p
                  data-step-copy
                  className="mt-3 md:mt-6 font-editorial text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/30"
                >
                  {String(i + 1).padStart(2, "0")} / {String(t.steps.length).padStart(2, "0")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className={`px-5 py-10 md:px-10 md:py-14 lg:px-14 ${isRTL ? "text-right" : ""}`}>
        <MagneticCTA href={IG_DM_URL}>{landing.offer.cta[language]}</MagneticCTA>
      </div>
    </section>
  );
};

export default ProcessSection;
