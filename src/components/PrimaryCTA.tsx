import { Instagram, ArrowRight } from "lucide-react";
import { IG_DM_URL, CTA_PRIMARY_EN, CTA_FRICTION_EN } from "@/lib/constants";
import { useLanguage } from "@/contexts/AppContext";
import MagneticCTA from "@/components/motion/MagneticCTA";

interface PrimaryCTAProps {
  className?: string;
  showFriction?: boolean;
}

const PrimaryCTA = ({ className = "", showFriction = true }: PrimaryCTAProps) => {
  const { language } = useLanguage();
  const label =
    language === "en"
      ? CTA_PRIMARY_EN
      : language === "fr"
        ? "Postuler au coaching"
        : "قدّم للكوتشينغ";

  return (
    <div className={className}>
      <MagneticCTA href={IG_DM_URL} className="btn-primary-cta w-full sm:w-auto inline-flex items-center gap-2">
        <Instagram className="w-5 h-5" />
        {label}
        <ArrowRight className="w-4 h-4 cta-arrow" />
      </MagneticCTA>
      {showFriction && language === "en" && (
        <p className="mt-3 text-xs text-muted-foreground font-editorial tracking-wide">
          {CTA_FRICTION_EN}
        </p>
      )}
    </div>
  );
};

export default PrimaryCTA;
