import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.8a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.82a4.84 4.84 0 0 1-1-.13z" />
  </svg>
);

const STATS = [
  { value: "534K", label: { en: "Instagram", ar: "Instagram", fr: "Instagram" }, icon: "ig" as const },
  { value: "267.7K", label: { en: "TikTok", ar: "TikTok", fr: "TikTok" }, icon: "tt" as const },
  { value: "3.6K", label: { en: "Coaching", ar: "Coaching", fr: "Coaching" }, icon: "ig" as const },
];

const SocialProofStrip = () => {
  const { language, isRTL } = useLanguage();

  const line =
    language === "ar"
      ? "مئات الآلاف كيتبعو الخدمة ديالنا."
      : language === "fr"
        ? "Des centaines de milliers suivent le travail."
        : "Hundreds of thousands follow the work.";

  return (
    <section
      className="border-t border-white/[0.06] bg-ink"
      aria-label={line}
    >
      <div className={`container-tight px-5 py-10 md:px-10 md:py-14 ${isRTL ? "text-right" : ""}`}>
        <p className="font-editorial text-sm md:text-[15px] text-white/70 mb-8 md:mb-10">
          {line}
        </p>

        <div className="grid grid-cols-3 divide-x divide-white/15">
          {STATS.map((stat) => (
            <div
              key={stat.value + stat.label.en}
              className={`flex flex-col items-center justify-center px-2 sm:px-4 ${
                isRTL ? "first:border-l-0" : ""
              }`}
            >
              <p className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] uppercase tracking-tight text-white leading-none">
                {stat.value}
              </p>
              <div
                className={`mt-3 md:mt-4 flex items-center gap-1.5 text-white/75 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                {stat.icon === "tt" ? (
                  <TikTokIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                ) : (
                  <Instagram className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={1.75} />
                )}
                <span className="font-editorial text-[11px] md:text-sm tracking-wide">
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
