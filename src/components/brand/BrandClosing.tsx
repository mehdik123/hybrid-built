import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/AppContext";
import { brand } from "@/content/brandLanding";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const BrandClosing = () => {
  const { language, isRTL } = useLanguage();
  const t = brand.closing;
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.querySelectorAll("[data-close]"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 78%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, [language]);

  return (
    <section
      id="close"
      ref={rootRef}
      className="relative bg-black border-t border-white/[0.08] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(250,49,57,0.18), transparent 70%)",
        }}
      />
      <div
        className={`relative z-10 w-full max-w-[1280px] mx-auto px-5 py-12 md:px-10 md:py-16 lg:px-14 ${
          isRTL ? "text-right" : ""
        }`}
      >
        <h2
          data-close
          className={`mega-type text-white max-w-5xl mb-4 ${
            language === "ar"
              ? "text-[clamp(1.8rem,5.5vw,4rem)] leading-[1.15]"
              : "text-[clamp(2.4rem,7vw,5.5rem)]"
          }`}
        >
          {t.line[language]}
        </h2>
        <p
          data-close
          className={`font-editorial text-base md:text-lg text-white/55 max-w-md mb-7 ${
            language === "ar" ? "leading-[1.85]" : "leading-relaxed"
          }`}
        >
          {t.alt[language]}
        </p>
        <div data-close className={`flex flex-wrap gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
          <Link to="/coaching" className="btn-primary-cta">
            {t.ctaCoaching[language]}
          </Link>
          <Link to="/hybrid-build" className="btn-ghost-cta">
            {t.ctaHybrid[language]}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandClosing;
