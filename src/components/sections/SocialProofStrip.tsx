import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { useCountUp } from "@/hooks/useCountUp";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.8a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.82a4.84 4.84 0 0 1-1-.13z" />
  </svg>
);

const STATS = [
  {
    end: 534,
    decimals: 0,
    suffix: "K",
    label: { en: "Instagram", ar: "Instagram", fr: "Instagram" },
    icon: "ig" as const,
  },
  {
    end: 267.7,
    decimals: 1,
    suffix: "K",
    label: { en: "TikTok", ar: "TikTok", fr: "TikTok" },
    icon: "tt" as const,
  },
  {
    end: 3.6,
    decimals: 1,
    suffix: "K",
    label: { en: "Coaching", ar: "Coaching", fr: "Coaching" },
    icon: "ig" as const,
  },
];

const SocialProofStrip = () => {
  const { language, isRTL } = useLanguage();
  const ref = useCountUp([language]);

  const line =
    language === "ar"
      ? "مئات الآلاف كيتبعو الخدمة ديالنا."
      : language === "fr"
        ? "Des centaines de milliers suivent le travail."
        : "Hundreds of thousands follow the work.";

  return (
    <section
      ref={ref}
      className="relative border-y border-white/[0.08] bg-ink"
      aria-label={line}
    >
      <div className={`md:hidden px-5 py-4 ${isRTL ? "text-right" : ""}`}>
        <p className="font-editorial text-[11px] text-white/45 mb-3 leading-snug">{line}</p>
        <div
          className={`flex items-stretch justify-between gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label.en}
              className="flex-1 min-w-0 text-center border border-white/10 px-1.5 py-2"
            >
              <p
                data-count
                data-end={stat.end}
                data-decimals={stat.decimals}
                data-suffix={stat.suffix}
                className="font-impact text-[1.35rem] leading-none text-white tracking-wide"
              >
                0{stat.suffix}
              </p>
              <div
                className={`mt-1.5 flex items-center justify-center gap-1 text-white/50 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                {stat.icon === "tt" ? (
                  <TikTokIcon className="h-2.5 w-2.5 shrink-0" />
                ) : (
                  <Instagram className="h-2.5 w-2.5 shrink-0" strokeWidth={1.75} />
                )}
                <span className="font-editorial text-[9px] uppercase tracking-[0.08em] truncate">
                  {stat.label[language]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`hidden md:block container-tight px-10 py-16 lg:px-14 ${isRTL ? "text-right" : ""}`}>
        <p className="font-editorial text-sm text-white/50 mb-10 max-w-md">{line}</p>
        <div className="grid grid-cols-3 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label.en}>
              <p
                data-count
                data-end={stat.end}
                data-decimals={stat.decimals}
                data-suffix={stat.suffix}
                className="mega-type text-[clamp(3.5rem,8vw,6.5rem)] text-white leading-none"
              >
                0{stat.suffix}
              </p>
              <div
                className={`mt-3 flex items-center gap-2 text-red-br ${
                  isRTL ? "flex-row-reverse justify-end" : ""
                }`}
              >
                {stat.icon === "tt" ? (
                  <TikTokIcon className="h-4 w-4" />
                ) : (
                  <Instagram className="h-4 w-4" strokeWidth={1.75} />
                )}
                <span className="font-editorial text-xs uppercase tracking-[0.18em]">
                  {stat.label[language]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
