import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import ComingSoonProductModal from "@/components/ComingSoonProductModal";

const EntryProductsSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.products;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeProduct = t.items.find((item) => item.id === activeId) ?? null;

  return (
    <section id="products" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
      <div className="container-tight">
        <div className={`max-w-2xl mb-12 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-editorial text-[10px] uppercase tracking-[0.28em] text-red-br mb-4"
          >
            {t.eyebrow[language]}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="font-display text-3xl md:text-5xl uppercase leading-[1.08] text-foreground"
          >
            {t.title[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-4 font-editorial text-base text-white/55"
          >
            {t.lead[language]}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {t.items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className={`border border-white/[0.08] p-6 md:p-8 flex flex-col ${isRTL ? "text-right" : ""}`}
            >
              <div className={`flex items-center justify-between gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <span className="font-editorial text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {item.tag[language]}
                </span>
                <span className="font-editorial text-[10px] uppercase tracking-[0.18em] text-red-br border border-red-br/40 px-2 py-1">
                  {t.comingSoon[language]}
                </span>
              </div>
              <h3 className="font-display text-2xl uppercase text-foreground mb-3">{item.title[language]}</h3>
              <p className="font-editorial text-sm text-white/55 leading-relaxed flex-1 mb-8">
                {item.body[language]}
              </p>
              <button
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`inline-flex items-center gap-2 font-editorial text-xs uppercase tracking-[0.16em] text-foreground hover:text-red-br transition-colors ${
                  isRTL ? "flex-row-reverse self-end" : "self-start"
                }`}
              >
                {item.cta[language]}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ComingSoonProductModal
        product={activeProduct}
        open={!!activeId}
        onOpenChange={(open) => {
          if (!open) setActiveId(null);
        }}
      />
    </section>
  );
};

export default EntryProductsSection;
