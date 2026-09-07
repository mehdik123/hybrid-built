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
    <section id="products" className="relative overflow-hidden bg-ink" ref={ref}>
      {/* Loud visual break from paper offer */}
      <div className="bg-red-br px-5 py-3 md:px-10">
        <div className="container-tight">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className={`font-editorial text-[10px] md:text-xs uppercase tracking-[0.28em] text-white font-semibold ${
              isRTL ? "text-right" : ""
            }`}
          >
            {t.eyebrow[language]}
          </motion.p>
        </div>
      </div>

      <div className="section-padding relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />

        <div className="container-tight relative">
          <div className={`max-w-3xl mb-12 md:mb-16 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-6xl uppercase leading-[1.05] text-foreground"
            >
              {t.title[language]}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 }}
              className="mt-5 font-editorial text-base md:text-lg text-white/60 max-w-xl"
            >
              {t.lead[language]}
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 md:gap-6">
            {t.items.map((item, i) => {
              const isFree = item.id === "checklist";
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.14 + i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative text-left overflow-hidden p-7 md:p-9 min-h-[280px] md:min-h-[320px] flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                    isFree
                      ? "bg-paper text-ink"
                      : "bg-white/[0.03] border border-white/15 text-foreground"
                  } ${isRTL ? "text-right" : ""}`}
                >
                  <div className={`flex items-start justify-between gap-3 mb-8 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div>
                      <p
                        className={`font-editorial text-[10px] uppercase tracking-[0.22em] mb-2 ${
                          isFree ? "text-ink/45" : "text-white/40"
                        }`}
                      >
                        {item.pathLabel[language]}
                      </p>
                      <span
                        className={`inline-block font-editorial text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 ${
                          isFree
                            ? "bg-ink text-paper"
                            : "bg-red-br text-white"
                        }`}
                      >
                        {item.tag[language]}
                      </span>
                    </div>
                    <span
                      className={`font-editorial text-[10px] uppercase tracking-[0.16em] ${
                        isFree ? "text-red-br" : "text-red-br"
                      }`}
                    >
                      {t.comingSoon[language]}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-2xl md:text-4xl uppercase leading-[1.05] mb-4 ${
                      isFree ? "text-ink" : "text-foreground"
                    }`}
                  >
                    {item.title[language]}
                  </h3>
                  <p
                    className={`font-editorial text-sm md:text-base leading-relaxed flex-1 mb-8 ${
                      isFree ? "text-ink/60" : "text-white/55"
                    }`}
                  >
                    {item.body[language]}
                  </p>

                  <span
                    className={`inline-flex items-center gap-2 font-editorial text-xs uppercase tracking-[0.16em] transition-colors ${
                      isFree
                        ? "text-ink group-hover:text-red-br"
                        : "text-white group-hover:text-red-br"
                    } ${isRTL ? "flex-row-reverse self-end" : "self-start"}`}
                  >
                    {item.cta[language]}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>

                  <motion.span
                    aria-hidden
                    className={`pointer-events-none absolute -bottom-8 ${
                      isRTL ? "-left-6" : "-right-6"
                    } font-display text-[7rem] md:text-[9rem] leading-none opacity-[0.06] ${
                      isFree ? "text-ink" : "text-white"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 0.06, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
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
