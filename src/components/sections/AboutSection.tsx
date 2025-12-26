import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language, isRTL } = useLanguage();
  const t = translations.about;

  return (
    <section id="about" className="relative section-padding overflow-hidden bg-black" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-tight relative z-10">
        <div className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-center ${isRTL ? 'rtl' : ''}`}>

          {/* Profile Image - 5 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`lg:col-span-5 relative group ${isRTL ? 'lg:order-2' : ''}`}
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-500">
              <img
                src="/about-me.jpg"
                alt="MEHDI - UNBREAKABLES TEAM Founder"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

              {/* Tactical Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-md">
                <p className="text-primary font-black tracking-widest text-xs mb-1 uppercase">DIRECTOR // LEAD COACH</p>
                <h3 className="text-white font-display text-2xl tracking-tight">MEHDI — @unbreakablesteam</h3>
              </div>
            </div>
            {/* Red Glow Backdrop */}
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl -z-10 group-hover:bg-primary/30 transition-colors" />
          </motion.div>

          {/* Text Content - 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`lg:col-span-12 space-y-8 ${isRTL ? 'lg:order-1 text-right' : ''}`}
          >

            {/* Main Statement */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <div className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary font-black text-xs uppercase tracking-widest">600K+ FOLLOWERS</span>
                </div>
                <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
                  <span className="text-white/60 font-black text-xs uppercase tracking-widest">EST. 2017</span>
                </div>
              </div>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-none tracking-tight">
                {t.title1[language]} <span className="text-gradient font-black">{t.title2[language]}</span>
              </h2>
              <div className="h-1 w-20 bg-primary" />
            </div>

            {/* Tactical Briefing Blocks */}
            <div className="grid gap-6">
              {/* Intro Block */}
              <div className="border-l-2 border-primary/30 pl-6 py-2 group hover:border-primary transition-colors">
                <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-bold leading-tight">
                  {t.intro[language]} <span className="text-primary font-black uppercase underline decoration-2 underline-offset-4">{t.name[language]}</span>
                  {t.description1[language]} <span className="text-primary font-black">600,000+</span> {t.followers[language]}.
                </p>
              </div>

              {/* Philosophy Block */}
              <div className="border-l-2 border-primary/30 pl-6 py-1 group hover:border-primary transition-colors">
                <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed italic">
                  "{t.description2[language]}"
                </p>
              </div>

              {/* Proof Block */}
              <div className="border-l-2 border-primary/30 pl-6 py-1 group hover:border-primary transition-colors">
                <p className="text-xl text-foreground font-semibold">
                  {t.description3[language]} <span className="text-primary text-2xl font-black">{t.clients[language]}</span> {t.description4[language]}
                </p>
              </div>
            </div>

            {/* Call to action text */}
            <div className="pt-4">
              <p className="font-display text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter text-white">
                {t.description5[language]} <span className="text-primary animate-pulse">{t.you[language]}.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
