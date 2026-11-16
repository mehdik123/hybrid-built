import { useEffect, useRef } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

export type CountTarget = {
  /** Numeric value to animate toward */
  end: number;
  /** Decimal places while counting (0 = integer) */
  decimals?: number;
  /** Appended after the number, e.g. "K" or "K+" */
  suffix?: string;
};

/** Format a counted value the same way on every frame */
export const formatCount = (value: number, decimals = 0, suffix = "") => {
  const n = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  return `${n}${suffix}`;
};

/**
 * Animate elements matching [data-count] from 0 → target when the container enters view.
 * Each element needs data-end, optional data-decimals, data-suffix.
 */
export const useCountUp = (deps: unknown[] = []) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const nodes = root.querySelectorAll<HTMLElement>("[data-count]");
    if (!nodes.length) return;

    const reduced = prefersReducedMotion();
    if (reduced) {
      nodes.forEach((node) => {
        const end = Number(node.dataset.end ?? 0);
        const decimals = Number(node.dataset.decimals ?? 0);
        const suffix = node.dataset.suffix ?? "";
        node.textContent = formatCount(end, decimals, suffix);
      });
      return;
    }

    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      nodes.forEach((node) => {
        const end = Number(node.dataset.end ?? 0);
        const decimals = Number(node.dataset.decimals ?? 0);
        const suffix = node.dataset.suffix ?? "";
        const state = { val: 0 };
        node.textContent = formatCount(0, decimals, suffix);

        gsap.to(state, {
          val: end,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            node.textContent = formatCount(state.val, decimals, suffix);
          },
        });
      });
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
};
