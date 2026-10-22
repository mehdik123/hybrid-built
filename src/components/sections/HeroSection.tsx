import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";
import heroVideoSrc from "@/assets/hero-bg.mp4";
import heroPosterSrc from "@/assets/hero-poster.jpg";

const Headline = ({ language }: { language: "en" | "ar" | "fr" }) => {
  if (language === "en") {
    return (
      <>
        <span className="block">You&apos;re building your career.</span>
        <span className="block mt-1">
          Don&apos;t let your <span className="text-red-br">body</span> fall behind.
        </span>
      </>
    );
  }
  if (language === "fr") {
    return (
      <>
        <span className="block">Tu construis ta carrière.</span>
        <span className="block mt-1">
          Ne laisse pas ton <span className="text-red-br">corps</span> derrière.
        </span>
      </>
    );
  }
  return (
    <>
      <span className="block">بني مستقبلك،</span>
      <span className="block mt-1">
        ولكن ما تنساش تبني <span className="text-red-br">جسمك</span> وصحتك.
      </span>
    </>
  );
};

const HeroSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.hero;
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-40px" });
  const isAr = language === "ar";

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
        video.volume = 0;
        await video.play();
      } catch {
        /* wait for gesture / next tick */
      }
    };

    void kick();

    const onReady = () => void kick();
    video.addEventListener("loadedmetadata", onReady);
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);

    const unlock = () => {
      void kick();
    };
    document.addEventListener("touchstart", unlock, { once: true, passive: true });
    document.addEventListener("pointerdown", unlock, { once: true });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void kick();
        else video.pause();
      },
      { threshold: 0.15 }
    );
    io.observe(video);

    return () => {
      cancelled = true;
      video.removeEventListener("loadedmetadata", onReady);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("pointerdown", unlock);
      io.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92svh] md:min-h-[100svh] flex items-end bg-ink overflow-hidden"
    >
      <div className="absolute inset-0 bg-ink">
        <img
          src={heroPosterSrc}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover object-[center_18%]"
          fetchPriority="high"
          decoding="async"
        />

        <video
          ref={videoRef}
          className="absolute inset-0 z-[1] h-full w-full object-cover object-[center_18%] [transform:translateZ(0)]"
          poster={heroPosterSrc}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          aria-hidden
          // Prefer sharpness; source is ~1.4MB — drop a higher-bitrate MP4 in src/assets to upgrade.
          style={{ imageRendering: "auto" }}
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>

        {/* Lighter overlays so the hero clip reads sharper */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.32) 0%, rgba(10,10,10,0.08) 24%, transparent 42%, rgba(10,10,10,0.42) 68%, rgba(10,10,10,0.9) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: isRTL
              ? "linear-gradient(270deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.22) 36%, transparent 58%)"
              : "linear-gradient(90deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.22) 36%, transparent 58%)",
          }}
        />
      </div>

      <div
        className={`relative z-10 w-full px-5 pt-28 pb-14 md:px-10 md:pt-36 md:pb-24 lg:px-14 ${
          isRTL ? "text-right" : ""
        }`}
      >
        <div className="container-tight max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-[11px] md:text-xs uppercase tracking-[0.22em] text-white/50 mb-6 md:mb-8"
          >
            {t.label[language]}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={`font-display uppercase text-white ${
              isAr
                ? "text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.85rem] leading-[1.35]"
                : "text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08]"
            }`}
          >
            <Headline language={language} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-5 md:mt-6 max-w-md font-editorial text-[15px] md:text-base text-white/65 ${
              isAr ? "leading-[1.8]" : "leading-relaxed"
            }`}
          >
            {t.subhead[language]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-8 md:mt-10 flex flex-col gap-4 ${isRTL ? "items-end" : "items-start"}`}
          >
            <div
              className={`flex flex-col sm:flex-row sm:items-center gap-3 ${
                isRTL ? "sm:flex-row-reverse" : ""
              }`}
            >
              <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
              <MagneticCTA href="#proof" className="btn-ghost-cta" external={false}>
                {t.ctaSecondary[language]}
              </MagneticCTA>
            </div>
            <p className="font-editorial text-xs md:text-[13px] text-white/40 tracking-wide">
              {t.proofLine[language]}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
