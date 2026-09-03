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
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 right-0 z-50 h-px bg-white/[0.06]"
      aria-hidden
    >
      <div
        className="h-full bg-red-br origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${Math.min(1, Math.max(0, progress))})` }}
      />
    </div>
  );
};

export default ScrollProgress;
