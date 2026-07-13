import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
import useEmblaCarousel from "embla-carousel-react";
import PrimaryCTA from "@/components/PrimaryCTA";
import MaskedLines from "@/components/MaskedLines";
import { FEATURED_TRANSFORMATION_INDEX } from "@/lib/constants";

const TransformationsSection = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-80px" });
  const { language, isRTL } = useLanguage();
  const t = translations.transformations;

  const getImageSources = (index: number, item: (typeof t.testimonials)[number]) => {
    if ((item as { imageBefore?: string; imageAfter?: string }).imageBefore) {
      const typed = item as { imageBefore: string; imageAfter: string };
      return { before: typed.imageBefore, after: typed.imageAfter };
    }
    const imageIndex = (index % t.testimonials.length) + 1;
    return {
      before: `/transformation-${imageIndex}-before.png`,
      after: `/transformation-${imageIndex}-after.png`,
    };
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: isRTL ? "rtl" : "ltr",
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(FEATURED_TRANSFORMATION_INDEX);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(FEATURED_TRANSFORMATION_INDEX, true);
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const BeforeAfterSplit = ({
    before,
    after,
    name,
    quote,
  }: {
    before: string;
    after: string;
    name?: string;
    quote?: string;
  }) => (
    <div className="border border-white/[0.08] bg-[#111] overflow-hidden h-full group">
      <div className="aspect-[4/5] sm:aspect-[16/10] relative overflow-hidden bg-ink">
        <div className={`absolute inset-0 flex ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className={`w-1/2 h-full relative ${isRTL ? "border-l" : "border-r"} border-white/10`}>
            <img
              src={before}
              alt=""
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute top-3 left-3 bg-ink/90 px-2.5 py-1 border border-white/10 z-10">
              <span className="text-white text-[10px] font-editorial font-semibold tracking-widest uppercase">
                {t.before[language]}
              </span>
            </div>
          </div>
          <div className="w-1/2 h-full relative">
            <img
              src={after}
              alt=""
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute top-3 right-3 bg-red-br px-2.5 py-1 z-10">
              <span className="text-white text-[10px] font-editorial font-semibold tracking-widest uppercase">
                {t.after[language]}
              </span>
            </div>
          </div>
        </div>
      </div>
      {(name || quote) && (
        <div className={`p-4 border-t border-white/[0.06] ${isRTL ? "text-right" : ""}`}>
          {name && <p className="font-display text-lg uppercase">{name}</p>}
          {quote && <p className="font-editorial text-sm text-muted-foreground mt-1">{quote}</p>}
        </div>
      )}
    </div>
  );

  return (
    <section id="transformations" className="section-padding overflow-hidden bg-ink" ref={scrollRef}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`mb-10 md:mb-14 ${isRTL ? "text-right" : "text-center md:text-left"}`}
        >
          <p className="font-editorial text-[10px] uppercase tracking-[0.3em] text-red-br mb-3">
            {t.subtitle[language]}
          </p>
          <MaskedLines
            lines={[t.title1[language], t.title2[language]]}
            lineClassName="text-4xl md:text-5xl lg:text-6xl"
            redWordIndex={{ line: 1, wordIndex: 0 }}
          />
          <p className="font-editorial text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-4">
            {language === "en" ? "Swipe to explore" : language === "fr" ? "Glissez pour explorer" : "اسحب للاستكشاف"}
          </p>
        </motion.div>

        <div className="relative group/carousel">
          <div className="hidden md:block">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-30 w-11 h-11 flex items-center justify-center border border-white/15 bg-ink/80 text-foreground hover:border-red-br hover:text-red-br transition-colors disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-30 w-11 h-11 flex items-center justify-center border border-white/15 bg-ink/80 text-foreground hover:border-red-br hover:text-red-br transition-colors disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {t.testimonials.map((item, index) => {
                const images = getImageSources(index, item);
                return (
                  <div key={index} className="flex-shrink-0 w-[88vw] sm:w-[480px] md:w-[560px]">
                    <BeforeAfterSplit
                      before={images.before}
                      after={images.after}
                      name={item.name[language]}
                      quote={item.quote[language]}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`h-1 transition-all duration-300 ${
                  index === selectedIndex ? "w-7 bg-red-br" : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row items-center gap-6 mt-10 md:mt-14 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="font-editorial text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-red-br border-b border-transparent hover:border-red-br transition-colors pb-0.5"
              >
                {t.viewAll[language]}
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-ink border-white/10">
              <DialogHeader className="p-6 border-b border-white/10">
                <DialogTitle className="font-display text-2xl uppercase tracking-tight text-center">
                  {t.title1[language]} <span className="text-red-br">{t.title2[language]}</span>
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 pb-20">
                  {t.testimonials.map((item, index) => {
                    const images = getImageSources(index, item);
                    return (
                      <BeforeAfterSplit
                        key={index}
                        before={images.before}
                        after={images.after}
                        name={item.name[language]}
                        quote={item.quote[language]}
                      />
                    );
                  })}
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>

          <PrimaryCTA className="w-full sm:w-auto sm:ml-auto" showFriction={false} />
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
