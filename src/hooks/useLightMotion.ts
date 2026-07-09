import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * True on touch/coarse-pointer devices, narrow viewports, or reduced-motion.
 * Use to skip scroll-scrub, RAF loops, blur reveals, and other GPU-heavy effects.
 */
export const useLightMotion = () => {
  const reduced = useReducedMotion();
  const [light, setLight] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      reduced ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(max-width: 1023px)").matches
    );
  });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const narrow = window.matchMedia("(max-width: 1023px)");
    const update = () =>
      setLight(reduced || coarse.matches || narrow.matches);
    update();
    coarse.addEventListener("change", update);
    narrow.addEventListener("change", update);
    return () => {
      coarse.removeEventListener("change", update);
      narrow.removeEventListener("change", update);
    };
  }, [reduced]);

  return light;
};
