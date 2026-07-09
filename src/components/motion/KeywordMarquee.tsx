import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TEXT = "STRENGTH ◆ HYPERTROPHY ◆ FAT LOSS ◆ VITALITY ◆ ";

const KeywordMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const velocityRef = useRef(1);

  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let raf = 0;
    let lastScroll = window.scrollY;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;
      const scrollDelta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;

      velocityRef.current += scrollDelta * 0.02;
      velocityRef.current *= 0.92;
      const speed = 0.35 + velocityRef.current;

      x -= speed * (dt / 16);
      if (x <= -track.scrollWidth / 2) x = 0;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <div className="overflow-hidden border-y border-white/[0.06] py-3 bg-ink" aria-hidden>
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-editorial text-[10px] md:text-xs uppercase tracking-[0.35em] text-muted-foreground px-4"
          >
            {TEXT.repeat(3)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordMarquee;
