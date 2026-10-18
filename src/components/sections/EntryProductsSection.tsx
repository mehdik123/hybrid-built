import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import ComingSoonProductModal from "@/components/ComingSoonProductModal";
import EmailCaptureModal from "@/components/EmailCaptureModal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { IG_DM_URL } from "@/lib/constants";

const EntryProductsSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.products;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [paidId, setPaidId] = useState<string | null>(null);

  const paidProduct = t.items.find((item) => item.id === paidId) ?? null;
  const blueprint = t.items.find((i) => i.id === "blueprint")!;
  const split = t.items.find((i) => i.id === "split")!;

  return (
    <section id="products" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
      <div className="container-tight">
        <div className={`max-w-2xl mb-10 md:mb-14 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
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
            transition={{ delay: 0.04 }}
            className="font-display text-4xl md:text-5xl uppercase leading-[1.05] text-foreground"
          >
            {t.title[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="mt-4 font-editorial text-base text-white/55 max-w-lg"
          >
            {t.lead[language]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-3 font-editorial text-sm text-red-br"
          >
            {t.languagesNote[language]}
          </motion.p>
        </div>

        <div
          className={`flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:overflow-visible ${
            isRTL ? "flex-row-reverse md:flex-row" : ""
          }`}
        >
          {/* Hybrid Training Program */}
          <motion.button
            type="button"
            onClick={() => setPaidId(blueprint.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="group relative shrink-0 w-[78vw] max-w-[380px] md:w-auto md:max-w-none snap-center aspect-[3/4] overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-br"
          >
            <img
              src={blueprint.cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.82) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col p-5 md:p-7">
              <div className={`flex items-start justify-between gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <h3 className="font-display text-2xl md:text-3xl uppercase text-white leading-[0.95] max-w-[14ch]">
                  {blueprint.shortTitle[language]}
                </h3>
                <span className="bg-red-br text-white font-editorial text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 shrink-0">
                  {blueprint.tag[language]}
                </span>
              </div>

              <p className="mt-3 font-editorial text-[11px] uppercase tracking-[0.14em] text-white/90 border border-white/35 px-2.5 py-1.5 w-fit">
                {blueprint.languages[language]}
              </p>

              <p className="mt-auto mb-4 font-editorial text-sm text-white/85 leading-relaxed max-w-[95%]">
                {blueprint.body[language]}
              </p>

              <div className={`mb-4 flex items-baseline gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <span className="font-display text-3xl text-white">{blueprint.price[language]}</span>
                <span className="font-editorial text-base text-white/45 line-through">
                  {blueprint.compareAt[language]}
                </span>
              </div>

              <div className={`flex items-center justify-between gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <span className="bg-white text-ink font-editorial text-[10px] uppercase tracking-[0.14em] px-3 py-1.5">
                  {blueprint.level[language]}
                </span>
                <span className="bg-white text-ink font-editorial text-[10px] uppercase tracking-[0.14em] px-3 py-1.5">
                  {blueprint.duration[language]}
                </span>
              </div>
            </div>
          </motion.button>

          {/* Split Finder */}
          <EmailCaptureModal source="split-finder">
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 }}
              className="group relative shrink-0 w-[78vw] max-w-[380px] md:w-auto md:max-w-none snap-center aspect-[3/4] overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-br"
            >
              <img
                src={split.cover}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.82) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col p-5 md:p-7">
                <div className={`flex items-start justify-between gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <h3 className="font-display text-3xl md:text-4xl uppercase text-white leading-[0.95]">
                    {split.shortTitle[language]}
                  </h3>
                  <span className="bg-white text-ink font-editorial text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 shrink-0">
                    {split.tag[language]}
                  </span>
                </div>

                <p className="mt-auto mb-4 font-editorial text-sm text-white/85 leading-relaxed max-w-[95%]">
                  {split.body[language]}
                </p>

                <p className="mb-4 font-display text-2xl text-white">{split.price[language]}</p>

                <div className={`flex items-center justify-between gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <span className="bg-white text-ink font-editorial text-[10px] uppercase tracking-[0.14em] px-3 py-1.5">
                    {split.level[language]}
                  </span>
                  <span className="bg-white text-ink font-editorial text-[10px] uppercase tracking-[0.14em] px-3 py-1.5">
                    {split.cta[language]}
                  </span>
                </div>
              </div>
            </motion.button>
          </EmailCaptureModal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.28 }}
          className="mt-10 flex justify-center"
        >
          <MagneticCTA href={IG_DM_URL}>
            {language === "en"
              ? "Questions? DM me"
              : language === "fr"
                ? "Des questions ? DM moi"
                : "أسئلة؟ صيفط ليا DM"}
          </MagneticCTA>
        </motion.div>
      </div>

      <ComingSoonProductModal
        product={paidProduct}
        open={!!paidProduct}
        onOpenChange={(open) => {
          if (!open) setPaidId(null);
        }}
      />
    </section>
  );
};

export default EntryProductsSection;
