import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS, IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const OfferSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.offer;
  const rootRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { clipPath: "inset(12% 12% 12% 12%)", scale: 1.15 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
            end: "top 15%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        root.querySelectorAll("[data-offer-item]"),
        { x: isRTL ? 40 : -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 60%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, [isRTL, language]);

  return (
    <section id="offer" ref={rootRef} className="relative bg-ink border-t border-white/[0.08]">
      <div className="grid lg:grid-cols-12 min-h-[100svh]">
        <div
          className={`relative lg:col-span-5 min-h-[50vh] lg:min-h-full overflow-hidden ${
            isRTL ? "lg:order-2" : ""
          }`}
        >
          <div ref={imgRef} className="absolute inset-0 will-change-transform">
            <img
              src={ASSETS.pathCoaching}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[center_18%]"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 bg-gradient-to-t from-ink via-ink/50 to-transparent lg:hidden">
            <p className="mega-type text-white text-5xl">{t.eyebrow[language]}</p>
          </div>
        </div>

        <div
          className={`lg:col-span-7 flex flex-col justify-center px-5 py-16 md:px-12 lg:px-16 lg:py-24 ${
            isRTL ? "text-right lg:order-1" : ""
          }`}
        >
          <p className="hidden lg:block font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-4">
            {t.eyebrow[language]}
          </p>
          <h2
            className={`mega-type text-white mb-6 ${
              language === "ar"
                ? "text-[clamp(1.85rem,4.5vw,3.5rem)] leading-[1.2]"
                : "text-[clamp(3rem,7vw,5.5rem)]"
            }`}
          >
            {t.title[language]}
          </h2>
          <p className="font-editorial text-base text-white/55 leading-relaxed max-w-xl mb-10">
            {t.valueLead[language]}
          </p>

          <ul className="space-y-0 border-t border-white/10">
            {t.included.map((item, i) => {
              const open = active === i;
              return (
                <li key={item.title.en} data-offer-item className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`w-full py-5 md:py-6 flex gap-4 md:gap-6 items-start ${
                      isRTL ? "flex-row-reverse text-right" : "text-left"
                    }`}
                  >
                    <span
                      className={`font-impact text-2xl md:text-3xl shrink-0 ${
                        open ? "text-red-br" : "text-white/25"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className={`flex justify-between gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                        <span
                          className={`font-display text-lg md:text-2xl ${
                            open ? "text-white" : "text-white/60"
                          }`}
                        >
                          {item.title[language]}
                        </span>
                        <span className="text-red-br text-xl leading-none" aria-hidden>
                          {open ? "—" : "+"}
                        </span>
                      </div>
                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-400 ${
                          open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="font-editorial text-sm text-white/50 leading-relaxed">
                          {item.detail[language]}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-col gap-3">
            <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
            <p className="font-editorial text-xs text-white/35">{t.priceNote[language]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
