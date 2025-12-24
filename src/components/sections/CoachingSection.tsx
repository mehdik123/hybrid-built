import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Dumbbell, Salad, MessageCircle, CalendarCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const CoachingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const instagramDMLink = "https://ig.me/m/unbreakablesteam?text=Hi!%20I%20want%20to%20discuss%20personalized%20coaching%20options%20and%20pricing!";
  const { language, isRTL } = useLanguage();
  const t = translations.coaching;

  const features = [
    { icon: Dumbbell, ...t.features.training },
    { icon: Salad, ...t.features.nutrition },
    { icon: CalendarCheck, ...t.features.checkIns },
    { icon: MessageCircle, ...t.features.messaging },
    { icon: ShieldCheck, ...t.features.accountability },
  ];

  return (
    <section id="coaching" className="section-padding bg-card" ref={ref}>
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            {t.title1[language]} <span className="text-gradient">{t.title2[language]}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.subtitle[language]}
          </p>
        </motion.div>

        {/* What You Get */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl md:text-3xl text-center text-primary mb-10">
            {t.whatYouGet[language]}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:bg-secondary/70 ${isRTL ? 'text-right' : ''}`}
              >
                <feature.icon className={`w-10 h-10 text-primary mb-4 ${isRTL ? 'mr-0' : ''}`} />
                <h4 className="font-semibold text-lg text-foreground mb-2">{feature.title[language]}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description[language]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who This Is For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl text-center text-primary mb-8">
            {t.whoIsFor[language]}
          </h3>
          <div className="space-y-4">
            {t.whoIsForItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground text-lg">{item[language]}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action - No Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-secondary to-background border-2 border-primary/30">
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              {language === "ar" ? "هل أنت مستعد للتحول؟" : "Ready to Transform?"}
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              {language === "ar"
                ? "لنناقش أهدافك ونبني خطة مخصصة لك تمامًا"
                : "Let's discuss your goals and build a plan that's perfect for you"}
            </p>
            <p className="text-primary font-semibold text-lg mb-8">
              {language === "ar"
                ? "كل برنامج مصمم خصيصًا - لا توجد باقات عامة"
                : "Every program is custom-built - no cookie-cutter packages"}
            </p>

            <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="mb-6">
                {language === "ar" ? "دعنا نتحدث" : "Let's Talk"}
              </Button>
            </a>

            <p className="text-sm text-muted-foreground">
              {language === "ar"
                ? "راسلني وسأجيب عليك شخصياً في غضون 24 ساعة"
                : "DM me and I'll personally respond within 24 hours"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingSection;

