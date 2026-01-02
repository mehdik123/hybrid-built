import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, Zap, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PaidProductInfoModal from "@/components/PaidProductInfoModal";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language, isRTL } = useLanguage();
  const t = translations.products;

  const freeDownloadLink = "https://ig.me/m/unbreakablesteam?text=Hey!%20I'm%20interested%20in%20the%20free%20workout%20guide.%20Can%20you%20send%20it%20to%20me%3F";
  const paidProductLink = "https://ig.me/m/unbreakablesteam?text=Hi!%20I'm%20interested%20in%20the%20Hybrid%20Physique%20Blueprint%20for%20%2415.%20Can%20you%20share%20more%20details%3F";

  return (
    <section id="products" className="section-padding bg-card" ref={ref}>
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            {t.title1[language]} <span className="text-gradient">{t.title2[language]}</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.subtitle[language]}
          </p>
        </motion.div>

        {/* Product Cards - Enhanced Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Free Product */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className={`bg-secondary/50 border-2 border-accent/30 rounded-3xl overflow-hidden hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 ${isRTL ? 'text-right' : ''}`}>
              {/* Product Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gift className="w-24 h-24 text-accent/40" />
                </div>
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg`}>
                  <Gift className="w-5 h-5" />
                  {t.free[language]}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-3xl text-foreground mb-4">
                  {t.freeTitle[language]}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {t.freeDescription[language]}
                </p>

                {/* What's Included */}
                <div className="mb-6">
                  <p className="font-semibold text-foreground mb-3">{language === "ar" ? "ما يتضمنه:" : "What's Included:"}</p>
                  <ul className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <li className={`flex items-start gap-2 text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{language === "ar" ? "خطة تمارين مجانية" : "Complete workout routine"}</span>
                    </li>
                    <li className={`flex items-start gap-2 text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{language === "ar" ? "نصائح غذائية أساسية" : "Basic nutrition tips"}</span>
                    </li>
                    <li className={`flex items-start gap-2 text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{language === "ar" ? "دليل سريع للبدء" : "Quick start guide"}</span>
                    </li>
                  </ul>
                </div>

                <a href="https://gainz-frequency-finder.lovable.app" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-lg cursor-pointer">
                    {t.joinWaitlist[language]}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Paid Product - Premium Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group"
          >
            <div className={`bg-gradient-to-br from-primary/10 via-secondary to-background border-2 border-primary/50 rounded-3xl overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 relative ${isRTL ? 'text-right' : ''}`}>
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary to-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity -z-10" />

              {/* Product Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/30 to-primary/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-24 h-24 text-primary/50" />
                </div>

                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} flex flex-col items-end gap-2`}>
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg scale-110">
                    <Zap className="w-5 h-5" />
                    <span>$20 / 199 درهم</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md text-white/60 px-3 py-1 rounded-full text-sm font-medium line-through">
                    {t.originalPrice[language]}
                  </div>
                </div>
                <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 animate-pulse shadow-lg`}>
                  <Clock className="w-4 h-4" />
                  {t.limitedTime[language]}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-3xl text-foreground mb-4">
                  {t.paidTitle[language]}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {t.paidDescription[language]}
                </p>

                {/* What's Included - Expanded */}
                <div className="mb-6">
                  <p className="font-semibold text-primary mb-3 text-lg">{t.includes[language]}</p>
                  <ul className="space-y-2">
                    {t.features.map((feature, index) => (
                      <li key={index} className={`flex items-start gap-2 text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature[language]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <PaidProductInfoModal>
                  <Button variant="hero" size="lg" className="w-full font-semibold text-lg cursor-pointer">
                    {language === 'en' ? 'START SOLO - $15 / 150 MAD' : 'ابدأ بمفردك - 15$ / 150 درهم'}
                  </Button>
                </PaidProductInfoModal>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
