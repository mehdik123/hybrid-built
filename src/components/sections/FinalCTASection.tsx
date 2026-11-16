import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS, IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const FinalCTASection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.finalCta;
  const rootRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.to(mediaRef.current, {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.fromTo(
        typeRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 65%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, [language]);

  return (
    <section
      id="final-cta"
      ref={rootRef}
      className="relative min-h-[92svh] flex items-end overflow-hidden border-t border-white/[0.08]"
    >
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <img
          src={ASSETS.mehdiTransformAfter}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[center_12%]"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.25) 0%, rgba(5,5,5,0.35) 40%, rgba(5,5,5,0.92) 100%)",
        }}
      />

      <div
        className={`relative z-10 w-full px-5 pb-14 pt-32 md:px-10 md:pb-20 lg:px-14 ${
          isRTL ? "text-right" : ""
        }`}
      >
        <h2
          ref={typeRef}
          className={`mega-type text-white max-w-5xl ${
            language === "ar"
              ? "text-[clamp(2rem,6vw,4.5rem)] leading-[1.2]"
              : "text-[clamp(3.2rem,10vw,8rem)]"
          }`}
        >
          {t.title[language]}
        </h2>
        <p className="mt-6 font-editorial text-base md:text-lg text-white/65 max-w-lg leading-relaxed">
          {t.body[language]}
        </p>
        <div
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
    </section>
  );
};

export default FinalCTASection;
