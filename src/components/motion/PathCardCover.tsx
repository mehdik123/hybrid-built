import { useLightMotion } from "@/hooks/useLightMotion";

interface PathCardCoverProps {
  imageSrc: string;
  imageAlt: string;
  coverTag: string;
  index: string;
  objectPosition?: string;
  /** Mobile-specific crop — falls back to objectPosition */
  mobileObjectPosition?: string;
  hover?: boolean;
  pressed?: boolean;
}

/** Editorial cover — portrait thumb on mobile, full campaign frame on desktop */
const PathCardCover = ({
  imageSrc,
  imageAlt,
  coverTag,
  index,
  objectPosition = "center 38%",
  mobileObjectPosition,
  hover = false,
  pressed = false,
}: PathCardCoverProps) => {
  const light = useLightMotion();
  const mobilePos = mobileObjectPosition ?? objectPosition;

  const imageClasses = `absolute inset-0 z-[6] h-full w-full object-cover transition-transform duration-500 ease-out ${
    hover ? "scale-[1.05]" : pressed ? "scale-[1.02]" : "scale-100"
  }`;

  return (
    <>
      {/* ── MOBILE: portrait thumb + campaign strip ── */}
      <div className="flex md:hidden h-[148px] bg-black overflow-hidden">
        <div className="relative w-[42%] max-w-[160px] shrink-0 border-r border-white/[0.06] overflow-hidden bg-[#1a1a1a]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            style={{ objectPosition: mobilePos }}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-2 left-2 font-editorial text-[8px] font-semibold uppercase tracking-[0.2em] bg-red-br text-white px-1.5 py-0.5">
            {index}
          </span>
        </div>

        <div className="relative flex-1 min-w-0 bg-[#d4d0cb] overflow-hidden flex flex-col justify-end p-3">
          <p className="font-display uppercase text-red-br text-[1.75rem] leading-[0.8] tracking-[-0.02em] -mt-1">
            RESULTS,
          </p>
          <p className="font-display uppercase text-ink text-[0.65rem] tracking-[0.06em] -rotate-2 origin-left mt-1 opacity-90">
            NOT PROMISES
          </p>
          <p className="font-display uppercase text-ink text-[0.58rem] leading-tight bg-paper/90 px-1.5 py-0.5 border border-ink/10 mt-2 self-start max-w-full truncate">
            {coverTag}
          </p>
        </div>
      </div>

      {/* ── DESKTOP: full editorial frame ── */}
      <div className="relative w-full overflow-hidden bg-black hidden md:block aspect-[3/4] max-h-[min(72vw,400px)] lg:max-h-[440px]">
        <div className="absolute inset-y-0 left-0 w-[7%] bg-black z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[7%] bg-black z-20 pointer-events-none" />

        <div className="absolute inset-0 mx-[7%] overflow-hidden bg-[#d4d0cb]">
          <div
            className="absolute inset-0 z-[1] opacity-30 mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
            }}
          />

          <div className="absolute top-0 inset-x-0 z-[4] pointer-events-none select-none overflow-hidden leading-none">
            <p
              className="font-display uppercase text-red-br whitespace-nowrap pl-1"
              style={{
                fontSize: "clamp(3rem, 17vw, 7rem)",
                lineHeight: 0.82,
                letterSpacing: "-0.02em",
                transform: "translateY(-4%)",
              }}
            >
              RESULTS,
            </p>
          </div>

          <img
            src={imageSrc}
            alt=""
            aria-hidden
            className={`${imageClasses} ${!light && hover ? "md:scale-[1.06]" : ""}`}
            style={{ objectPosition }}
            loading="lazy"
            decoding="async"
          />

          <div className="absolute inset-x-0 bottom-0 h-[40%] z-[7] bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

          {!light && (
            <div
              className="absolute inset-0 z-[8] opacity-[0.1] mix-blend-overlay pointer-events-none hidden lg:block"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />
          )}

          <div
            className="absolute z-[10] pointer-events-none select-none"
            style={{
              top: "clamp(2.6rem, 13%, 4.2rem)",
              left: "clamp(0.5rem, 6%, 1.25rem)",
              transform: "rotate(-5deg)",
            }}
          >
            <p
              className="font-display uppercase text-ink leading-[0.95]"
              style={{ fontSize: "clamp(0.95rem, 4.2vw, 1.85rem)", letterSpacing: "0.03em" }}
            >
              NOT PROMISES
            </p>
          </div>

          <div
            className="absolute z-[12] pointer-events-none select-none"
            style={{
              top: "clamp(4.2rem, 21%, 6.2rem)",
              left: "clamp(0.25rem, 5%, 1rem)",
              transform: "rotate(-3deg)",
              maxWidth: "88%",
            }}
          >
            <p
              className="font-display uppercase text-ink leading-[0.9] bg-paper px-2 py-1 border border-ink/10 truncate"
              style={{ fontSize: "clamp(0.75rem, 3.2vw, 1.35rem)", letterSpacing: "0.04em" }}
            >
              {coverTag}
            </p>
          </div>

          <div className="absolute bottom-4 left-3 z-[15]">
            <span className="font-editorial text-[10px] font-semibold uppercase tracking-[0.25em] bg-red-br text-white px-2.5 py-1">
              {index}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PathCardCover;
