import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, Zap, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language, isRTL } = useLanguage();
  const t = translations.products;

  const freeDownloadLink = "https://drive.google.com/YOUR_LINK";
  const paidProductLink = "https://gumroad.com/YOUR_LINK";

  return (
    <section id="products" className="section-padding bg-card" ref={ref}>
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            {t.title1[language]} <span className="text-gradient">{t.title2[language]}</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.subtitle[language]}
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Free Product */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`bg-secondary/50 border border-accent/30 rounded-2xl p-6 md:p-8 relative overflow-hidden ${isRTL ? 'text-right' : ''}`}
          >
            <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1`}>
              <Gift className="w-4 h-4" />
              {t.free[language]}
            </div>

            <div className="mb-6">
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                {t.freeTitle[language]}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.freeDescription[language]}
              </p>
            </div>

            <a href={freeDownloadLink} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" size="lg" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                {t.freeButton[language]}
              </Button>
            </a>
          </motion.div>

          {/* Paid Product */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`bg-gradient-to-br from-primary/10 to-secondary border border-primary/30 rounded-2xl p-6 md:p-8 relative overflow-hidden ${isRTL ? 'text-right' : ''}`}
          >
            <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1`}>
              <Zap className="w-4 h-4" />
              $15
            </div>

            <div className="mb-4">
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                {t.paidTitle[language]}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.paidDescription[language]}
              </p>

              <p className="text-sm text-foreground font-medium mb-3">{t.includes[language]}</p>
              <ul className="space-y-2 mb-6">
                {t.features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-2 text-muted-foreground text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature[language]}
                  </li>
                ))}
              </ul>
            </div>

            <a href={paidProductLink} target="_blank" rel="noopener noreferrer" className="block mb-4">
              <Button variant="hero" size="lg" className="w-full">
                {t.paidButton[language]}
              </Button>
            </a>

            <div className={`flex items-center justify-center gap-2 text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Clock className="w-4 h-4" />
              <span>{t.limitedTime[language]}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;