import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const next = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(next);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  if (progress <= 0.01) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed right-4 top-28 bottom-24 z-40 hidden md:flex flex-col items-center gap-3">
      <div className="relative h-full w-px overflow-hidden rounded-full bg-gradient-to-b from-transparent via-primary/20 to-transparent">
        <div
          className="absolute inset-0 origin-top bg-gradient-to-b from-primary to-primary/0"
          style={{ transform: `scaleY(${Math.min(1, Math.max(0, progress))})` }}
        />
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.35em] text-muted-foreground/60">
        Scroll
      </span>
    </div>
  );
};

export default ScrollProgress;

