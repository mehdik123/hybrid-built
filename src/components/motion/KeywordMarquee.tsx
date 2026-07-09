import { useEffect, useRef } from "react";
import { useLightMotion } from "@/hooks/useLightMotion";

const TEXT = "STRENGTH ◆ HYPERTROPHY ◆ FAT LOSS ◆ VITALITY ◆ ";

const KeywordMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const light = useLightMotion();

  useEffect(() => {
    if (light) return;
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let raf = 0;
    let lastScroll = window.scrollY;
    let lastTime = performance.now();
    let visible = true;

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { rootMargin: "100px" }
    );
    io.observe(track);

    const loop = (time: number) => {
      if (!visible) {
        raf = requestAnimationFrame(loop);
        return;
      }
      const dt = Math.min(time - lastTime, 32);
      lastTime = time;
      const scrollDelta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;

      let velocity = scrollDelta * 0.02;
      velocity *= 0.92;
      const speed = 0.35 + velocity;

      x -= speed * (dt / 16);
      if (x <= -track.scrollWidth / 2) x = 0;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [light]);

  return (
    <div className="overflow-hidden border-y border-white/[0.06] py-3 bg-ink" aria-hidden>
      <div
        ref={trackRef}
        className={`flex whitespace-nowrap ${light ? "animate-marquee-css" : ""}`}
      >
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
