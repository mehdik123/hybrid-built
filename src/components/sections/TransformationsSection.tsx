import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const TransformationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const instagramDMLink = "https://ig.me/m/unbreakablesteam?text=The%20transformations%20are%20amazing!%20How%20can%20I%20get%20started%3F";
  const { language, isRTL } = useLanguage();
  const t = translations.transformations;

  return (
    <section id="transformations" className="section-padding overflow-hidden bg-secondary/10" ref={ref}>
      <div className="container">
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
          <p className="text-xl text-muted-foreground uppercase tracking-widest font-bold">
            {t.subtitle[language]}
          </p>
        </motion.div>

        {/* Draggable Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-6 lg:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {t.testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center first:pl-0 last:pr-0"
              >
                <div className="bg-card border-2 border-border/50 rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 h-full group">
                  {/* Before/After Images */}
                  <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                    <div className={`absolute inset-0 flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {/* Before Image */}
                      <div className={`w-1/2 h-full relative ${isRTL ? 'border-l' : 'border-r'} border-border/50`}>
                        <img
                          src={`/transformation-${(index % t.testimonials.length) + 1}-before.png`}
                          alt="Before"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                          <span className="text-white text-[10px] font-black tracking-tighter uppercase">{t.before[language]}</span>
                        </div>
                      </div>
                      {/* After Image */}
                      <div className="w-1/2 h-full relative">
                        <img
                          src={`/transformation-${(index % t.testimonials.length) + 1}-after.png`}
                          alt="After"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-sm shadow-lg">
                          <span className="text-white text-[10px] font-black tracking-tighter uppercase">{t.after[language]}</span>
                        </div>
                      </div>
                    </div>
                    {/* Visual separation line */}
                    <div className="absolute inset-y-0 left-1/2 w-1 bg-white/20 backdrop-blur-sm -translate-x-1/2 hidden md:block" />
                  </div>

                  {/* Testimonial Quote */}
                  <div className={`p-8 ${isRTL ? 'text-right' : ''} bg-gradient-to-b from-card to-background/50`}>
                    <Quote className={`w-10 h-10 text-primary/30 mb-4 ${isRTL ? 'mr-0 ml-auto scale-x-[-1]' : ''}`} />
                    <p className="text-foreground text-lg italic mb-6 leading-relaxed font-medium">
                      "{item.quote[language]}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-8 bg-primary rounded-full" />
                      <p className="text-primary font-black uppercase tracking-widest text-sm">— {item.name[language]}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Swipe Hint */}
          <div className="flex justify-center mt-4 md:hidden">
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest animate-pulse">Swipe to see more →</span>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xxl" className="uppercase tracking-widest font-black">
              {t.cta[language]}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationsSection;

