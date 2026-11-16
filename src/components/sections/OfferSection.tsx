import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS, IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";

const OfferSection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.offer;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const openIndex = hovered ?? active;

  return (
    <section id="offer" className="relative bg-ink border-t border-white/[0.06] overflow-hidden" ref={ref}>
      <div className="grid lg:grid-cols-12 lg:min-h-[88vh]">
        {/* Oversized editorial — about-me.jpg */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className={`relative lg:col-span-5 min-h-[52vh] lg:min-h-full ${isRTL ? "lg:order-2" : ""}`}
        >
          <img
            src={ASSETS.offerEditorial}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
          />
          <div
            className="absolute inset-0 pointer-events-none lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, transparent 40%, rgba(17,17,17,0.85) 100%)",
            }}
          />
          <div
            className={`absolute inset-0 pointer-events-none hidden lg:block ${
              isRTL
                ? "bg-gradient-to-l from-ink via-ink/40 to-transparent"
                : "bg-gradient-to-r from-transparent via-ink/20 to-ink"
            }`}
          />
        </motion.div>

        <div
          className={`lg:col-span-7 section-padding flex flex-col justify-center ${
            isRTL ? "text-right lg:order-1" : ""
          }`}
        >
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-editorial text-[11px] uppercase tracking-[0.12em] text-red-br mb-3"
            >
              {t.eyebrow[language]}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.04 }}
              className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight text-foreground"
            >
              {t.title[language]}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="mt-5 font-editorial text-base text-white/55 leading-relaxed"
            >
              {t.valueLead[language]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.12 }}
              className="mt-4 font-editorial text-[11px] uppercase tracking-[0.18em] text-white/30 hidden md:block"
            >
              {language === "en"
                ? "Hover or click a line for details"
                : language === "fr"
                  ? "Survole ou clique pour les détails"
                  : "مرّر أو كليكي باش تشوف التفاصيل"}
            </motion.p>

            <ul className="relative mt-8 space-y-0">
              {t.included.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.li
                    key={item.title.en}
                    initial={{ opacity: 0, x: isRTL ? 18 : -18 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: Math.min(0.04 * i, 0.12), duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative border-b border-white/[0.08] last:border-b-0"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(i)}
                      onBlur={() => setHovered(null)}
                      className={`group relative w-full text-left transition-colors duration-300 ${
                        isRTL ? "text-right" : ""
                      }`}
                    >
                      <AnimatePresence>
                        {isOpen && (
                          <motion.span
                            layoutId="offer-active-bar"
                            className={`absolute top-0 bottom-0 w-[2px] bg-red-br ${
                              isRTL ? "right-0" : "left-0"
                            }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                      </AnimatePresence>

                      <div
                        className={`flex gap-4 md:gap-5 px-1 md:px-2 py-5 md:py-6 transition-colors duration-300 ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <motion.span
                          animate={{
                            color: isOpen ? "rgb(255, 45, 61)" : "rgba(255,255,255,0.35)",
                            scale: isOpen ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.25 }}
                          className="font-editorial text-xs shrink-0 pt-1 tracking-[0.18em]"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </motion.span>

                        <div className="min-w-0 flex-1">
                          <div className={`flex items-start justify-between gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                            <p
                              className={`font-display text-lg md:text-xl leading-snug transition-colors duration-300 ${
                                isOpen ? "text-foreground" : "text-white/70 group-hover:text-foreground"
                              }`}
                            >
                              {item.title[language]}
                            </p>
                            <motion.span
                              animate={{ rotate: isOpen ? 45 : 0, opacity: isOpen ? 1 : 0.35 }}
                              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                              className="font-display text-xl leading-none text-red-br shrink-0 mt-0.5"
                              aria-hidden
                            >
                              +
                            </motion.span>
                          </div>

                          <AnimatePresence initial={false} mode="wait">
                            {isOpen && (
                              <motion.div
                                key={`detail-${i}`}
                                initial={{ opacity: 0, height: 0, filter: "blur(4px)" }}
                                animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
                                exit={{ opacity: 0, height: 0, filter: "blur(4px)" }}
                                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <p className="font-editorial text-sm md:text-[15px] text-white/55 leading-relaxed pt-3 pb-1">
                                  {item.detail[language]}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.14 }}
              className="mt-8 flex flex-col gap-3"
            >
              <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
              <p className="font-editorial text-xs text-white/35">{t.priceNote[language]}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
