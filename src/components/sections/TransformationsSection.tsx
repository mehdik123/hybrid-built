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
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
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
    align: "start",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(FEATURED_TRANSFORMATION_INDEX);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(FEATURED_TRANSFORMATION_INDEX, true);
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const active = t.testimonials[selectedIndex];
  const activeImages = getImageSources(selectedIndex, active);
  const prevBtnEnabled = selectedIndex > 0;
  const nextBtnEnabled = selectedIndex < t.testimonials.length - 1;

  return (
    <section id="transformations" className="section-padding overflow-hidden bg-ink" ref={scrollRef}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`mb-10 md:mb-14 ${isRTL ? "text-right" : ""}`}
        >
          <p className="font-editorial text-[10px] uppercase tracking-[0.3em] text-red-br mb-3">
            {t.subtitle[language]}
          </p>
          <MaskedLines
            lines={[t.title1[language], t.title2[language]]}
            lineClassName="text-4xl md:text-5xl lg:text-6xl"
            redWordIndex={{ line: 1, wordIndex: 0 }}
          />
          <div className="hairline w-full max-w-xs mt-6" />
        </motion.div>

        {/* Featured drag slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10"
        >
          <div className="lg:col-span-8">
            <BeforeAfterSlider
              key={selectedIndex}
              beforeSrc={activeImages.before}
              afterSrc={activeImages.after}
              beforeLabel={t.before[language]}
              afterLabel={t.after[language]}
              alt={`${active.name[language]} transformation`}
            />
          </div>
          <div className={`lg:col-span-4 pb-2 ${isRTL ? "text-right" : ""}`}>
            <span className="font-editorial text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {String(selectedIndex + 1).padStart(2, "0")} / {String(t.testimonials.length).padStart(2, "0")}
            </span>
            <h3 className="font-display text-3xl md:text-4xl uppercase mt-2 mb-4">{active.name[language]}</h3>
            <p className="font-editorial text-base text-muted-foreground leading-relaxed italic">
              "{active.quote[language]}"
            </p>
            <div className={`flex items-center gap-3 mt-8 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="touch-target w-11 h-11 border border-white/15 flex items-center justify-center text-foreground hover:border-red-br hover:text-red-br transition-colors disabled:opacity-30"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="touch-target w-11 h-11 border border-white/15 flex items-center justify-center text-foreground hover:border-red-br hover:text-red-br transition-colors disabled:opacity-30"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <div className="overflow-hidden mb-12" ref={emblaRef}>
          <div className="flex gap-px bg-white/[0.06]">
            {t.testimonials.map((item, index) => {
              const images = getImageSources(index, item);
              const isActive = index === selectedIndex;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`group/thumb flex-shrink-0 w-24 sm:w-28 md:w-32 aspect-[3/4] relative overflow-hidden transition-all duration-300 ${
                    isActive ? "opacity-100 ring-1 ring-red-br ring-inset" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={images.after}
                    alt=""
                    className="h-full w-full object-cover object-top grayscale group-hover/thumb:grayscale-0 group-hover/thumb:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-ink/90 font-editorial text-[8px] uppercase tracking-wider py-1.5 text-center translate-y-full group-hover/thumb:translate-y-0 group-focus-visible/thumb:translate-y-0 transition-transform duration-300">
                    {item.name[language]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row items-center gap-6 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="font-editorial text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-red-br border-b border-transparent hover:border-red-br transition-colors pb-0.5"
              >
                {language === "en" ? "View all transformations" : language === "fr" ? "Voir toutes les transformations" : "شاهد كل التحولات"}
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-ink border-white/10">
              <DialogHeader className="p-6 border-b border-white/10">
                <DialogTitle className="font-display text-2xl uppercase tracking-tight text-center">
                  {t.title1[language]} <span className="text-red-br">{t.title2[language]}</span>
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] p-px">
                  {t.testimonials.map((item, index) => {
                    const images = getImageSources(index, item);
                    return (
                      <div key={index} className="bg-ink">
                        <BeforeAfterSlider
                          beforeSrc={images.before}
                          afterSrc={images.after}
                          beforeLabel={t.before[language]}
                          afterLabel={t.after[language]}
                          alt={item.name[language]}
                          className="aspect-[4/5]"
                        />
                        <div className="p-4 border-t border-white/[0.06]">
                          <p className="font-display text-lg uppercase">{item.name[language]}</p>
                          <p className="font-editorial text-sm text-muted-foreground mt-1">{item.quote[language]}</p>
                        </div>
                      </div>
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
