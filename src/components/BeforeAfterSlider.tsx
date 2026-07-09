import { useEffect, useRef, useState, useCallback } from "react";
import { useLightMotion } from "@/hooks/useLightMotion";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  alt?: string;
  className?: string;
  defaultPosition?: number;
}

const SNAP_THRESHOLD = 4;
const SNAP_TARGET = 50;

const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  alt = "Transformation",
  className = "",
  defaultPosition = 50,
}: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(defaultPosition);
  const rafRef = useRef(0);
  const [position, setPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const light = useLightMotion();

  const applySnap = useCallback((pct: number) => {
    if (Math.abs(pct - SNAP_TARGET) < SNAP_THRESHOLD) return SNAP_TARGET;
    return pct;
  }, []);

  const paint = useCallback((pct: number) => {
    positionRef.current = pct;
    if (clipRef.current) {
      clipRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    }
    if (handleRef.current) {
      handleRef.current.style.left = `${pct}%`;
    }
  }, []);

  const updatePosition = useCallback(
    (clientX: number, snap = false) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left;
      let pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
      if (snap) pct = applySnap(pct);
      paint(pct);
      return pct;
    },
    [applySnap, paint]
  );

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    containerRef.current?.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      updatePosition(e.clientX);
    });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    const final = updatePosition(e.clientX, true);
    if (final !== undefined) setPosition(final);
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  useEffect(() => {
    paint(position);
  }, [paint, position]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onKey = (e: KeyboardEvent) => {
      if (!el.contains(document.activeElement) && document.activeElement !== el) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setPosition((p) => Math.max(0, p - 2));
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setPosition((p) => Math.min(100, p + 2));
      }
    };

    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "slider");
    el.setAttribute("aria-label", alt);
    el.setAttribute("aria-valuemin", "0");
    el.setAttribute("aria-valuemax", "100");

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [alt]);

  useEffect(() => {
    containerRef.current?.setAttribute("aria-valuenow", String(Math.round(position)));
  }, [position]);

  return (
    <div
      ref={containerRef}
      data-cursor-label="DRAG"
      className={`relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/10] overflow-hidden bg-ink select-none touch-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-br focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${className} ${
        isDragging ? "cursor-grabbing" : "cursor-ew-resize"
      }`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <img
        src={afterSrc}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover object-center ${light ? "" : "img-reveal is-loaded"}`}
        draggable={false}
        loading="lazy"
        decoding="async"
      />
      <span className="absolute top-4 right-4 z-20 font-editorial text-[10px] font-semibold uppercase tracking-[0.2em] bg-red-br text-white px-3 py-1">
        {afterLabel}
      </span>

      <div
        ref={clipRef}
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover object-center ${light ? "" : "img-reveal is-loaded"}`}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
        <span className="absolute top-4 left-4 font-editorial text-[10px] font-semibold uppercase tracking-[0.2em] bg-ink/90 text-white px-3 py-1 border border-white/10">
          {beforeLabel}
        </span>
      </div>

      <div
        ref={handleRef}
        className="absolute top-0 bottom-0 z-30 w-0.5 bg-white will-change-[left]"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          transition: isDragging ? "none" : "left 0.2s ease-out",
        }}
        aria-hidden
      >
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 border border-white/40 bg-ink flex items-center justify-center ${
            position === SNAP_TARGET && !isDragging ? "scale-110 border-red-br" : ""
          }`}
        >
          <span className="font-editorial text-[8px] uppercase tracking-widest text-white/80">Drag</span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
