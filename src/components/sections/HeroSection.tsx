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
    <section className="relative min-h-screen w-full flex items-center justify-center bg-background text-foreground overflow-hidden px-6 py-24 md:py-32">
      {/* Hero photograph background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/hero-placeholder-v2.jpg"
          alt="Build The Hybrid Physique"
          className="w-full h-full object-cover opacity-[0.35] md:opacity-30"
          loading="eager"
        />
      </div>

      {/* Subtle grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      {/* Editorial vignette to fade image into background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--background)/0.4)_0%,hsl(var(--background))_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />


      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center space-y-10 md:space-y-12"
      >
        {/* Status / Positioning Badge */}
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-foreground/20 rounded-full bg-foreground/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span
              className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium text-foreground/80"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              {t.badge[language]}
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={item} className="space-y-5 md:space-y-6">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] text-foreground tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t.headline1[language]}{" "}
            <span className="text-primary">{t.headline2[language]}</span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-xl mx-auto font-light leading-relaxed"
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
            className="group relative inline-flex items-center justify-center gap-4 bg-primary text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.6)]"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            <span className="relative z-10 uppercase tracking-[0.2em] text-[11px] sm:text-sm font-semibold">
              {t.cta[language]}
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </motion.div>

        {/* Stats / Proof Grid */}
        <motion.div
          variants={item}
          className="grid grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-foreground/15 w-full max-w-2xl"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start">
              <span
                className="text-3xl md:text-4xl text-foreground leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {s.value}
              </span>
              <span
                className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-foreground/50 text-center sm:text-left"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Established line */}
        <motion.div variants={item} className="pt-2">
          <div className="flex items-center space-x-3 opacity-60">
            <div className="w-10 h-px bg-foreground/60" />
            <span
              className="text-[9px] uppercase tracking-[0.4em] font-semibold text-foreground"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              {t.established[language]}
            </span>
            <div className="w-10 h-px bg-foreground/60" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/60"
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
