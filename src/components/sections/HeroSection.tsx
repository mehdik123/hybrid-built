import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const HeroSection = () => {
  const instagramDMLink =
    "https://ig.me/m/unbreakablesteam?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20the%20Hybrid%20Method%201-on-1%20online%20coaching!";
  const { language } = useAppContext();
  const t = translations.hero;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const stats = [
    { value: t.stats.clients[language], label: t.stats.clientsLabel[language] },
    { value: t.stats.followers[language], label: t.stats.followersLabel[language] },
    { value: t.stats.years[language], label: t.stats.yearsLabel[language] },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0d0d0d] text-white overflow-hidden px-6 py-24 md:py-32">
      {/* Hero photograph background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/hero-placeholder-v2.jpg"
          alt="Build The Hybrid Physique"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Strong dark scrim for legibility */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
      </div>

      {/* Subtle grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      {/* Fade to page background at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />


      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center space-y-10 md:space-y-12"
      >
        {/* Status / Positioning Badge */}
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/25 rounded-full bg-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span
              className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium text-white/85"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              {t.badge[language]}
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={item} className="space-y-5 md:space-y-6">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] text-white tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.headline1[language]}{" "}
            <span className="text-white/70">{t.headline2[language]}</span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-white/85 max-w-xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            {t.promise[language]}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="flex flex-col items-center w-full">
          <a
            href={instagramDMLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.4)]"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            <span className="relative z-10 uppercase tracking-[0.2em] text-[11px] sm:text-sm font-semibold">
              {t.cta[language]}
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </motion.div>

        {/* Stats / Proof Grid */}
        <motion.div
          variants={item}
          className="grid grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-white/20 w-full max-w-2xl"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start">
              <span
                className="text-3xl md:text-4xl text-white leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {s.value}
              </span>
              <span
                className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/60 text-center sm:text-left"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Established line */}
        <motion.div variants={item} className="pt-2">
          <div className="flex items-center space-x-3 opacity-70">
            <div className="w-10 h-px bg-white/60" />
            <span
              className="text-[9px] uppercase tracking-[0.4em] font-semibold text-white"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              {t.established[language]}
            </span>
            <div className="w-10 h-px bg-white/60" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span
          className="text-[9px] uppercase tracking-[0.3em]"
          style={{ fontFamily: "Barlow, sans-serif" }}
        >
          {t.scroll[language]}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>

  );
};

export default HeroSection;
