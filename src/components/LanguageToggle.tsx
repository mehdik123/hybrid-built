import { useLanguage } from "@/contexts/AppContext";
import type { Language } from "@/lib/translations";

const LANGUAGES: { code: Language; short: string; aria: string }[] = [
  { code: "en", short: "EN", aria: "English" },
  { code: "fr", short: "FR", aria: "Français" },
  { code: "ar", short: "AR", aria: "العربية" },
];

interface LanguageToggleProps {
  scope?: string;
  className?: string;
  size?: "sm" | "md";
}

const LanguageToggle = ({ className = "", size = "md" }: LanguageToggleProps) => {
  const { language, setLanguage, isRTL } = useLanguage();
  const gap = size === "sm" ? "gap-3" : "gap-4";
  const text = size === "sm" ? "text-[11px]" : "text-xs";

  return (
    <div
      className={`inline-flex items-center ${gap} ${className} ${isRTL ? "flex-row-reverse" : ""}`}
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map((lang) => {
        const active = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            aria-label={lang.aria}
            aria-pressed={active}
            className={`font-editorial uppercase tracking-[0.18em] transition-colors touch-target py-1 ${text} ${
              active ? "text-white" : "text-white/40 hover:text-white/75"
            }`}
          >
            {lang.short}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
