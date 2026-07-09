import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const CustomCursor = () => {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches && !reduced);
    const fn = () => setEnabled(mq.matches && !reduced);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [data-cursor-label], input, select, textarea");
      if (!interactive) {
        setHovering(false);
        setLabel(null);
        return;
      }
      setHovering(true);
      const custom = interactive.getAttribute("data-cursor-label");
      setLabel(custom);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.body.classList.add("custom-cursor-active");
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[200] pointer-events-none mix-blend-difference"
      animate={{
        x: pos.x - (label ? 36 : 10),
        y: pos.y - (label ? 36 : 10),
        width: label ? 72 : hovering ? 40 : 20,
        height: label ? 72 : hovering ? 40 : 20,
      }}
      transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.4 }}
    >
      <div className="w-full h-full rounded-full border border-white flex items-center justify-center">
        {label && (
          <span className="font-editorial text-[9px] uppercase tracking-widest text-white">{label}</span>
        )}
      </div>
    </motion.div>
  );
};

export default CustomCursor;
