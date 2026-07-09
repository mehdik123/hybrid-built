import { useLightMotion } from "@/hooks/useLightMotion";

/** Global film grain — static on mobile; animated SVG only on desktop */
const FilmGrain = () => {
  const light = useLightMotion();

  if (light) {
    return (
      <div
        className="film-grain pointer-events-none fixed inset-0 z-[100] opacity-[0.035] mix-blend-overlay"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    );
  }

  return (
    <div
      className="film-grain pointer-events-none fixed inset-0 z-[100] opacity-[0.045] mix-blend-overlay"
      aria-hidden
    >
      <svg className="absolute inset-0 h-full w-full">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch">
            <animate attributeName="seed" dur="1s" values="0;100" repeatCount="indefinite" />
          </feTurbulence>
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
};

export default FilmGrain;
