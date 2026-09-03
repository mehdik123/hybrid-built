import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLightMotion } from "@/hooks/useLightMotion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import PathCardCover from "@/components/motion/PathCardCover";

interface PathCardProps {
  imageSrc: string;
  imageAlt: string;
  coverTag: string;
  index: string;
  title: string;
  desc: string;
  cta?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
  isRTL?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  as?: "button" | "div";
  compact?: boolean;
  /** Stagger index for entrance animation */
  animIndex?: number;
}

const PathCard = ({
  imageSrc,
  imageAlt,
  coverTag,
  index,
  title,
  desc,
  cta,
  objectPosition,
  mobileObjectPosition,
  isRTL,
  onClick,
  children,
  as = "button",
  compact = false,
  animIndex = 0,
}: PathCardProps) => {
  const light = useLightMotion();
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLButtonElement | HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (light || !cardRef.current || as === "div") return;
    const r = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -4, y: px * 4 });
  };

  const sharedClass = `path-card group w-full text-left border bg-[#0d0d0d] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-br path-card-draw ${
    hover && !light ? "is-hovered" : ""
  } ${pressed ? "is-pressed" : ""} ${isRTL ? "text-right" : ""} ${light ? "path-card-static" : ""}`;

  const sharedStyle =
    light || as === "div"
      ? undefined
      : { transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` };

  const bodyPadding = compact ? "p-3 md:p-6" : "p-4 md:p-8";
  const titleSize = compact ? "text-lg md:text-3xl" : "text-xl md:text-4xl";

  const body = (
    <>
      <PathCardCover
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        coverTag={coverTag}
        index={index}
        objectPosition={objectPosition}
        mobileObjectPosition={mobileObjectPosition}
        hover={hover && !light}
        pressed={pressed}
      />
      <div className={`${bodyPadding} border-t border-red-br/15`}>
        <div className={`flex items-start justify-between gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="min-w-0 flex-1">
            <h2 className={`font-display ${titleSize} uppercase leading-[0.92] mb-0.5 md:mb-2`}>{title}</h2>
            <p className="font-editorial text-[11px] md:text-sm text-muted-foreground leading-snug">{desc}</p>
          </div>
        </div>
        {children && <div className="mt-3 md:mt-4">{children}</div>}
        {cta && as === "button" && (
          <span className="mt-2 inline-flex font-editorial text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] text-red-br md:gap-2 md:items-center group-active:gap-2 transition-all">
            <span className="hidden md:inline">{cta}</span>
            <span className="md:hidden">{cta} →</span>
            <ArrowRight className="hidden md:inline w-4 h-4 cta-arrow" />
          </span>
        )}
      </div>
    </>
  );

  const motionProps = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.45,
          delay: animIndex * 0.08,
          ease: [0.16, 1, 0.3, 1] as any,
        },
        whileTap: as === "button" ? { scale: 0.985 } : undefined,
      };

  const touchHandlers = {
    onTouchStart: () => setPressed(true),
    onTouchEnd: () => setPressed(false),
    onTouchCancel: () => setPressed(false),
  };

  if (as === "div") {
    return (
      <motion.div
        ref={cardRef as React.RefObject<HTMLDivElement>}
        className={sharedClass}
        {...motionProps}
      >
        {body}
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={cardRef as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseEnter={() => !light && setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setTilt({ x: 0, y: 0 });
      }}
      onMouseMove={onMove}
      style={sharedStyle}
      className={sharedClass}
      {...motionProps}
      {...touchHandlers}
    >
      {body}
    </motion.button>
  );
};

export default PathCard;
