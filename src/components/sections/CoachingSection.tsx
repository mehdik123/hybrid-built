import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Dumbbell, Salad, MessageCircle, CalendarCheck, ShieldCheck, Zap, ArrowRight } from "lucide-react";
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
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`group relative bg-gradient-to-br from-secondary/40 via-card/50 to-background/30 
                  backdrop-blur-md border-2 border-white/10 rounded-3xl p-8 
                  hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20
                  transition-all duration-700 flex flex-col h-full overflow-hidden ${isRTL ? 'text-right' : ''}`}
              >
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {/* Enhanced icon container */}
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 
                      flex items-center justify-center border-2 border-primary/30 
                      group-hover:scale-110 group-hover:rotate-3 group-hover:border-primary 
                      group-hover:shadow-lg group-hover:shadow-primary/50
                      transition-all duration-500">
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <feature.icon className="relative z-10 w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>

                    {/* Title with gradient on hover */}
                    <h4 className="font-display text-xl lg:text-2xl text-foreground uppercase tracking-tighter 
                      group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                      group-hover:from-primary group-hover:to-primary/70 transition-all duration-500">
                      {feature.title[language]}
                    </h4>
                  </div>

                  {/* Feature points with enhanced bullets */}
                  <ul className="space-y-4 flex-grow">
                    {feature.points.map((point: any, pIndex: number) => (
                      <motion.li
                        key={pIndex}
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + pIndex * 0.1 }}
                        className={`flex gap-3 text-sm lg:text-base text-foreground/80 leading-relaxed 
                          group-hover:text-foreground transition-colors duration-500 ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        {/* Gradient bullet point */}
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/50 
                          shadow-sm shadow-primary/30 flex-shrink-0 group-hover:shadow-md group-hover:shadow-primary/50 
                          group-hover:scale-125 transition-all duration-500" />
                        <span className="flex-1">{point[language]}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Corner accent decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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

        {/* Affordability Message - Redesigned for Maximum Visibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-20 md:mt-24 max-w-2xl mx-auto px-4"
        >
          <div className="relative group p-1 sm:p-[2px] rounded-3xl overflow-hidden">
            {/* Animated Glow Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-30 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_3s_infinite]" />

            <div className="relative bg-[#0A0A0A] backdrop-blur-3xl rounded-[22px] p-8 sm:p-10 border border-white/5">
              <div className="flex flex-col items-center gap-6">
                {/* Visual Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <Zap className="w-8 h-8 text-primary animate-pulse" />
                </div>

                <div className="space-y-4">
                  <h4 className="font-display text-2xl sm:text-3xl text-foreground uppercase tracking-tight">
                    {t.affordabilityMessage[language]}
                  </h4>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                    {t.affordabilityDesc[language]}
                  </p>
                </div>

                {/* Pronounced Action Link */}
                <a
                  href="/products"
                  className="group/link flex items-center gap-3 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/40 px-8 py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                >
                  <span className="text-primary font-black uppercase tracking-widest text-base sm:text-lg">
                    {t.checkProducts[language]}
                  </span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </motion.span>
                </a>
              </div>

              {/* Decorative light flair */}
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingSection;

