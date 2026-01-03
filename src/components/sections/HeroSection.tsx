import { motion } from "framer-motion";
import { ChevronDown, Flame, Shield, Zap, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const HeroSection = () => {
  const instagramDMLink = "https://ig.me/m/unbreakablesteam?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20the%20hybrid%20physique%20coaching%20program!";
  const { language, isRTL } = useAppContext();
  const t = translations.hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };

  const stats = [
    { value: t.stats.clients[language], label: t.stats.clientsLabel[language], icon: Flame },
    { value: t.stats.followers[language], label: t.stats.followersLabel[language], icon: Shield },
    { value: t.stats.years[language], label: t.stats.yearsLabel[language], icon: Zap },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover scale-105"
          poster="/hero-placeholder-v2.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <img src="/hero-placeholder-v2.jpg" alt="Build The Hybrid Physique" className="w-full h-full object-cover" />
        </video>
        {/* Multi-layer overlay for depth - stronger on mobile for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-background md:from-black/80 md:via-black/60" />
        <div className="absolute inset-0 bg-black/40 md:bg-transparent" />
        <div className={`absolute inset-0 hidden md:block bg-gradient-to-r ${isRTL ? 'from-transparent via-black/40 to-black/90' : 'from-black/90 via-black/40 to-transparent'}`} />
      </div>

      {/* Dramatic accent glows - smaller on mobile */}
      <div className={`absolute top-1/4 md:top-1/3 ${isRTL ? 'left-0' : 'right-0'} w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] md:blur-[150px] animate-pulse`} />
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0 ${isRTL ? 'md:right-1/4 md:left-auto' : 'md:left-1/4'} w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]`} />

      {/* Main Content */}
      <div className={`relative z-20 w-full px-5 md:px-8 lg:px-12`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`max-w-4xl mx-auto text-center md:text-left md:mx-0 ${isRTL ? 'md:mr-auto md:ml-0 md:text-right' : 'md:ml-8 lg:ml-16'}`}
        >


          {/* Main Headline */}
          {/* Main Headline - Part 1 */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-4 md:mb-6"
          >
            <span className="text-foreground/60 uppercase">{t.headline1[language]}</span>
            <br />
            <span className="text-gradient relative inline-block uppercase">
              {t.headline2[language]}
              <span className="absolute -inset-2 bg-primary/20 blur-2xl -z-10 rounded-lg" />
            </span>
          </motion.h1>

          {/* Emotional Hook - Size or Mobility */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl lg:text-4xl text-foreground font-black uppercase mb-6 md:mb-8 tracking-tighter"
          >
            {t.emotionalHook[language]}
          </motion.p>

          {/* Headline Part 2 - The Refusal */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-black uppercase mb-4 md:mb-6"
          >
            {t.headline3[language]}
          </motion.h2>

          {/* Promise Statement - Mastered Both */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl lg:text-3xl text-muted-foreground/90 font-semibold mb-8 md:mb-12 leading-tight"
          >
            {t.promise[language]}
          </motion.p>

          {/* Coach Intro - The Mission */}
          <motion.div
            variants={itemVariants}
            className="mb-10 md:mb-14 border-l-4 border-primary pl-6 py-2"
          >
            <p className="text-xl md:text-3xl lg:text-4xl text-foreground font-black uppercase leading-tight tracking-tight">
              {t.coachIntro[language]}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-primary font-bold text-lg md:text-2xl">Mehdi</span>
              <span className="text-muted-foreground/60 text-sm md:text-lg">@unbreakablesteam</span>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className={`flex flex-col sm:flex-row items-center md:items-start ${isRTL ? 'md:items-end' : ''} gap-4 md:gap-6 mb-8 md:mb-12 w-full`}>
            <a href={instagramDMLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="cta" size="xxl" className="group relative overflow-hidden w-full sm:w-auto text-base md:text-lg bg-primary hover:bg-primary/90">
                <span className="relative z-10 flex items-center justify-center gap-3 font-black">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                  {t.cta[language]}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_100%] animate-[shimmer_2s_infinite]" style={{ opacity: 0.3 }} />
              </Button>
            </a>

            <button
              onClick={() => window.location.href = '/products'}
              className="w-full sm:w-auto px-8 py-5 rounded-xl border border-white/20 hover:border-primary/50 bg-white/5 backdrop-blur-sm transition-all flex items-center justify-center gap-3 group/btn"
            >
              <Zap className="w-5 h-5 text-primary group-hover/btn:animate-pulse" />
              <span className="font-black uppercase tracking-widest text-sm md:text-base">
                {t.browsePrograms[language]}
              </span>
            </button>
          </motion.div>
          <motion.div variants={itemVariants} className={`flex flex-col items-center md:items-start ${isRTL ? 'md:items-end' : ''} mb-8`}>
            <span className="text-xs md:text-sm text-primary/80 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
              {t.ctaSubtext[language]}
            </span>
          </motion.div>

          {/* Stats Bar - Grid on mobile for better layout */}
          <motion.div
            variants={itemVariants}
            className={`grid grid-cols-3 gap-4 md:flex md:flex-wrap md:gap-10 pt-6 md:pt-8 border-t border-border/30 ${isRTL ? 'md:justify-end' : 'md:justify-start'}`}
          >
            {stats.map((stat, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-1 md:gap-3 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className={`text-center md:text-left ${isRTL ? 'md:text-right' : ''}`}>
                  <div className="text-xl md:text-3xl font-display text-foreground">{stat.value}</div>
                  <div className="text-[9px] sm:text-xs text-muted-foreground uppercase tracking-wider leading-tight">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - centered on mobile */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 flex items-center gap-3 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-primary/70">{t.scroll[language]}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative side element - desktop only */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-4 md:left-8' : 'right-4 md:right-8'} hidden lg:flex flex-col items-center gap-4`}>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        <span className="text-xs uppercase tracking-widest text-muted-foreground/50 [writing-mode:vertical-lr] rotate-180">
          EST. 2017
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
