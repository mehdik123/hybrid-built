import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const FinalCTASection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.finalCta;
  const rootRef = useRef<HTMLElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        typeRef.current?.querySelectorAll("[data-final-line]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 70%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, [language]);

  return (
    <section
      id="final-cta"
      ref={rootRef}
      className="relative bg-ink border-t border-white/[0.08] overflow-hidden"
    >
      <div
        ref={typeRef}
        className={`relative z-10 w-full section-padding ${isRTL ? "text-right" : ""}`}
      >
        <div className={`max-w-5xl ${isRTL ? "mr-0 ml-auto" : ""}`}>
          <p
            data-final-line
            className="font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-4"
          >
            {t.eyebrow[language]}
          </p>
          <h2
            data-final-line
            className={`mega-type text-white ${
              language === "ar"
                ? "text-[clamp(1.9rem,6vw,4.2rem)] leading-[1.2]"
                : "text-[clamp(3rem,9.5vw,7.5rem)]"
            }`}
          >
            {t.title[language]}
          </h2>
          <p
            data-final-line
            className="mt-6 font-editorial text-base md:text-lg text-white/65 max-w-lg leading-relaxed"
          >
            {t.body[language]}
          </p>
          <div
            data-final-line
            className={`mt-10 flex flex-col gap-4 ${isRTL ? "items-end" : "items-start"}`}
          >
            <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
            <a
              href="#products"
              className="font-editorial text-xs uppercase tracking-[0.18em] text-white/45 hover:text-white transition-colors"
            >
              {t.secondary[language]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
