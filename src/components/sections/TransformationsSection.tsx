import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import useEmblaCarousel from 'embla-carousel-react';

const TransformationsSection = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "0px" });
  const instagramDMLink = "https://ig.me/m/unbreakablesteam?text=The%20transformations%20are%20amazing!%20How%20can%20I%20get%20started%3F";
  const { language, isRTL } = useLanguage();
  const t = translations.transformations;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: isRTL ? 'rtl' : 'ltr',
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: true
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section id="transformations" className="section-padding overflow-hidden bg-secondary/5" ref={scrollRef}>
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
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-primary/50" />
              <p className="text-xl text-muted-foreground uppercase tracking-widest font-bold">
                {t.subtitle[language]}
              </p>
              <div className="h-px w-8 bg-primary/50" />
            </div>
            {/* Swipe Indicator */}
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[10px] md:text-xs text-primary font-black uppercase tracking-[0.3em] mt-4"
            >
              ← {language === 'en' ? 'SWIPE TO EXPLORE' : 'اسحب للاستكشاف'} →
            </motion.p>
          </div>
        </motion.div>

        {/* Embla Flick Carousel Container */}
        <div className="relative group/carousel px-4">
          {/* Navigation Buttons - Tablet/Desktop */}
          <div className="hidden md:block">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white transition-all hover:bg-primary hover:border-primary disabled:opacity-0 disabled:pointer-events-none group-hover/carousel:translate-x-0 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white transition-all hover:bg-primary hover:border-primary disabled:opacity-0 disabled:pointer-events-none group-hover/carousel:translate-x-0 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8">
              {t.testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[92vw] sm:w-[500px] md:w-[600px]"
                >
                  <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 h-full group">
                    {/* Before/After Images */}
                    <div className="aspect-[4/5] sm:aspect-[16/10] bg-muted relative overflow-hidden">
                      <div className={`absolute inset-0 flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {/* Before Image */}
                        <div className={`w-1/2 h-full relative ${isRTL ? 'border-l' : 'border-r'} border-border/30`}>
                          <img
                            src={`/transformation-${(index % t.testimonials.length) + 1}-before.png`}
                            alt="Before"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                          />
                          <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-sm border border-white/10 z-10">
                            <span className="text-white text-[10px] sm:text-[12px] font-black tracking-widest uppercase">{t.before[language]}</span>
                          </div>
                        </div>
                        {/* After Image */}
                        <div className="w-1/2 h-full relative">
                          <img
                            src={`/transformation-${(index % t.testimonials.length) + 1}-after.png`}
                            alt="After"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                          />
                          <div className="absolute top-4 right-4 bg-primary px-3 sm:px-4 py-1.5 rounded-sm shadow-xl z-10">
                            <span className="text-white text-[10px] sm:text-[12px] font-black tracking-widest uppercase">{t.after[language]}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className={`p-8 md:p-10 ${isRTL ? 'text-right' : ''}`}>
                      <Quote className={`w-12 h-12 text-primary/20 mb-6 ${isRTL ? 'mr-0 ml-auto scale-x-[-1]' : ''}`} />
                      <p className="text-foreground text-xl md:text-2xl italic mb-8 leading-relaxed font-medium">
                        "{item.quote[language]}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-0.5 w-12 bg-primary" />
                        <p className="text-primary font-black uppercase tracking-widest md:text-lg">— {item.name[language]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 transition-all duration-300 rounded-full ${index === selectedIndex ? 'w-8 bg-primary' : 'w-3 bg-primary/20 hover:bg-primary/40 cursor-pointer'}`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* See All Button */}
          <div className="flex justify-center mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto gap-2 text-primary border-primary/20 hover:bg-primary hover:text-white transition-all tracking-widest uppercase text-xs sm:text-sm font-bold py-6 sm:py-4 shadow-lg shadow-primary/5">
                  <Grid className="w-4 h-4" />
                  {language === 'en' ? 'See All Transformations' : 'شاهد كل التحولات'}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-background/95 backdrop-blur-xl border-white/10">
                <DialogHeader className="p-6 border-b border-white/10">
                  <DialogTitle className="text-2xl font-display uppercase tracking-tighter text-center">
                    {t.title1[language]} <span className="text-primary">{t.title2[language]}</span>
                  </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 pb-20">
                    {t.testimonials.map((item, index) => (
                      <div key={index} className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 group">
                        {/* Before/After Images */}
                        <div className="aspect-[4/5] sm:aspect-[16/10] bg-muted relative overflow-hidden">
                          <div className={`absolute inset-0 flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                            {/* Before Image */}
                            <div className={`w-1/2 h-full relative ${isRTL ? 'border-l' : 'border-r'} border-border/30`}>
                              <img
                                src={`/transformation-${(index % t.testimonials.length) + 1}-before.png`}
                                alt="Before"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                              />
                              <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10 z-10">
                                <span className="text-white text-[10px] font-black tracking-widest uppercase">{t.before[language]}</span>
                              </div>
                            </div>
                            {/* After Image */}
                            <div className="w-1/2 h-full relative">
                              <img
                                src={`/transformation-${(index % t.testimonials.length) + 1}-after.png`}
                                alt="After"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                              />
                              <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-sm shadow-xl z-10">
                                <span className="text-white text-[10px] font-black tracking-widest uppercase">{t.after[language]}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                          <Quote className={`w-8 h-8 text-primary/20 mb-4 ${isRTL ? 'mr-0 ml-auto scale-x-[-1]' : ''}`} />
                          <p className="text-foreground text-lg italic mb-6 leading-relaxed font-medium line-clamp-4">
                            "{item.quote[language]}"
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="h-0.5 w-8 bg-primary" />
                            <p className="text-primary font-black uppercase tracking-widest text-sm">— {item.name[language]}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 pt-0 flex justify-center pb-20">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full sm:w-auto uppercase tracking-widest font-black border-primary/20 hover:bg-primary hover:text-white">
                        {language === 'en' ? 'Close Gallery' : 'إغلاق المعرض'}
                      </Button>
                    </DialogTrigger>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8 md:mt-12"
        >
          <a href={instagramDMLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-[92vw]">
            <Button variant="cta" size="xxl" className="uppercase tracking-widest font-black px-6 md:px-12 py-6 md:py-8 text-lg md:text-xl group w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-3">
                {t.cta[language]}
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              </span>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default TransformationsSection;
