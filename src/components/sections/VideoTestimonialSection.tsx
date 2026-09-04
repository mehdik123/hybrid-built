import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Instagram, Play, X } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { ASSETS, TESTIMONIAL_REEL_URL } from "@/lib/constants";
import MaskedLines from "@/components/MaskedLines";
import { useLightMotion } from "@/hooks/useLightMotion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const loadInstagramEmbedScript = (): Promise<void> =>
  new Promise((resolve) => {
    if (window.instgrm?.Embeds) {
      resolve();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>('script[data-ig-embed="1"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      // Script may already be loaded
      if (window.instgrm?.Embeds) resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.dataset.igEmbed = "1";
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });

const VideoTestimonialSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const embedHostRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { language, isRTL } = useLanguage();
  const t = translations.videoTestimonial;
  const light = useLightMotion();
  const reduced = useReducedMotion();

  const [open, setOpen] = useState(false);
  const [useLocal, setUseLocal] = useState(false);
  const [embedReady, setEmbedReady] = useState(false);

  const bx = useMotionValue(0);
  const by = useMotionValue(0);
  const sx = useSpring(bx, { stiffness: 280, damping: 24 });
  const sy = useSpring(by, { stiffness: 280, damping: 24 });

  // Only treat as local video if the file is actually video/* (Vite SPA can 200 HTML for missing paths).
  useEffect(() => {
    let cancelled = false;
    const probe = async () => {
      try {
        const res = await fetch(ASSETS.testimonialVideo, { method: "HEAD" });
        const type = res.headers.get("content-type") || "";
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
    setEmbedReady(false);
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
    if (!open || useLocal) return;
    let cancelled = false;

    const mountEmbed = async () => {
      await loadInstagramEmbedScript();
      if (cancelled || !embedHostRef.current) return;

      embedHostRef.current.innerHTML = "";
      const block = document.createElement("blockquote");
      block.className = "instagram-media";
      block.setAttribute("data-instgrm-permalink", TESTIMONIAL_REEL_URL.split("?")[0]);
      block.setAttribute("data-instgrm-version", "14");
      block.style.cssText = "background:#000;border:0;margin:0 auto;max-width:100%;width:100%;min-width:280px;";
      embedHostRef.current.appendChild(block);

      window.instgrm?.Embeds?.process();
      // Give IG a beat to paint the iframe
      window.setTimeout(() => {
        if (!cancelled) setEmbedReady(true);
      }, 600);
    };

    void mountEmbed();
    return () => {
      cancelled = true;
    };
  }, [open, useLocal]);

  useEffect(() => {
    if (!open || !useLocal) return;
    const id = requestAnimationFrame(() => {
      void videoRef.current?.play().catch(() => undefined);
    });
    return () => cancelAnimationFrame(id);
  }, [open, useLocal]);

  const onPlayBtnMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (reduced || light) return;
    const r = e.currentTarget.getBoundingClientRect();
    bx.set((e.clientX - r.left - r.width / 2) * 0.28);
    by.set((e.clientY - r.top - r.height / 2) * 0.28);
  };

  const onPlayBtnLeave = () => {
    bx.set(0);
    by.set(0);
  };

  return (
    <section
      id="video-testimonial"
      ref={sectionRef}
      className="section-padding bg-ink relative overflow-hidden border-t border-white/[0.06]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(232,0,28,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="container-tight relative z-10">
        <div className={`max-w-2xl mb-12 md:mb-16 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-[10px] uppercase tracking-[0.3em] text-red-br mb-4"
          >
            {t.tag[language]}
          </motion.p>
          <MaskedLines
            lines={[t.title1[language], t.title2[language]]}
            lineClassName="text-4xl md:text-5xl lg:text-6xl text-foreground"
            redWordIndex={{ line: 0, wordIndex: 0 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-editorial text-base md:text-lg text-muted-foreground"
          >
            {t.subtitle[language]}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px]"
        >
          <div className="relative aspect-[9/16] overflow-hidden bg-black ring-1 ring-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.85)]">
            <img
              src={ASSETS.testimonialCover}
              alt=""
              className="h-full w-full object-cover"
              decoding="async"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />

            {!reduced && (
              <motion.span
                className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-br/40"
                animate={{ scale: [1, 1.35], opacity: [0.55, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                aria-hidden
              />
            )}

            <button
              type="button"
              onClick={openPlayer}
              onMouseMove={onPlayBtnMove}
              onMouseLeave={onPlayBtnLeave}
              aria-label={t.play[language]}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-br"
            >
              <motion.span
                style={reduced || light ? undefined : { x: sx, y: sy }}
                whileHover={reduced ? undefined : { scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-red-br text-white shadow-[0_12px_40px_rgba(232,0,28,0.45)]"
              >
                <Play className="h-7 w-7 md:h-8 md:w-8 fill-current translate-x-0.5" />
              </motion.span>
              <span className="font-editorial text-[10px] uppercase tracking-[0.28em] text-white/80">
                {t.play[language]}
              </span>
            </button>

            <div
              className={`absolute bottom-5 left-5 right-5 z-[5] flex items-end justify-between gap-3 pointer-events-none ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <span className="font-editorial text-xs uppercase tracking-[0.18em] text-white/90">
                {t.client[language]}
              </span>
              <Instagram className="h-4 w-4 text-white/50" aria-hidden />
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: isRTL ? "right" : "left" }}
            className="mt-6 h-px bg-gradient-to-r from-red-br via-red-br/40 to-transparent"
          />
        </motion.div>
      </div>

      <Dialog open={open} onOpenChange={(v) => (v ? openPlayer() : closePlayer())}>
        <DialogContent className="max-w-[min(420px,94vw)] border-white/10 bg-ink p-0 overflow-hidden sm:rounded-none [&>button]:hidden">
          <DialogTitle className="sr-only">{t.play[language]}</DialogTitle>

          <div className="relative flex items-center justify-between px-4 py-3 border-b border-white/10">
            <span className="font-editorial text-[10px] uppercase tracking-[0.22em] text-red-br">
              {t.tag[language]}
            </span>
            <button
              type="button"
              onClick={closePlayer}
              className="flex h-9 w-9 items-center justify-center text-white/80 hover:text-white transition-colors"
              aria-label={t.close[language]}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="relative bg-black min-h-[420px] flex items-center justify-center">
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
              <>
                <AnimatePresence>
                  {!embedReady && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-ink"
                    >
                      <div className="h-8 w-8 rounded-full border-2 border-red-br/30 border-t-red-br animate-spin" />
                      <p className="font-editorial text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {t.play[language]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div
                  ref={embedHostRef}
                  className="w-full px-2 py-3 flex justify-center overflow-y-auto max-h-[70vh] ig-embed-host"
                />
              </>
            )}
          </div>

          {!useLocal && (
            <div className="px-4 py-3 border-t border-white/10 flex justify-center">
              <a
                href={TESTIMONIAL_REEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-editorial text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-red-br transition-colors ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <Instagram className="h-3.5 w-3.5" />
                {t.openIg[language]}
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoTestimonialSection;
