import { useEffect, useState } from "react";
import { ArrowUpRight, Check, MessageCircle, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import {
  GUMROAD_HYBRID_CHECKOUT_URL,
  IG_DM_URL,
  IG_HYBRID_TRANSFER_DM_URL,
} from "@/lib/constants";

type ProductItem = (typeof landing.products.items)[number];

interface ComingSoonProductModalProps {
  product: ProductItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ComingSoonProductModal = ({ product, open, onOpenChange }: ComingSoonProductModalProps) => {
  const { language, isRTL } = useLanguage();
  const [payMode, setPayMode] = useState<"card" | "transfer">("card");

  useEffect(() => {
    if (!open) setPayMode("card");
  }, [open]);

  if (!product) return null;

  const checkoutUrl =
    "checkoutUrl" in product && typeof product.checkoutUrl === "string" && product.checkoutUrl
      ? product.checkoutUrl
      : product.kind === "paid"
        ? GUMROAD_HYBRID_CHECKOUT_URL
        : IG_DM_URL;
  const gallery =
    "gallery" in product && Array.isArray(product.gallery) ? product.gallery : [];
  const disclaimer =
    "disclaimer" in product && product.disclaimer ? product.disclaimer[language] : null;
  const checkoutNote =
    "checkoutNote" in product && product.checkoutNote ? product.checkoutNote[language] : null;
  const priceNote =
    "priceNote" in product && product.priceNote ? product.priceNote[language] : null;
  const isPaid = product.kind === "paid";

  const labels = {
    payCard:
      language === "ar" ? "خلص بالبطاقة" : language === "fr" ? "Payer par carte" : "Pay by card",
    payTransfer:
      language === "ar"
        ? "خلاص بالـ virement"
        : language === "fr"
          ? "Payer par virement"
          : "Pay by transfer",
    transferHint:
      language === "ar"
        ? "صيفط ليا فـ Instagram. غادي نعطيك تفاصيل الـ virement، ومن بعد الخلاص كنحل ليك الـ access."
        : language === "fr"
          ? "Écris-moi sur Instagram. Je t’envoie les infos de virement, puis je débloque l’accès après paiement."
          : "Message me on Instagram. I’ll send the transfer details, then unlock access after you pay.",
    dmTransfer:
      language === "ar"
        ? "صيفط ليا DM للـ virement"
        : language === "fr"
          ? "DM pour le virement"
          : "Message me for transfer details",
    cardNote:
      language === "ar"
        ? "خلاص فوري فـ Gumroad. Access من بعد الدفع."
        : language === "fr"
          ? "Paiement Gumroad. Accès après paiement."
          : "Gumroad checkout. Access after payment.",
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`max-w-[92vw] sm:max-w-md bg-[#161616] border border-white/[0.08] p-0 gap-0 overflow-hidden z-[100] rounded-2xl [&>button]:hidden ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <div className="relative flex flex-col max-h-[88vh]">
          <div className="relative flex-1 overflow-y-auto px-5 pt-5 pb-4 md:px-6 md:pt-6">
            <DialogClose
              className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} rounded-full p-2 text-white/55 hover:text-white transition-colors`}
            >
              <X className="w-4 h-4" />
            </DialogClose>

            <p className="font-editorial text-[11px] tracking-[0.04em] text-red-br mb-3 pr-10">
              {product.tag[language]}
            </p>
            <DialogTitle className="font-display text-[1.5rem] md:text-[1.75rem] text-white leading-[1.15] tracking-tight pr-8">
              {product.title[language]}
            </DialogTitle>

            <p className="mt-4 font-editorial text-sm text-white/70 leading-relaxed">
              {product.details[language]}
            </p>

            {gallery.length > 0 && (
              <div className={`mt-5 flex gap-2 overflow-x-auto pb-1 ${isRTL ? "flex-row-reverse" : ""}`}>
                {gallery.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-44 w-auto shrink-0 rounded-xl border border-white/10 object-cover object-top"
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            <ul className="mt-5 space-y-2.5">
              {product.bullets.map((bullet, i) => (
                <li key={i} className={`flex gap-2.5 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Check className="w-4 h-4 text-red-br shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-editorial text-sm text-white/65 leading-snug">
                    {bullet[language]}
                  </span>
                </li>
              ))}
            </ul>

            {disclaimer && (
              <>
                <div className="mt-5 border-t border-white/10" />
                <p className="mt-4 font-editorial text-xs text-white/40 leading-relaxed">
                  {disclaimer}
                </p>
              </>
            )}
          </div>

          <div className="shrink-0 border-t border-white/10 bg-[#161616] px-5 py-4 md:px-6">
            <div className={`flex items-end justify-between gap-4 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className={isRTL ? "text-right" : ""}>
                <p className="font-display text-2xl text-white leading-none">{product.price[language]}</p>
                {priceNote && (
                  <p className="mt-1 font-editorial text-[11px] text-white/40">{priceNote}</p>
                )}
              </div>
            </div>

            {isPaid ? (
              <>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setPayMode("card")}
                    className={`font-editorial text-xs py-2.5 px-2 rounded-full border transition-colors ${
                      payMode === "card"
                        ? "border-red-br bg-red-br/10 text-white"
                        : "border-white/15 text-white/50 hover:text-white/80"
                    }`}
                  >
                    {labels.payCard}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayMode("transfer")}
                    className={`font-editorial text-xs py-2.5 px-2 rounded-full border transition-colors ${
                      payMode === "transfer"
                        ? "border-red-br bg-red-br/10 text-white"
                        : "border-white/15 text-white/50 hover:text-white/80"
                    }`}
                  >
                    {labels.payTransfer}
                  </button>
                </div>

                {payMode === "card" ? (
                  <>
                    <a
                      href={checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 bg-red-br hover:bg-red-br/90 text-white font-editorial text-sm font-medium px-5 py-3.5 rounded-full transition-colors ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      {product.cta[language]}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <p className="mt-3 font-editorial text-[10px] text-white/30 leading-relaxed">
                      {checkoutNote || labels.cardNote}
                    </p>
                  </>
                ) : (
                  <div className="space-y-3">
                    <p className="font-editorial text-sm text-white/55 leading-relaxed">
                      {labels.transferHint}
                    </p>
                    <a
                      href={IG_HYBRID_TRANSFER_DM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 bg-red-br hover:bg-red-br/90 text-white font-editorial text-sm font-medium px-5 py-3.5 rounded-full transition-colors ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      {labels.dmTransfer}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </>
            ) : (
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 bg-red-br hover:bg-red-br/90 text-white font-editorial text-sm font-medium px-5 py-3.5 rounded-full transition-colors ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                {product.cta[language]}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonProductModal;
