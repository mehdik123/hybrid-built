import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Play, X } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS, TESTIMONIAL_REEL_EMBED, TESTIMONIAL_REEL_URL } from "@/lib/constants";
import { translations } from "@/lib/translations";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  tag: string;
  title: string;
  line: string;
  mediaLabel: string;
  cta: string;
  inView: boolean;
};

const TestimonialVideoCard = ({ tag, title, line, mediaLabel, cta, inView }: Props) => {
  const { language, isRTL } = useLanguage();
  const vt = translations.videoTestimonial;
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const openPlayer = useCallback(() => {
    setOpen(true);
  }, []);

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
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.18 }}
        className={`mt-12 md:mt-16 grid md:grid-cols-[minmax(0,220px)_1fr] lg:grid-cols-[minmax(0,260px)_1fr] gap-6 md:gap-10 items-center ${
          isRTL ? "md:[direction:rtl]" : ""
        }`}
      >
        <button
          type="button"
          onClick={openPlayer}
          aria-label={cta}
          className="group relative w-full max-w-[220px] sm:max-w-[260px] mx-auto md:mx-0 aspect-[3/4] overflow-hidden rounded-xl bg-black ring-1 ring-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-br"
        >
          <img
            src={ASSETS.testimonialCover}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            decoding="async"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

          <span className="absolute inset-0 z-10 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-br text-white shadow-[0_10px_28px_rgba(232,0,28,0.4)] transition-transform duration-300 group-hover:scale-105">
              <Play className="h-6 w-6 fill-current translate-x-0.5" />
            </span>
          </span>

          <span className="absolute bottom-3 left-3 z-10 font-editorial text-[9px] uppercase tracking-[0.2em] text-white/90">
            {mediaLabel}
          </span>
        </button>

        <div className={`max-w-lg ${isRTL ? "text-right" : "text-left"}`}>
          <p className="font-editorial text-[11px] uppercase tracking-[0.12em] text-red-br mb-3">
            {tag}
          </p>
          <h3 className="font-display text-2xl md:text-4xl leading-[1.08] text-foreground tracking-tight">
            {title}
          </h3>
          <p className="mt-4 font-editorial text-sm md:text-base text-white/65 leading-relaxed">
            {line}
          </p>
          <button
            type="button"
            onClick={openPlayer}
            className={`mt-5 inline-flex items-center gap-2 font-editorial text-sm text-white/85 hover:text-white transition-colors ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            {cta}
            <span className="inline-block border-l-[6px] border-y-[5px] border-y-transparent border-l-white/80 translate-y-px" />
          </button>
        </div>
      </motion.div>

      <Dialog open={open} onOpenChange={(v) => (v ? openPlayer() : closePlayer())}>
        <DialogContent className="max-w-[min(420px,94vw)] border-white/10 bg-ink p-0 overflow-hidden sm:rounded-none [&>button]:hidden">
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
