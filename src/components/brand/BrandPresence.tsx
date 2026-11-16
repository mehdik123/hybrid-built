import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { brand } from "@/content/brandLanding";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { useCountUp } from "@/hooks/useCountUp";

const BrandPresence = () => {
  const { language, isRTL } = useLanguage();
  const t = brand.presence;
  const countRef = useCountUp([language]);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.querySelectorAll("[data-pres]"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 80%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, [language]);

  const setRefs = (node: HTMLElement | null) => {
    rootRef.current = node;
    countRef.current = node;
  };

  return (
    <section
      id="presence"
      ref={setRefs}
      className="bg-black border-t border-white/[0.08] px-5 py-10 md:px-10 md:py-14 lg:px-14"
    >
      <div className={`max-w-[1280px] mx-auto ${isRTL ? "text-right" : ""}`}>
        <p data-pres className="font-editorial text-[11px] uppercase tracking-[0.22em] text-red-br mb-2">
          {t.eyebrow[language]}
        </p>
        <h2
          data-pres
          className={`mega-type text-white max-w-3xl mb-6 md:mb-8 ${
            language === "ar"
              ? "text-[clamp(1.8rem,5vw,3.4rem)] leading-[1.15]"
              : "text-[clamp(2.4rem,6vw,4.5rem)]"
          }`}
        >
          {t.title[language]}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.08]">
          {t.stats.map((stat) => (
            <div
              key={stat.label.en}
              data-pres
              className="bg-black px-5 py-5 md:px-8 md:py-7"
            >
              <p
                data-count
                data-end={stat.end}
                data-decimals={stat.decimals}
                data-suffix={stat.suffix}
                className="mega-type text-white text-[clamp(2.2rem,5.5vw,3.6rem)] mb-1.5"
              >
                0{stat.suffix}
              </p>
              <p className="font-editorial text-sm text-white/45 uppercase tracking-wider">
                {stat.label[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPresence;
