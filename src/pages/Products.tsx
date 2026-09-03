import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import StickyApplyButton from "@/components/StickyApplyButton";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import ComingSoonProductModal from "@/components/ComingSoonProductModal";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import { ASSETS } from "@/lib/constants";
import EditorialPhoto from "@/components/EditorialPhoto";
import MaskedLines from "@/components/MaskedLines";
import { Check } from "lucide-react";

const Products = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.products;
  const blueprint = t.items[0];
  const checklist = t.items[1];
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProduct = t.items.find((item) => item.id === activeId) ?? null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-ink">
      <LanguageSelectorModal />
      <Header />
      <div className={`pt-28 md:pt-36 pb-4 container-tight px-4 sm:px-8 ${isRTL ? "text-right" : ""}`}>
        <div className="max-w-3xl mb-8 md:mb-10">
          <p className="font-editorial text-[10px] uppercase tracking-[0.28em] text-red-br mb-4">
            {t.comingSoon[language]}
          </p>
          <MaskedLines
            lines={
              language === "en"
                ? ["DIGITAL", "PRODUCTS"]
                : language === "fr"
                  ? ["PRODUITS", "DIGITAUX"]
                  : ["منتجات", "رقمية"]
            }
            lineClassName="text-4xl md:text-5xl lg:text-6xl"
            redWordIndex={language === "en" ? { line: 1, wordIndex: 0 } : undefined}
            rtlSafe={language === "ar"}
          />
          <p className="mt-4 font-editorial text-muted-foreground max-w-xl">{t.lead[language]}</p>
        </div>
      </div>

      <section className="section-padding pt-4">
        <div className="container-tight space-y-5">
          {[blueprint, checklist].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`w-full text-left border border-white/[0.08] hover:border-white/20 transition-colors grid lg:grid-cols-12 gap-0 overflow-hidden ${
                isRTL ? "text-right" : ""
              }`}
            >
              <div className={`lg:col-span-4 ${isRTL ? "lg:order-2" : ""}`}>
                <EditorialPhoto
                  src={item.id === "blueprint" ? ASSETS.productsHero : ASSETS.pathFreeTool}
                  fallbackSrc={ASSETS.heroFallback}
                  alt={item.title[language]}
                  warm
                  className="aspect-[4/3] lg:aspect-[4/5] w-full h-full"
                />
              </div>
              <div className={`lg:col-span-8 p-6 md:p-10 flex flex-col ${isRTL ? "lg:order-1" : ""}`}>
                <div className={`flex items-center gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <span className="font-editorial text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {item.tag[language]}
                  </span>
                  <span className="font-editorial text-[10px] uppercase tracking-[0.2em] text-red-br">
                    {t.comingSoon[language]}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl uppercase text-foreground mb-3">
                  {item.title[language]}
                </h2>
                <p className="font-editorial text-white/60 leading-relaxed mb-6">{item.details[language]}</p>
                <ul className="space-y-2.5 mb-8">
                  {item.bullets.slice(0, 3).map((bullet, i) => (
                    <li key={i} className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <Check className="w-4 h-4 text-red-br shrink-0 mt-0.5" />
                      <span className="font-editorial text-sm text-white/70">{bullet[language]}</span>
                    </li>
                  ))}
                </ul>
                <span className="font-editorial text-xs uppercase tracking-[0.16em] text-foreground">
                  {item.cta[language]} →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Footer />
      <StickyApplyButton />

      <ComingSoonProductModal
        product={activeProduct}
        open={!!activeId}
        onOpenChange={(open) => {
          if (!open) setActiveId(null);
        }}
      />
    </main>
  );
};

export default Products;
