import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { brand } from "@/content/brandLanding";
import { ASSETS } from "@/lib/constants";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const BrandIdentity = () => {
  const { language, isRTL } = useLanguage();
  const t = brand.identity;
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.querySelectorAll("[data-id-reveal]"),
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 70%" },
        }
      );
      gsap.fromTo(
        root.querySelector("[data-id-img]"),
        { scale: 1.1, clipPath: "inset(8% 8% 8% 8%)" },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: { trigger: root, start: "top 80%", end: "top 20%", scrub: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, [language]);

  return (
    <section id="identity" ref={rootRef} className="bg-black border-t border-white/[0.08]">
      <div className="grid lg:grid-cols-12 min-h-[88svh]">
        <div
          className={`relative lg:col-span-5 min-h-[48vh] lg:min-h-full overflow-hidden ${
            isRTL ? "lg:order-2" : ""
          }`}
        >
          <div data-id-img className="absolute inset-0">
            <img
              src={ASSETS.identityPortrait}
              alt="El Mehdi Kamal"
              className="h-full w-full object-cover object-[center_18%]"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className={`lg:col-span-7 flex flex-col justify-center px-5 py-14 md:px-12 lg:px-16 ${
            isRTL ? "text-right lg:order-1" : ""
          }`}
        >
          <p
            data-id-reveal
            className="font-editorial text-[11px] uppercase tracking-[0.22em] text-red-br mb-4"
          >
            {t.eyebrow[language]}
          </p>
          <h2
            data-id-reveal
            className={`mega-type text-white mb-8 ${
              language === "ar"
                ? "text-[clamp(1.8rem,5vw,3.5rem)] leading-[1.15]"
                : "text-[clamp(2.6rem,6vw,5rem)]"
            }`}
          >
            {t.title[language]}
          </h2>
          <div className="space-y-5 max-w-xl">
            {t.body.map((para, i) => (
              <p
                key={i}
                data-id-reveal
                className={`font-editorial text-[15px] md:text-base text-white/60 ${
                  language === "ar" ? "leading-[1.85]" : "leading-relaxed"
                }`}
              >
                {para[language]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;
