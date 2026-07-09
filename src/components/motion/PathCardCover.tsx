import { useLightMotion } from "@/hooks/useLightMotion";

interface PathCardCoverProps {
  imageSrc: string;
  imageAlt: string;
  coverTag: string;
  index: string;
  objectPosition?: string;
  hover?: boolean;
}

/** Editorial cover — letterboxed frame, RESULTS headline, tilted product tag */
const PathCardCover = ({
  imageSrc,
  imageAlt,
  coverTag,
  index,
  objectPosition = "center 38%",
  hover = false,
}: PathCardCoverProps) => {
  const light = useLightMotion();

  return (
  <div className="relative w-full overflow-hidden bg-black aspect-[3/4] max-h-[min(92vw,480px)] sm:max-h-[520px]">
    {/* Side letterbox bars */}
    <div className="absolute inset-y-0 left-0 w-[7%] bg-black z-20 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-[7%] bg-black z-20 pointer-events-none" />

    {/* Inner frame */}
    <div className="absolute inset-0 mx-[7%] overflow-hidden bg-[#d4d0cb]">
      {/* Paper texture */}
      <div
        className="absolute inset-0 z-[1] opacity-40 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      {/* Red headline — subject overlaps lower edge */}
      <div className="absolute top-0 inset-x-0 z-[4] pointer-events-none select-none overflow-hidden leading-none">
        <p
          className="font-display uppercase text-red-br whitespace-nowrap pl-1"
          style={{
            fontSize: "clamp(3.2rem, 17vw, 7rem)",
            lineHeight: 0.82,
            letterSpacing: "-0.02em",
            transform: "translateY(-4%)",
          }}
        >
          RESULTS,
        </p>
      </div>

      {/* Photo sits above red text lower portion */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`absolute inset-0 z-[6] h-full w-full object-cover ${
          light ? "" : `transition-transform duration-700 ease-expo ${hover ? "scale-[1.06]" : "scale-100"}`
        }`}
        style={{ objectPosition }}
        loading="eager"
        decoding="async"
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] z-[7] bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

      {!light && (
        <div
          className="absolute inset-0 z-[8] opacity-[0.12] mix-blend-overlay pointer-events-none hidden md:block"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* NOT PROMISES — campaign line over red */}
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

      {/* Product tag — tilted stamp */}
      <div
        className="absolute z-[12] pointer-events-none select-none"
        style={{
          top: "clamp(4.2rem, 21%, 6.2rem)",
          left: "clamp(0.25rem, 5%, 1rem)",
          transform: "rotate(-3deg)",
        }}
      >
        <p
          className="font-display uppercase text-ink leading-[0.9] bg-paper px-2 py-1 border border-ink/10"
          style={{ fontSize: "clamp(0.75rem, 3.2vw, 1.35rem)", letterSpacing: "0.04em" }}
        >
          {coverTag}
        </p>
      </div>

      {/* Index badge */}
      <div className="absolute bottom-4 left-3 z-[15] flex items-center gap-2">
        <span className="font-editorial text-[10px] font-semibold uppercase tracking-[0.25em] bg-red-br text-white px-2.5 py-1">
          {index}
        </span>
      </div>
    </div>
  </div>
  );
};

export default PathCardCover;
