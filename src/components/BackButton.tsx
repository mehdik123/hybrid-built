import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

interface BackButtonProps {
  className?: string;
}

/** Inline back link — same style as Hybrid Blueprint / Products page */
const BackButton = ({ className = "mb-6 md:mb-8" }: BackButtonProps) => {
  const location = useLocation();
  const { language, isRTL } = useLanguage();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 text-red-br font-editorial font-semibold uppercase tracking-[0.2em] text-xs hover:opacity-80 transition-opacity group ${isRTL ? "flex-row-reverse" : ""} ${className}`}
    >
      <ArrowLeft
        className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${isRTL ? "rotate-180 group-hover:translate-x-1" : ""}`}
      />
      {translations.nav.backToHome[language]}
    </Link>
  );
};

export default BackButton;
