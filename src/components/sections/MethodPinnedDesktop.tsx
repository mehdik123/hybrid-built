import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Language } from "@/lib/translations";

type MethodKey = "training" | "nutrition" | "support";

interface MethodRow {
  key: MethodKey;
  num: string;
  title: string;
  points: { en: string; ar: string; fr: string }[];
}

interface MethodPinnedDesktopProps {
  methodRows: MethodRow[];
  methodDetails: Record<MethodKey, { en: string; ar: string; fr: string }>;
  language: Language;
  isRTL: boolean;
}

const MethodPinnedDesktop = ({ methodRows, methodDetails, language, isRTL }: MethodPinnedDesktopProps) => {
  const pinRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.33) setActive(0);
    else if (v < 0.66) setActive(1);
    else setActive(2);
  });

  const activeRow = methodRows[active];

  return (
    <div ref={pinRef} className="relative h-[280vh]">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container-tight w-full grid grid-cols-12 gap-10 items-center">
          <div className={`col-span-4 space-y-2 ${isRTL ? "order-2 text-right" : ""}`}>
            {methodRows.map((row, i) => (
              <button
                key={row.num}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`relative w-full text-left p-5 border transition-colors ${
                  active === i ? "border-red-br bg-white/[0.03]" : "border-white/[0.06] hover:border-white/20"
                } ${isRTL ? "text-right" : ""}`}
              >
                {hoveredRow === i && (
                  <div
                    className="absolute inset-0 opacity-[0.15] bg-cover bg-center pointer-events-none"
                    style={{ backgroundImage: "url(/hero-placeholder.jpg)" }}
                  />
                )}
                <span
                  className={`font-display text-5xl transition-all duration-500 ${
                    active === i ? "text-red-br" : "text-white/20"
                  }`}
                >
                  {row.num}
                </span>
                <h3 className="font-display text-xl uppercase mt-1 relative z-10">{row.title}</h3>
              </button>
            ))}
          </div>

          <div className={`col-span-8 relative min-h-[320px] ${isRTL ? "order-1 text-right" : ""}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: isRTL ? -24 : 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? 24 : -24 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-display text-[8rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)] absolute -top-8 pointer-events-none">
                  {activeRow.num}
                </span>
                <h3 className="font-display text-4xl uppercase mb-6 relative z-10">{activeRow.title}</h3>
                <ul className="space-y-3 relative z-10">
                  {activeRow.points.map((point, pi) => (
                    <li
                      key={pi}
                      className={`flex gap-3 font-editorial text-base text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <span className="text-red-br shrink-0">·</span>
                      <span>{point[language]}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === active ? null : active)}
                  className="mt-6 font-editorial text-xs uppercase tracking-wider text-red-br flex items-center gap-2"
                >
                  {openAccordion === active ? "Less" : "More"}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === active ? "rotate-180" : ""}`} />
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-500 ease-expo"
                  style={{ maxHeight: openAccordion === active ? 120 : 0 }}
                >
                  <p className="font-editorial text-sm text-muted-foreground mt-3 leading-relaxed">
                    {methodDetails[activeRow.key][language]}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodPinnedDesktop;
