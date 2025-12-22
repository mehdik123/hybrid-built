import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language, isRTL } = useLanguage();
  const t = translations.about;

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-2">
            {t.title1[language]} <span className="text-gradient">{t.title2[language]}</span>
          </h2>
        </motion.div>

        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative ${isRTL ? 'md:order-2' : ''}`}
          >
            <div className="aspect-[3/4] rounded-2xl bg-muted flex items-center justify-center overflow-hidden border border-border shadow-2xl">
              <img src="/about-me.jpg" alt="UNBREAKABLES TEAM Founder" className="w-full h-full object-cover" />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-3xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`space-y-6 ${isRTL ? 'md:order-1 text-right' : ''}`}
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              {t.intro[language]} <span className="text-primary font-semibold">UNBREAKABLES TEAM</span>
              {t.description1[language]}{" "}
              <span className="text-primary font-bold">400,000+</span> {t.followers[language]}.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.description2[language]}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.description3[language]} <span className="text-foreground font-semibold">{t.clients[language]}</span> {t.description4[language]}
            </p>

            <p className="text-xl text-foreground font-medium">
              {t.description5[language]} <span className="text-primary">{t.you[language]}</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
