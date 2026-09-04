import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Play, X } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS, TESTIMONIAL_REEL_EMBED, TESTIMONIAL_REEL_URL } from "@/lib/constants";
import { translations } from "@/lib/translations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  tag: string;
  line: string;
  cta: string;
  inView: boolean;
};

const TestimonialVideoCard = ({ tag, line, cta, inView }: Props) => {
  const { language, isRTL } = useLanguage();
  const vt = translations.videoTestimonial;
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [open, setOpen] = useState(false);
  const [useLocal, setUseLocal] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const probe = async () => {
      try {
        const res = await fetch(ASSETS.testimonialVideo, { method: "HEAD" });
        const type = (res.headers.get("content-type") || "").toLowerCase();
        // Vite SPA serves index.html (text/html) for missing files — only trust real video.
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
        className="mt-10 md:mt-14 grid md:grid-cols-[minmax(0,340px)_1fr] gap-6 md:gap-10 items-center"
      >
        <button
          type="button"
          onClick={openPlayer}
          aria-label={cta}
          className="group relative w-full max-w-[300px] sm:max-w-[340px] mx-auto md:mx-0 aspect-[9/16] overflow-hidden bg-black ring-1 ring-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-br"
        >
          <img
            src={ASSETS.testimonialCover}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            decoding="async"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/25" />

          {!reduced && (
            <motion.span
              className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-br/45"
              animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              aria-hidden
            />
          )}

          <span className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
            <span className="flex h-16 w-16 md:h-[4.5rem] md:w-[4.5rem] items-center justify-center rounded-full bg-red-br text-white shadow-[0_12px_40px_rgba(232,0,28,0.45)] transition-transform duration-300 group-hover:scale-105">
              <Play className="h-7 w-7 md:h-8 md:w-8 fill-current translate-x-0.5" />
            </span>
            <span className="font-editorial text-[10px] uppercase tracking-[0.28em] text-white/85">
              {cta}
            </span>
          </span>
        </button>

        <div className={`max-w-md ${isRTL ? "text-right" : ""}`}>
          <p className="font-editorial text-[10px] uppercase tracking-[0.22em] text-red-br mb-3">
            {tag}
          </p>
          <p className="font-editorial text-lg md:text-xl text-white/75 leading-relaxed">
            {line}
          </p>
          <button
            type="button"
            onClick={openPlayer}
            className={`mt-5 inline-flex items-center gap-2 font-editorial text-xs uppercase tracking-[0.18em] text-white/55 hover:text-white transition-colors ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            {cta}
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
