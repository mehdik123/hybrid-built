import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ScrollCtx = createContext(false);

export const useSmoothScroll = () => useContext(ScrollCtx);

/**
 * Lenis-style smooth scroll (lerp 0.09) without external dependency.
 * Falls back to native scroll when prefers-reduced-motion is set.
 */
export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  const reduced = useReducedMotion();
  const activeRef = useRef(false);

  useEffect(() => {
    if (reduced) return;

    let target = window.scrollY;
    let current = window.scrollY;
    let raf = 0;
    const lerp = 0.09;
    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const tick = () => {
      current += (target - current) * lerp;
      if (Math.abs(target - current) < 0.5) {
        current = target;
        window.scrollTo(0, current);
        activeRef.current = false;
        return;
      }
      window.scrollTo(0, current);
      raf = requestAnimationFrame(tick);
    };

    const queue = () => {
      if (!activeRef.current) {
        activeRef.current = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return;
      e.preventDefault();
      target = Math.min(maxScroll(), Math.max(0, target + e.deltaY));
      queue();
    };

    const syncTarget = () => {
      target = window.scrollY;
      current = window.scrollY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", syncTarget, { passive: true });
    window.addEventListener("resize", syncTarget);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", syncTarget);
      window.removeEventListener("resize", syncTarget);
    };
  }, [reduced]);

  return <ScrollCtx.Provider value={!reduced}>{children}</ScrollCtx.Provider>;
};
