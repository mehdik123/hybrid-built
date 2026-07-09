import { useLanguage } from "@/contexts/AppContext";

interface HeroBackgroundProps {
  /** Slightly stronger overlay for text-heavy pages like the gateway */
  overlayStrength?: "default" | "strong";
}

const HeroBackground = ({ overlayStrength = "default" }: HeroBackgroundProps) => {
  const { isRTL } = useLanguage();

  const overlayClass =
    overlayStrength === "strong"
      ? "from-black/95 via-black/80 to-black/90 md:from-black/85 md:via-black/70 md:to-black/85"
      : "from-black/90 via-black/70 to-background md:from-black/80 md:via-black/60";

  return (
    <>
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover scale-105"
          poster="/hero-placeholder-v2.jpg"
          onCanPlayThrough={(e) => e.currentTarget.play()}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <img
            src="/hero-placeholder-v2.jpg"
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </video>
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayClass}`} />
        <div className="absolute inset-0 bg-black/50 md:bg-black/30" />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isRTL ? "from-transparent via-black/50 to-black/95" : "from-black/95 via-black/50 to-transparent"
          }`}
        />
        <div className="absolute inset-0 vignette-cinematic pointer-events-none opacity-80" />
      </div>

      <div
        className={`absolute top-1/4 md:top-1/3 ${isRTL ? "left-0" : "right-0"} w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/25 rounded-full blur-[100px] md:blur-[150px] animate-pulse pointer-events-none`}
      />
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0 ${
          isRTL ? "md:right-1/4 md:left-auto" : "md:left-1/4"
        } w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary/15 rounded-full blur-[80px] md:blur-[120px] pointer-events-none`}
      />
      <div className="absolute inset-0 tech-grid opacity-[0.12] pointer-events-none" />
    </>
  );
};

export default HeroBackground;
