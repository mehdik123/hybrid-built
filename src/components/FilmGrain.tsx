/** Global film grain — fixed SVG feTurbulence overlay */
const FilmGrain = () => (
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

export default FilmGrain;
