import { useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
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
  isRTL?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  as?: "button" | "div";
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
  isRTL,
  onClick,
  children,
  as = "button",
}: PathCardProps) => {
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLButtonElement | HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !cardRef.current || as === "div") return;
    const r = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -4, y: px * 4 });
  };

  const sharedClass = `path-card group w-full text-left border bg-[#0d0d0d] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-br path-card-draw ${
    hover ? "is-hovered" : ""
  } ${isRTL ? "text-right" : ""}`;

  const sharedStyle =
    reduced || as === "div"
      ? undefined
      : { transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` };

  const body = (
    <>
      <PathCardCover
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        coverTag={coverTag}
        index={index}
        objectPosition={objectPosition}
        hover={hover}
      />
      <div className="p-6 md:p-8 border-t border-red-br/20">
        <h2 className="font-display text-3xl md:text-4xl uppercase leading-[0.9] mb-2">{title}</h2>
        <p className="font-editorial text-sm text-muted-foreground mb-5">{desc}</p>
        {children}
        {cta && (
          <span className="inline-flex items-center gap-2 font-editorial text-xs font-semibold uppercase tracking-[0.2em] text-red-br group-hover:gap-3 transition-all">
            {cta}
            <ArrowRight className="w-4 h-4 cta-arrow" />
          </span>
        )}
      </div>
    </>
  );

  if (as === "div") {
    return (
      <div
        ref={cardRef as React.RefObject<HTMLDivElement>}
        className={sharedClass}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {body}
      </div>
    );
  }

  return (
    <button
      ref={cardRef as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setTilt({ x: 0, y: 0 });
      }}
      onMouseMove={onMove}
      style={sharedStyle}
      className={sharedClass}
    >
      {body}
    </button>
  );
};

export default PathCard;
