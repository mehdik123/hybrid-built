import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const instagramDMLink = "https://ig.me/m/unbreakablesteam?text=I'm%20ready%20to%20start%20my%20transformation!%20Let's%20talk%20about%20coaching!";
  const { language, isRTL } = useLanguage();
  const t = translations.finalCta;

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-8">
            {t.title1[language]} <span className="text-gradient">{t.title2[language]}</span>?
          </h2>

          <div className="text-lg md:text-xl text-muted-foreground space-y-2 mb-8">
            <p>{t.line1[language]}</p>
            <p>{t.line2[language]}</p>
            <p className="text-foreground font-medium">{t.line3[language]}</p>
          </div>

          <div className={`max-w-md mx-auto mb-8 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <p className="text-foreground text-lg font-medium text-center mb-4">
              {t.weeksFrom[language]}
            </p>
            {t.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{benefit[language]}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            {t.alternative[language]}
            <br />
            <span className="text-foreground font-semibold">{t.choice[language]}</span>
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xxl" className="mb-4">
                {t.cta[language]}
              </Button>
            </a>
            <p className={`text-muted-foreground flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {t.dmText[language]} <span className="text-primary font-semibold">{t.coaching[language]}</span> {t.onInstagram[language]}
            </p>
            <p className={`text-muted-foreground flex items-center justify-center gap-2 mt-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {t.letsGo[language]} <Dumbbell className="w-5 h-5 text-primary" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
