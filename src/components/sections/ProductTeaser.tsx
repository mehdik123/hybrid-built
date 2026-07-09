import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const ProductTeaser = () => {
  const { language, isRTL } = useLanguage();
  const t = translations.productTeaser;

  return (
    <section className="section-paper section-padding !py-10 md:!py-12 border-y border-black/[0.08]">
      <div className="container-tight">
        <div
          className={`flex flex-col md:flex-row md:items-center justify-between gap-8 ${isRTL ? "md:flex-row-reverse text-right" : ""}`}
        >
          <div className="max-w-md">
            <p className="font-editorial text-[10px] uppercase tracking-[0.25em] text-red-br mb-2">
              {t.subtitle[language]}
            </p>
            <h2 className="font-display text-2xl md:text-3xl uppercase leading-tight text-ink">
              {t.title[language]}
            </h2>
          </div>

          <div className={`flex flex-col sm:flex-row gap-6 sm:gap-10 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <div>
              <span className="font-editorial text-[10px] uppercase tracking-wider text-ink/50 block mb-1">
                {t.blueprintDesc[language]}
              </span>
              <span className="font-display text-lg uppercase text-ink">{t.blueprintTitle[language]}</span>
            </div>
            <div>
              <span className="font-editorial text-[10px] uppercase tracking-wider text-ink/50 block mb-1">
                {t.freeDesc[language]}
              </span>
              <span className="font-display text-lg uppercase text-ink">{t.freeTitle[language]}</span>
            </div>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-editorial text-xs font-semibold uppercase tracking-[0.15em] text-ink hover:text-red-br transition-colors shrink-0"
          >
            {t.cta[language]}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductTeaser;
