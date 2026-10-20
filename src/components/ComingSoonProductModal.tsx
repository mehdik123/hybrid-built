import { Check, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import { GUMROAD_HYBRID_CHECKOUT_URL, IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";

type ProductItem = (typeof landing.products.items)[number];

interface ComingSoonProductModalProps {
  product: ProductItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ComingSoonProductModal = ({ product, open, onOpenChange }: ComingSoonProductModalProps) => {
  const { language, isRTL } = useLanguage();

  if (!product) return null;

  const hasDiscount = Boolean(product.compareAt[language]);
  const checkoutUrl =
    "checkoutUrl" in product && typeof product.checkoutUrl === "string" && product.checkoutUrl
      ? product.checkoutUrl
      : product.kind === "paid"
        ? GUMROAD_HYBRID_CHECKOUT_URL
        : IG_DM_URL;
  const gallery =
    "gallery" in product && Array.isArray(product.gallery) ? product.gallery : [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`max-w-[92vw] sm:max-w-lg bg-ink border border-white/[0.12] p-0 gap-0 overflow-hidden z-[100] [&>button]:hidden ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <div className="relative p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          <DialogClose
            className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} rounded-full border border-white/15 p-2 text-white/70 hover:text-white hover:border-white/35 transition-colors`}
          >
            <X className="w-4 h-4" />
          </DialogClose>

          <p className="font-editorial text-[10px] uppercase tracking-[0.22em] text-red-br mb-2">
            {product.tag[language]}
          </p>
          <DialogTitle className="font-display text-2xl md:text-3xl uppercase text-foreground leading-[1.15] pr-10">
            {product.title[language]}
          </DialogTitle>

          {"languages" in product && product.languages && (
            <p className="mt-3 font-editorial text-[11px] uppercase tracking-[0.14em] text-red-br">
              {product.languages[language]}
            </p>
          )}

          <div className={`mt-4 flex items-baseline gap-3 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
            <span className="font-display text-3xl text-foreground">{product.price[language]}</span>
            {hasDiscount && (
              <span className="font-editorial text-lg text-white/40 line-through">
                {product.compareAt[language]}
              </span>
            )}
          </div>

          <p className="mt-4 font-editorial text-sm md:text-base text-white/70 leading-relaxed">
            {product.details[language]}
          </p>

          {gallery.length > 0 && (
            <div className="mt-6">
              <p className="font-editorial text-[10px] uppercase tracking-[0.22em] text-white/40 mb-3">
                {language === "en"
                  ? "Inside the app"
                  : language === "fr"
                    ? "Dans l’app"
                    : "داخل الـ app"}
              </p>
              <div className={`flex gap-2.5 overflow-x-auto pb-1 ${isRTL ? "flex-row-reverse" : ""}`}>
                {gallery.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-52 w-auto shrink-0 rounded-lg border border-white/10 object-cover object-top"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}

          <p className="mt-6 font-editorial text-[10px] uppercase tracking-[0.22em] text-white/40 mb-3">
            {language === "en" ? "What’s inside" : language === "fr" ? "Ce qui est dedans" : "المحتوى"}
          </p>
          <ul className="space-y-3">
            {product.bullets.map((bullet, i) => (
              <li key={i} className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Check className="w-4 h-4 text-red-br shrink-0 mt-0.5" />
                <span className="font-editorial text-sm text-white/65 leading-relaxed">
                  {bullet[language]}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <MagneticCTA href={checkoutUrl}>{product.cta[language]}</MagneticCTA>
            {product.kind === "paid" && (
              <p className="mt-3 font-editorial text-xs text-white/35">
                {language === "en"
                  ? "Opens Gumroad checkout. Instant access after payment."
                  : language === "fr"
                    ? "Ouvre le paiement Gumroad. Accès immédiat après paiement."
                    : "كيحل صفحة الخلاص فـ Gumroad. Access فوري من بعد الخلاص."}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonProductModal;
