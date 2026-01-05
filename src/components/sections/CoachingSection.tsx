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
    { icon: MessageCircle, ...t.features.support },
  ];

  return (
    <section id="coaching" className="section-padding bg-card pb-24 md:pb-16" ref={ref}>
      <div className="container-tight px-4 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-4 uppercase tracking-tighter">
            {t.title1[language]} <span className="text-gradient font-black">{t.title2[language]}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-bold">
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
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary transition-all duration-500 hover:bg-secondary/50 flex flex-col h-full group ${isRTL ? 'text-right' : ''}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-display text-xl text-foreground uppercase tracking-tighter">{feature.title[language]}</h4>
                </div>

                <ul className="space-y-4 flex-grow">
                  {feature.points.map((point: any, pIndex: number) => (
                    <li key={pIndex} className={`flex gap-3 text-sm text-foreground/80 leading-relaxed ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{point[language]}</span>
                    </li>
                  ))}
                </ul>
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

        {/* Call to Action - Strategic DM Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-secondary via-card to-background border-2 border-primary/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageCircle className="w-24 h-24 text-primary" />
            </div>

            <h3 className="font-display text-3xl md:text-5xl text-foreground mb-6 uppercase tracking-tight">
              {language === "ar" ? "هل أنت مستعد لهذا المستوى؟" : "Ready for this level?"}
            </h3>

            <div className="space-y-6 mb-10">
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl">
                <p className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-3">
                  {t.dmInstructions[language]}
                </p>
                <div className="space-y-2">
                  <div className={`flex items-center gap-3 text-sm text-foreground/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{t.dmItem1[language]}</span>
                  </div>
                  <div className={`flex items-center gap-3 text-sm text-foreground/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{t.dmItem2[language]}</span>
                  </div>
                  <div className={`flex items-center gap-3 text-sm text-foreground/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{t.dmItem3[language]}</span>
                  </div>
                </div>
              </div>
            </div>

            <a href="https://ig.me/m/unbreakablesteam?text=COACHING" target="_blank" rel="noopener noreferrer">
              <Button size="xxl" className="w-full bg-primary hover:bg-primary/90 text-white font-black text-xl uppercase tracking-widest py-8 transform transition-transform active:scale-95 shadow-xl shadow-primary/20">
                {t.messageMe[language]}
              </Button>
            </a>

            <p className="text-sm text-muted-foreground mt-6 font-medium italic">
              {t.dmResponse[language]}
            </p>
          </div>
        </motion.div>

        {/* Affordability Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 max-w-xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-secondary/20 border border-border/30">
            <p className="text-foreground/80 text-base mb-3">
              {t.affordabilityMessage[language]}
            </p>
            <p className="text-muted-foreground text-sm">
              <a
                href="/products"
                className="text-primary hover:text-primary/80 font-bold underline underline-offset-4 transition-colors"
              >
                {t.checkProducts[language]}
              </a>
              {" "}{t.affordabilityDesc[language]}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingSection;

