import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const TransformationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const instagramDMLink = "https://ig.me/m/unbreakablesteam?text=The%20transformations%20are%20amazing!%20How%20can%20I%20get%20started%3F";
  const { language, isRTL } = useLanguage();
  const t = translations.transformations;

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...t.testimonials, ...t.testimonials, ...t.testimonials];

  return (
    <section id="transformations" className="section-padding overflow-hidden" ref={ref}>
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

        {/* Auto-scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6 lg:gap-8"
                animate={{
                  x: isRTL ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
                style={{ width: "fit-content" }}
              >
                {duplicatedTestimonials.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[320px] md:w-[380px]"
                  >
                    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                      {/* Real Before/After Images */}
                      <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                        <div className={`absolute inset-0 flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                          {/* Before Image */}
                          <div className={`w-1/2 h-full relative ${isRTL ? 'border-l' : 'border-r'} border-border`}>
                            <img
                              src={`/transformation-${(index % t.testimonials.length) + 1}-before.png`}
                              alt="Before transformation"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full">
                              <span className="text-white text-xs font-medium uppercase">{t.before[language]}</span>
                            </div>
                          </div>
                          {/* After Image */}
                          <div className="w-1/2 h-full relative">
                            <img
                              src={`/transformation-${(index % t.testimonials.length) + 1}-after.png`}
                              alt="After transformation"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-primary/90 px-3 py-1 rounded-full">
                              <span className="text-white text-xs font-medium uppercase">{t.after[language]}</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>

                      {/* Quote */}
                      <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                        <Quote className={`w-8 h-8 text-primary/50 mb-3 ${isRTL ? 'mr-0 ml-auto scale-x-[-1]' : ''}`} />
                        <p className="text-foreground italic mb-4 leading-relaxed line-clamp-3">
                          "{item.quote[language]}"
                        </p>
                        <p className="text-primary font-semibold">— {item.name[language]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient Overlays */}
            <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} h-full w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10`} />
            <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10`} />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              {t.cta[language]}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationsSection;

