import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import heroVideoSrc from "@/assets/hero-bg.mp4";
import heroPosterSrc from "@/assets/hero-poster.jpg";

const HeroSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.hero;
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const isAr = language === "ar";

  useEffect(() => {
    const video = videoRef.current;
    const root = rootRef.current;
    if (!video || !root) return;
    let cancelled = false;
    let inView = true;

    // Try to start playback. Safe to call any number of times: it does nothing
    // if the video is already playing or the hero is off screen.
    const kick = async () => {
      if (cancelled || !inView || !video.paused) return;
      try {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.volume = 0;
        await video.play();
      } catch {
        /* autoplay blocked for now: we retry on the signals below */
      }
    };

    const onKick = () => void kick();
    const onVisible = () => {
      if (document.visibilityState === "visible") void kick();
    };

    void kick();

    // The video may not be ready on first call; retry once data arrives.
    const mediaEvents = ["loadeddata", "canplay", "canplaythrough"] as const;
    mediaEvents.forEach((e) => video.addEventListener(e, onKick));
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", onKick);
    window.addEventListener("focus", onKick);

    // If the browser blocks autoplay until the user interacts (language popup
    // click, tap, key press), start the video on the first real interaction.
    const gestureEvents = ["pointerup", "touchend", "click", "keydown"] as const;
    gestureEvents.forEach((e) => document.addEventListener(e, onKick, { passive: true }));

    // Short retry loop for the first seconds after load.
    let tries = 0;
    const retry = window.setInterval(() => {
      if (!video.paused || ++tries > 20) {
        window.clearInterval(retry);
        return;
      }
      void kick();
    }, 500);

    // Pause only when the whole hero is off screen. We observe the section,
    // not the video, because the intro reveal clips the video and would make
    // it look "off screen" during the first second.
    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        if (inView) void kick();
        else video.pause();
      },
      { threshold: 0.05 }
    );
    io.observe(root);

    return () => {
      cancelled = true;
      window.clearInterval(retry);
      mediaEvents.forEach((e) => video.removeEventListener(e, onKick));
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", onKick);
      window.removeEventListener("focus", onKick);
      gestureEvents.forEach((e) => document.removeEventListener(e, onKick));
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const { gsap, ScrollTrigger } = getGsap();
    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      if (!reduced) {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.fromTo(
          mediaRef.current,
          { clipPath: "inset(100% 0 0 0)", scale: 1.12 },
          { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.35 },
          0
        )
          .fromTo(
            brandRef.current,
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1 },
            0.35
          )
          .fromTo(
            copyRef.current?.querySelectorAll("[data-hero-line]"),
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
            0.55
          );
      }

      gsap.to(mediaRef.current, {
        yPercent: reduced ? 0 : 18,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === root) st.kill();
      });
    };
  }, [language]);

  return (
    <section
      ref={rootRef}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink"
    >
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <img
          src={heroPosterSrc}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover object-[center_20%]"
          fetchPriority="high"
          decoding="async"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 z-[1] h-full w-full object-cover object-[center_20%]"
          poster={heroPosterSrc}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          aria-hidden
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.15) 32%, rgba(5,5,5,0.2) 55%, rgba(5,5,5,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: isRTL
              ? "linear-gradient(270deg, rgba(5,5,5,0.75) 0%, transparent 55%)"
              : "linear-gradient(90deg, rgba(5,5,5,0.75) 0%, transparent 55%)",
          }}
        />
      </div>

      <div
        className={`relative z-10 h-full flex flex-col justify-end px-5 pb-10 md:px-10 md:pb-14 lg:px-14 ${
          isRTL ? "text-right" : ""
        }`}
      >
        <div className="overflow-hidden mb-4 md:mb-6 max-w-[1280px] w-full mx-auto">
          <h1
            ref={brandRef}
            className={`mega-type text-white max-w-[18ch] ${
              isAr
                ? "text-[clamp(1.85rem,7vw,4.5rem)] leading-[1.1]"
                : "text-[clamp(2.4rem,9vw,7rem)] leading-[0.92]"
            }`}
          >
            {t.brand[language]}
          </h1>
        </div>

        <div
          ref={copyRef}
          className={`grid gap-8 md:grid-cols-12 md:gap-6 items-end max-w-[1280px] w-full mx-auto`}
        >
          <div className={`md:col-span-7 ${isRTL ? "md:col-start-6" : ""}`}>
            <p
              data-hero-line
              className={`font-display text-white/95 ${
                isAr
                  ? "text-xl sm:text-2xl md:text-3xl leading-[1.45]"
                  : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1]"
              }`}
            >
              {t.headline[language]}
            </p>
            <p
              data-hero-line
              className={`mt-4 max-w-md font-editorial text-[15px] md:text-base text-white/65 ${
                isAr ? "leading-[1.85]" : "leading-relaxed"
              }`}
            >
              {t.subhead[language]}
            </p>
          </div>

          <div
            data-hero-line
            className={`md:col-span-5 flex flex-col gap-4 ${
              isRTL ? "md:items-start md:col-start-1 md:row-start-1" : "md:items-end"
            }`}
          >
            <div
              className={`flex flex-col sm:flex-row gap-3 ${
                isRTL ? "sm:flex-row-reverse md:justify-start" : "md:justify-end"
              }`}
            >
              <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
              <MagneticCTA href="#proof" className="btn-ghost-cta" external={false}>
                {t.ctaSecondary[language]}
              </MagneticCTA>
            </div>
            <p className="font-editorial text-xs tracking-[0.14em] uppercase text-white/40">
              {t.proofLine[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
