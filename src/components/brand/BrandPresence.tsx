import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { brand } from "@/content/brandLanding";
import { IG_HANDLE, IG_PROFILE_URL } from "@/lib/constants";
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
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 75%" },
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
      className="bg-black border-t border-white/[0.08] px-5 py-12 md:px-10 md:py-20 lg:px-14"
    >
      <div className={`max-w-[1280px] mx-auto ${isRTL ? "text-right" : ""}`}>
        <p data-pres className="font-editorial text-[11px] uppercase tracking-[0.22em] text-red-br mb-3">
          {t.eyebrow[language]}
        </p>
        <h2
          data-pres
          className={`mega-type text-white max-w-3xl mb-8 md:mb-10 ${
            language === "ar"
              ? "text-[clamp(1.8rem,5vw,3.4rem)] leading-[1.15]"
              : "text-[clamp(2.4rem,6vw,4.5rem)]"
          }`}
        >
          {t.title[language]}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.08] mb-8">
          {t.stats.map((stat) => (
            <div
              key={stat.label.en}
              data-pres
              className="bg-black px-5 py-6 md:px-8 md:py-8"
            >
              <p
                data-count
                data-end={stat.end}
                data-decimals={stat.decimals}
                data-suffix={stat.suffix}
                className="mega-type text-white text-[clamp(2.4rem,6vw,4rem)] mb-2"
              >
                0{stat.suffix}
              </p>
              <p className="font-editorial text-sm text-white/45 uppercase tracking-wider">
                {stat.label[language]}
              </p>
            </div>
          ))}
        </div>

        <div data-pres>
          <a
            href={IG_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-cta inline-flex"
          >
            Instagram · @{IG_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandPresence;
