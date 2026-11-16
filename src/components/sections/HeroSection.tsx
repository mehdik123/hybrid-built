import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
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
        وما تنساش <span className="text-red-br">صحتك</span> والجسم ديالك.
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
  const reduceMotion = useReducedMotion();
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
      <div className="absolute inset-0 bg-ink overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.06 }}
          animate={reduceMotion ? undefined : { scale: 1 }}
          transition={{ duration: 8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={heroPosterSrc}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover object-[center_22%]"
            fetchPriority="high"
            decoding="async"
          />

          <video
            ref={videoRef}
            className="absolute inset-0 z-[1] h-full w-full object-cover object-[center_22%] [transform:translateZ(0)]"
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
        </motion.div>

        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.12) 28%, transparent 44%, rgba(10,10,10,0.5) 70%, rgba(10,10,10,0.94) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: isRTL
              ? "linear-gradient(270deg, rgba(10,10,10,0.62) 0%, rgba(10,10,10,0.28) 38%, transparent 62%)"
              : "linear-gradient(90deg, rgba(10,10,10,0.62) 0%, rgba(10,10,10,0.28) 38%, transparent 62%)",
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
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-white mb-4 md:mb-5"
          >
            {t.brand[language]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-[11px] md:text-xs uppercase tracking-[0.14em] text-white/50 mb-5 md:mb-6"
          >
            {t.label[language]}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`font-display text-white/95 tracking-tight ${
              isAr
                ? "text-[1.35rem] sm:text-2xl md:text-3xl lg:text-[2.15rem] leading-[1.4]"
                : "text-[1.4rem] sm:text-2xl md:text-3xl lg:text-[2.35rem] leading-[1.15]"
            }`}
          >
            <Headline language={language} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-5 md:mt-6 max-w-md font-editorial text-[15px] md:text-base text-white/65 ${
              isAr ? "leading-[1.8]" : "leading-relaxed"
            }`}
          >
            {t.subhead[language]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
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
