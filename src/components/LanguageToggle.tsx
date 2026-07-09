import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import type { Language } from "@/lib/translations";

const LANGUAGES: { code: Language; short: string; aria: string }[] = [
  { code: "en", short: "EN", aria: "English" },
  { code: "fr", short: "FR", aria: "Français" },
  { code: "ar", short: "ع", aria: "العربية" },
];

interface LanguageToggleProps {
  /** Unique id for layout animation scope */
  scope?: string;
  className?: string;
  size?: "sm" | "md";
}

const LanguageToggle = ({ scope = "global", className = "", size = "md" }: LanguageToggleProps) => {
  const { language, setLanguage, isRTL } = useLanguage();
  const pad = size === "sm" ? "px-2.5 py-1.5 min-h-[36px]" : "px-3.5 py-2 min-h-[40px]";
  const text = size === "sm" ? "text-[10px]" : "text-[11px]";

  return (
    <div
      className={`inline-flex items-stretch border border-white/[0.12] bg-ink/60 backdrop-blur-sm ${className} ${
        isRTL ? "flex-row-reverse" : ""
      }`}
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map((lang, i) => {
        const active = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            aria-label={lang.aria}
            aria-pressed={active}
            className={`relative font-editorial font-semibold uppercase tracking-[0.22em] ${pad} ${text} transition-colors touch-target ${
              i > 0 ? "border-l border-white/[0.08]" : ""
            } ${active ? "text-red-br" : "text-muted-foreground hover:text-foreground"}`}
          >
            {active && (
              <motion.span
                layoutId={`lang-active-${scope}`}
                className="absolute inset-x-0 bottom-0 h-[2px] bg-red-br"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <span className="relative z-10 font-display">{lang.short}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
