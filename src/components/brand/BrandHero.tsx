import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { brand } from "@/content/brandLanding";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import heroVideoSrc from "@/assets/hero-bg.mp4";
import heroPosterSrc from "@/assets/hero-poster.jpg";

const BrandHero = () => {
  const { language, isRTL } = useLanguage();
  const t = brand.hero;
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;
    const kick = async () => {
      if (cancelled) return;
      try {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        await video.play();
      } catch {
        /* */
      }
    };
    void kick();
    const unlock = () => void kick();
    document.addEventListener("pointerdown", unlock, { once: true });
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? void kick() : video.pause()),
      { threshold: 0.1 }
    );
    io.observe(video);
    return () => {
      cancelled = true;
      document.removeEventListener("pointerdown", unlock);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const { gsap } = getGsap();
    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.fromTo(
          mediaRef.current,
          { clipPath: "inset(100% 0 0 0)", scale: 1.1 },
          { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.35, ease: "power4.out" }
        );
        gsap.fromTo(
          typeRef.current?.querySelectorAll("[data-hero]"),
          { y: 48, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.9, delay: 0.4, ease: "power3.out" }
        );
        gsap.to(mediaRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
        });
      }
    }, root);
    return () => ctx.revert();
  }, [language]);

  return (
    <section ref={rootRef} className="relative h-[100svh] min-h-[600px] overflow-hidden bg-black">
      <div ref={mediaRef} className="absolute inset-0">
        <img
          src={heroPosterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          fetchPriority="high"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          poster={heroPosterSrc}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.08) 32%, rgba(0,0,0,0.55) 68%, rgba(0,0,0,0.88) 100%)",
          }}
        />
      </div>

      <div
        ref={typeRef}
        className={`relative z-10 h-full flex flex-col justify-end px-5 pb-12 md:px-10 md:pb-16 lg:px-14 ${
          isRTL ? "text-right" : ""
        }`}
      >
        <div className="max-w-[1280px] w-full mx-auto">
          <p
            data-hero
            className="font-editorial text-[11px] uppercase tracking-[0.28em] text-red-br mb-4"
          >
            {t.roles[language]}
          </p>
          <h1
            data-hero
            className="mega-type text-white text-[clamp(3.2rem,14vw,10rem)] leading-[0.88] mb-5"
          >
            {brand.name}
          </h1>
          <p
            data-hero
            className={`max-w-md font-editorial text-[15px] md:text-base text-white/65 mb-8 ${
              language === "ar" ? "leading-[1.8]" : "leading-relaxed"
            }`}
          >
            {t.support[language]}
          </p>
          <div data-hero>
            <a
              href="#presence"
              className="btn-primary-cta inline-flex"
            >
              {t.ctaWork[language]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
