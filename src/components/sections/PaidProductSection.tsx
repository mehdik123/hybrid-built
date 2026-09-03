import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import PaidProductInfoModal from "@/components/PaidProductInfoModal";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { ASSETS } from "@/lib/constants";
import EditorialPhoto from "@/components/EditorialPhoto";

const PaidProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { language, isRTL } = useLanguage();
  const t = translations.products;

  return (
    <section id="paid-product" className="section-padding bg-ink" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-start border border-white/[0.08] ${isRTL ? "text-right" : ""}`}
        >
          <div className={`lg:col-span-5 ${isRTL ? "lg:order-2" : ""}`}>
            <EditorialPhoto
              src={ASSETS.productsHero}
              fallbackSrc={ASSETS.heroFallback}
              alt="Hybrid Physique Blueprint"
              warm
              className="aspect-[4/5] w-full"
            />
          </div>

          <div className={`lg:col-span-7 p-6 md:p-10 ${isRTL ? "lg:order-1" : ""}`}>
            <p className="font-editorial text-[10px] uppercase tracking-[0.25em] text-red-br mb-3">
              {language === "en" ? "Digital product" : language === "fr" ? "Produit digital" : "منتج رقمي"}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.9] mb-4">
              {t.paidTitle[language]}
            </h2>
            <p className="font-editorial text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              {t.paidDescription[language]}
            </p>

            <p className="font-editorial text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {t.includes[language]}
            </p>
            <ul className="space-y-3 mb-10">
              {t.features.map((feature, index) => (
                <li key={index} className={`flex gap-3 font-editorial text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Check className="w-4 h-4 text-red-br shrink-0 mt-0.5" />
                  <span>{feature[language]}</span>
                </li>
              ))}
            </ul>

            <PaidProductInfoModal>
              <button type="button" className="btn-primary-cta w-full sm:w-auto">
                {t.paidButton[language]}
              </button>
            </PaidProductInfoModal>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaidProductSection;
