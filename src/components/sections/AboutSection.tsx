import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { ASSETS } from "@/lib/constants";
import EditorialPhoto from "@/components/EditorialPhoto";
import MaskedLines from "@/components/MaskedLines";
import CountUp from "@/components/motion/CountUp";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { language, isRTL } = useLanguage();
  const t = translations.about;

  return (
    <section id="about" className="section-paper section-padding overflow-hidden" ref={ref}>
      <div className="container-tight">
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start ${isRTL ? "rtl" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 ${isRTL ? "lg:order-2" : ""}`}
          >
            <EditorialPhoto
              src={ASSETS.aboutPortrait}
              fallbackSrc={ASSETS.heroFallback}
              alt="MEHDI"
              className="aspect-[4/3] w-full img-wipe"
              imgClassName="object-cover object-bottom"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`lg:col-span-6 space-y-6 ${isRTL ? "lg:order-1 text-right" : ""}`}
          >
            <MaskedLines
              lines={[t.title1[language], t.title2[language]]}
              lineClassName="text-4xl md:text-5xl lg:text-6xl text-ink"
              redWordIndex={{ line: 1, wordIndex: 0 }}
            />

            <p className="font-editorial text-lg md:text-xl text-ink leading-relaxed">{t.intro[language]}</p>

            <p className="font-editorial text-sm md:text-base text-ink/70 leading-relaxed">
              {t.description1[language]}
            </p>

            <blockquote
              className={`font-editorial text-base md:text-lg italic text-ink/80 border-red-br ${
                isRTL ? "border-r-2 pr-5" : "border-l-2 pl-5"
              }`}
            >
              "{t.description2[language]}"
            </blockquote>

            <div className="grid grid-cols-2 gap-px bg-black/10 max-w-sm">
              <div className="bg-paper p-5">
                <div className="font-display text-3xl text-ink">
                  <CountUp end={200} suffix="+" />
                </div>
                <p className="font-editorial text-xs uppercase tracking-wider text-ink/60 mt-1">
                  {t.clientsLabel[language]}
                </p>
              </div>
              <div className="bg-paper p-5">
                <div className="font-display text-3xl text-red-br">{t.naturalLabel[language]}</div>
                <p className="font-editorial text-xs uppercase tracking-wider text-ink/60 mt-1">
                  {language === "ar" ? "بلا اختصارات" : language === "fr" ? "sans shortcuts" : "no shortcuts"}
                </p>
              </div>
            </div>

            <p className="font-display text-2xl uppercase text-ink">{t.description5[language]}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
