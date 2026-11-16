import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/AppContext";
import { brand } from "@/content/brandLanding";
import { ASSETS } from "@/lib/constants";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const BrandWork = () => {
  const { language, isRTL } = useLanguage();
  const t = brand.work;
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.querySelectorAll("[data-work]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 72%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, [language]);

  const paths = [
    {
      ...t.coaching,
      to: "/coaching",
      image: ASSETS.gymPortrait,
      object: "object-[center_20%]",
    },
    {
      ...t.hybrid,
      to: "/hybrid-build",
      image: ASSETS.hybridCover,
      object: "object-top",
      subtitle: t.hybrid.subtitle,
    },
  ];

  return (
    <section id="work" ref={rootRef} className="bg-black border-t border-white/[0.08]">
      <div className={`px-5 pt-16 md:px-10 md:pt-24 lg:px-14 ${isRTL ? "text-right" : ""}`}>
        <p data-work className="font-editorial text-[11px] uppercase tracking-[0.22em] text-red-br mb-3">
          {t.eyebrow[language]}
        </p>
        <h2
          data-work
          className={`mega-type text-white max-w-4xl mb-4 ${
            language === "ar"
              ? "text-[clamp(1.8rem,5vw,3.6rem)] leading-[1.15]"
              : "text-[clamp(2.6rem,7vw,5.5rem)]"
          }`}
        >
          {t.title[language]}
        </h2>
        <p data-work className="font-editorial text-base text-white/55 max-w-lg mb-12 md:mb-16">
          {t.lead[language]}
        </p>
      </div>

      <div className="grid md:grid-cols-2">
        {paths.map((path) => (
          <Link
            key={path.to}
            to={path.to}
            data-work
            className="group relative min-h-[70vh] md:min-h-[85vh] overflow-hidden border-t md:border-t-0 md:border-l border-white/[0.08] first:md:border-l-0"
          >
            <img
              src={path.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover ${path.object} transition-transform duration-700 group-hover:scale-[1.04]`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/25" />
            <div
              className={`relative z-10 h-full flex flex-col justify-end p-6 md:p-10 lg:p-12 ${
                isRTL ? "text-right" : ""
              }`}
            >
              <span className="font-impact text-red-br text-3xl mb-3">{path.tag[language]}</span>
              <h3
                className={`mega-type text-white mb-2 ${
                  language === "ar"
                    ? "text-[clamp(1.5rem,3.5vw,2.6rem)] leading-[1.2]"
                    : "text-[clamp(2rem,4vw,3.4rem)]"
                }`}
              >
                {path.title[language]}
              </h3>
              {"subtitle" in path && path.subtitle && (
                <p className="font-editorial text-sm text-white/55 mb-3">{path.subtitle[language]}</p>
              )}
              <p className="font-editorial text-sm md:text-[15px] text-white/70 max-w-md mb-8 leading-relaxed">
                {path.body[language]}
              </p>
              <span className="btn-ghost-cta w-fit group-hover:border-white group-hover:bg-white/10">
                {path.cta[language]}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrandWork;
