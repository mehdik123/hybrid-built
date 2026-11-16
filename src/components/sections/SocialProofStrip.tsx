import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

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
  const ref = useRef<HTMLElement>(null);

  const line =
    language === "ar"
      ? "مئات الآلاف كيتبعو الخدمة ديالنا."
      : language === "fr"
        ? "Des centaines de milliers suivent le travail."
        : "Hundreds of thousands follow the work.";

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-stat]"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [language]);

  return (
    <section
      ref={ref}
      className="relative border-y border-white/[0.08] bg-ink overflow-hidden"
      aria-label={line}
    >
      <p
        aria-hidden
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 mega-type text-white/[0.04] whitespace-nowrap ${
          isRTL ? "right-0" : "left-0"
        } text-[clamp(4rem,18vw,14rem)]`}
      >
        UNBREAKABLES
      </p>
      <div className={`container-tight px-5 py-16 md:px-10 md:py-24 ${isRTL ? "text-right" : ""}`}>
        <p className="font-editorial text-sm md:text-base text-white/55 mb-12 md:mb-16 max-w-md">
          {line}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.value + stat.label.en}
              data-stat
              className={`${isRTL ? "sm:text-right" : ""}`}
            >
              <p className="mega-type text-[clamp(3.5rem,10vw,7rem)] text-white leading-none">
                {stat.value}
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
