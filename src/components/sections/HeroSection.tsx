import { useRef, useState, useEffect, type RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { ASSETS, IG_DM_URL } from "@/lib/constants";
import EditorialPhoto from "@/components/EditorialPhoto";
import MaskedLines from "@/components/MaskedLines";
import MagneticCTA from "@/components/motion/MagneticCTA";
import CountUp from "@/components/motion/CountUp";
import { useLightMotion } from "@/hooks/useLightMotion";

const HeroPhoto = () => (
  <EditorialPhoto
    src={ASSETS.heroCoaching}
    fallbackSrc={ASSETS.heroFallback}
    alt="Mehdi — coach"
    warm
    priority
    className="h-full w-full"
    imgClassName="object-cover object-center"
  />
);

const gradientOverlay = (
  <div
    className="absolute inset-0 z-[4] pointer-events-none"
    style={{
      background:
        "linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.45) 50%, rgba(10,10,10,0.15) 100%)",
    }}
  />
);

const HeroSection = () => {
  const { language, isRTL } = useAppContext();
  const t = translations.hero;
  const light = useLightMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [statReplay, setStatReplay] = useState<Record<number, number>>({});

  const headlineLines = [t.headline1[language], t.headline2[language]].filter(Boolean);

  const stats = [
    { value: 100, suffix: "+", label: t.stats.clientsLabel[language] },
    { value: 600, suffix: "K+", label: t.stats.followersLabel[language] },
    { value: 8, suffix: "+", label: t.stats.yearsLabel[language] },
  ];

  useEffect(() => {
    if (light) return;
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMouse({
        x: ((e.clientX - cx) / cx) * 8,
        y: ((e.clientY - cy) / cy) * 8,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [light]);

  const innerContent = (
    <div className="container-tight max-w-3xl">
      <MaskedLines
        lines={headlineLines}
        lineClassName="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        redWordIndex={language === "en" ? { line: 1, wordIndex: 0 } : undefined}
      />
      <p className="mt-6 font-editorial text-sm uppercase tracking-[0.25em] text-red-br">
        {t.emotionalHook[language]}
      </p>
      <div className="mt-10">
        <MagneticCTA href={IG_DM_URL}>{t.cta[language]} →</MagneticCTA>
        <p className="mt-3 font-editorial text-xs text-muted-foreground">
          {translations.hero.ctaSubtext[language] || "I respond personally to every message."}
        </p>
      </div>
      <div
        className={`mt-12 pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-lg stat-row ${isRTL ? "mr-auto" : ""}`}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="stat-cell group cursor-default"
            onMouseEnter={() => !light && setStatReplay((prev) => ({ ...prev, [i]: (prev[i] || 0) + 1 }))}
          >
            <div className="font-display text-2xl md:text-3xl">
              <CountUp end={stat.value} suffix={stat.suffix} replay={statReplay[i] || 0} />
            </div>
            <div className="hairline mt-2 mb-1 group-hover:bg-red-br transition-colors" />
            <div className="font-editorial text-[9px] uppercase tracking-wider text-muted-foreground group-hover:-translate-y-0.5 transition-transform">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex items-end overflow-hidden">
      {light ? (
        <div className="absolute inset-0">
          <HeroPhoto />
          <div className="ph-scrim absolute inset-0 z-[3] opacity-70" />
          {gradientOverlay}
        </div>
      ) : (
        <HeroParallaxBg containerRef={sectionRef} mouse={mouse} />
      )}

      <div
        className={`relative z-10 w-full section-padding pb-16 md:pb-24 pt-32 md:pt-40 ${isRTL ? "text-right" : ""}`}
      >
        {innerContent}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span className="font-editorial text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {t.scroll[language]}
        </span>
        <ChevronDown className={`w-4 h-4 text-red-br ${light ? "" : "animate-scroll-indicator"}`} />
      </div>
    </section>
  );
};

/** Desktop-only parallax — keeps useScroll off mobile */
const HeroParallaxBg = ({
  containerRef,
  mouse,
}: {
  containerRef: RefObject<HTMLElement>;
  mouse: { x: number; y: number };
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.92]);

  return (
    <motion.div className="absolute inset-0" style={{ y: photoY }}>
      <motion.div
        className="absolute inset-0"
        style={{ scale: photoScale, x: mouse.x, y: mouse.y }}
      >
        <HeroPhoto />
      </motion.div>
      <motion.div className="ph-scrim absolute inset-0 z-[3]" style={{ opacity: scrimOpacity }} />
      {gradientOverlay}
    </motion.div>
  );
};

export default HeroSection;
