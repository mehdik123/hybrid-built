import { useCallback, useEffect, useRef, useState } from "react";
import { Instagram, Play, X } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS, TESTIMONIAL_REEL_EMBED, TESTIMONIAL_REEL_URL } from "@/lib/constants";
import { translations } from "@/lib/translations";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  tag: string;
  title: string;
  line: string;
  mediaLabel: string;
  cta: string;
  inView: boolean;
};

const TestimonialVideoCard = ({ tag, title, line, mediaLabel, cta }: Props) => {
  const { language, isRTL } = useLanguage();
  const vt = translations.videoTestimonial;
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const mediaWrapRef = useRef<HTMLButtonElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [useLocal, setUseLocal] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const probe = async () => {
      try {
        const res = await fetch(ASSETS.testimonialVideo, { method: "HEAD" });
        const type = (res.headers.get("content-type") || "").toLowerCase();
        if (!cancelled) setUseLocal(res.ok && type.includes("video"));
      } catch {
        if (!cancelled) setUseLocal(false);
      }
    };
    void probe();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mediaWrapRef.current,
        { clipPath: "inset(18% 18% 18% 18%)", scale: 1.08 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          ease: "power3.out",
          duration: 1.1,
          scrollTrigger: { trigger: root, start: "top 75%" },
        }
      );
      gsap.fromTo(
        typeRef.current?.querySelectorAll("[data-vt-line]"),
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 70%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, [language]);

  const openPlayer = useCallback(() => setOpen(true), []);
  const closePlayer = useCallback(() => {
    const el = videoRef.current;
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open || !useLocal) return;
    const id = requestAnimationFrame(() => {
      void videoRef.current?.play().catch(() => undefined);
    });
    return () => cancelAnimationFrame(id);
  }, [open, useLocal]);

  return (
    <>
      <section
        ref={rootRef}
        className={`mt-10 md:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch ${
          isRTL ? "lg:[direction:rtl]" : ""
        }`}
      >
        <button
          ref={mediaWrapRef}
          type="button"
          onClick={openPlayer}
          aria-label={cta}
          className="group relative lg:col-span-7 min-h-[48vh] md:min-h-[56vh] overflow-hidden bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-br"
        >
          <img
            src={ASSETS.testimonialCover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            decoding="async"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />

          <span className="absolute top-5 left-5 font-editorial text-[10px] uppercase tracking-[0.22em] text-white/80">
            {mediaLabel}
          </span>

          <span className="absolute inset-0 z-10 flex items-center justify-center">
            <span className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center border border-white/40 bg-black/30 backdrop-blur-sm transition-all duration-400 group-hover:border-red-br group-hover:bg-red-br">
              <Play className="h-7 w-7 md:h-8 md:w-8 fill-current text-white translate-x-0.5" />
              <span className="pointer-events-none absolute inset-0 animate-ping border border-white/20 opacity-20" />
            </span>
          </span>

          <span className="absolute bottom-5 left-5 right-5 flex justify-between items-end gap-4">
            <span className="mega-type text-white/90 text-3xl md:text-5xl leading-none">Play</span>
            <span className="font-editorial text-[11px] uppercase tracking-[0.16em] text-white/60">
              {cta}
            </span>
          </span>
        </button>

        <div
          ref={typeRef}
          className={`lg:col-span-5 flex flex-col justify-center ${isRTL ? "text-right" : "text-left"}`}
        >
          <p data-vt-line className="font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-4">
            {tag}
          </p>
          <h3
            data-vt-line
            className={`mega-type text-white mb-5 ${
              language === "ar"
                ? "text-[clamp(1.6rem,4vw,2.8rem)] leading-[1.2]"
                : "text-[clamp(2.2rem,4.5vw,3.8rem)]"
            }`}
          >
            {title}
          </h3>
          <p data-vt-line className="font-editorial text-sm md:text-base text-white/55 leading-relaxed max-w-md">
            {line}
          </p>
          <button
            data-vt-line
            type="button"
            onClick={openPlayer}
            className={`mt-8 inline-flex items-center gap-3 font-editorial text-xs uppercase tracking-[0.18em] text-white border-b border-red-br pb-2 w-fit hover:text-red-br transition-colors ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            {cta}
            <Play className="h-3.5 w-3.5 fill-current" />
          </button>
        </div>
      </section>

      <Dialog open={open} onOpenChange={(v) => (v ? openPlayer() : closePlayer())}>
        <DialogContent className="max-w-[min(480px,94vw)] border-white/10 bg-ink p-0 overflow-hidden sm:rounded-none [&>button]:hidden">
          <DialogTitle className="sr-only">{vt.play[language]}</DialogTitle>

          <div className="relative flex items-center justify-between px-4 py-3 border-b border-white/10">
            <span className="font-editorial text-[10px] uppercase tracking-[0.22em] text-red-br">
              {tag}
            </span>
            <button
              type="button"
              onClick={closePlayer}
              className="flex h-9 w-9 items-center justify-center text-white/80 hover:text-white transition-colors"
              aria-label={vt.close[language]}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="relative bg-black">
            {useLocal ? (
              <video
                ref={videoRef}
                src={ASSETS.testimonialVideo}
                className="w-full max-h-[75vh] object-contain"
                controls
                playsInline
                autoPlay
              />
            ) : (
              <div className="relative w-full aspect-[9/16] max-h-[75vh] bg-black">
                <iframe
                  key={open ? "open" : "closed"}
                  title={vt.play[language]}
                  src={`${TESTIMONIAL_REEL_EMBED}/captioned/?cr=1&v=14`}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="eager"
                />
              </div>
            )}
          </div>

          {!useLocal && (
            <div className="px-4 py-3 border-t border-white/10 flex flex-col items-center gap-2">
              <a
                href={TESTIMONIAL_REEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-editorial text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-red-br transition-colors ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <Instagram className="h-3.5 w-3.5" />
                {vt.openIg[language]}
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TestimonialVideoCard;
