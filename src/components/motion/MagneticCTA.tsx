import { useEffect, useState, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticCTAProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

const MagneticCTA = ({
  href,
  children,
  className = "btn-primary-cta",
  external = true,
  onClick,
}: MagneticCTAProps) => {
  const reduced = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const x = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(my, { stiffness: 220, damping: 18, mass: 0.4 });

  const rxTarget = useTransform(py, [0, 1], [9, -9]);
  const ryTarget = useTransform(px, [0, 1], [-11, 11]);
  const glareXTarget = useTransform(px, [0, 1], [0, 100]);
  const glareYTarget = useTransform(py, [0, 1], [0, 100]);

  const rx = useSpring(rxTarget, { stiffness: 180, damping: 16 });
  const ry = useSpring(ryTarget, { stiffness: 180, damping: 16 });
  const glareX = useSpring(glareXTarget, { stiffness: 200, damping: 22 });
  const glareY = useSpring(glareYTarget, { stiffness: 200, damping: 22 });
  const glare = useMotionTemplate`radial-gradient(140px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.38), transparent 55%)`;

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsDesktop(mq.matches);
    const fn = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  const live = !reduced && isDesktop;

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!live) return;
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    px.set(nx);
    py.set(ny);
    mx.set((nx - 0.5) * r.width * 0.18);
    my.set((ny - 0.5) * r.height * 0.28);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${className} magnetic-btn relative isolate overflow-hidden [transform-style:preserve-3d]`}
      style={
        live
          ? {
              x,
              y,
              rotateX: rx,
              rotateY: ry,
              transformPerspective: 720,
            }
          : undefined
      }
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      whileHover={live ? { scale: 1.035 } : undefined}
      whileTap={{ scale: 0.965 }}
      transition={{ type: "spring", stiffness: 340, damping: 22 }}
    >
      {live && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] opacity-0 [.magnetic-btn:hover_&]:opacity-100"
          style={{
            background: glare,
            mixBlendMode: "soft-light",
            transition: "opacity 0.2s ease",
          }}
        />
      )}
      <span className="relative z-[2] inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
};

export default MagneticCTA;
