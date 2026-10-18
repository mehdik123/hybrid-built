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
        <span className="block">
          Don&apos;t let your <span className="text-red-br">body</span> fall behind.
        </span>
      </>
    );
  }
  if (language === "fr") {
    return (
      <>
        <span className="block">Tu construis ta carrière.</span>
        <span className="block">
          Ne laisse pas ton <span className="text-red-br">corps</span> derrière.
        </span>
      </>
    );
  }
  return (
    <>
      <span className="block">بني مستقبلك،</span>
      <span className="block">
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
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />

        <video
          ref={videoRef}
          className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
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

        {/* Light bottom fade only — keeps text readable without washing the video */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, transparent 45%, rgba(10,10,10,0.45) 72%, rgba(10,10,10,0.82) 100%)",
          }}
        />
      </div>

      <div
        className={`relative z-10 w-full px-5 pt-24 pb-12 md:px-10 md:pt-32 md:pb-20 lg:px-14 ${
          isRTL ? "text-right" : ""
        }`}
      >
        <div className="container-tight max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.6rem,9vw,5.25rem)] uppercase leading-[0.9] tracking-[0.01em] mb-5 md:mb-7"
          >
            <span className="text-white">UNBREAK</span>
            <span className="text-red-br">ABLES</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={`font-display uppercase text-white ${
              isAr
                ? "text-[1.85rem] sm:text-3xl md:text-4xl lg:text-[3rem] leading-[1.35]"
                : "text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.06]"
            }`}
          >
            <Headline language={language} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-5 max-w-xl font-editorial text-base md:text-lg text-white/70 ${
              isAr ? "leading-[1.85]" : "leading-relaxed"
            }`}
          >
            {t.subhead[language]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 ${
              isRTL ? "sm:flex-row-reverse" : ""
            }`}
          >
            <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
            <MagneticCTA href="#proof" className="btn-ghost-cta" external={false}>
              {language === "en"
                ? "See results"
                : language === "fr"
                  ? "Voir les résultats"
                  : "شوف النتائج"}
            </MagneticCTA>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
