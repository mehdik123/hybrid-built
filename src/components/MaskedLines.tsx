import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLightMotion } from "@/hooks/useLightMotion";

interface MaskedLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
  redWordIndex?: { line: number; wordIndex: number };
  /** Fire when element enters viewport (default true for scroll reveals) */
  inView?: boolean;
}

const MaskedLines = ({
  lines,
  className = "",
  lineClassName = "",
  stagger = 130,
  redWordIndex,
  inView: useInViewTrigger = true,
}: MaskedLinesProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const light = useLightMotion();
  const [visible, setVisible] = useState(!useInViewTrigger || reduced || light);

  useEffect(() => {
    if (!useInViewTrigger || reduced || light) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "-40px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [useInViewTrigger, reduced, light]);

  const renderLine = (text: string, lineIdx: number) => {
    if (!redWordIndex || redWordIndex.line !== lineIdx) return text;
    const words = text.split(" ");
    return words.map((word, wi) => (
      <span key={wi}>
        {wi > 0 && " "}
        <span className={wi === redWordIndex.wordIndex ? "text-red-br" : undefined}>{word}</span>
      </span>
    ));
  };

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="line overflow-hidden">
          <span
            className={`in block font-display uppercase leading-[0.85] tracking-[0.006em] ${lineClassName} ${
              visible ? (light ? "line-in-fast" : "line-in") : ""
            }`}
            style={{ transitionDelay: visible ? `${i * stagger}ms` : "0ms" }}
          >
            {renderLine(line, i)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MaskedLines;
