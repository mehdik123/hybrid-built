import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS, IG_DM_URL } from "@/lib/constants";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { landing } from "@/content/coachingLanding";

const FinalCTASection = () => {
  const { language, isRTL } = useLanguage();
  const t = landing.finalCta;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="final-cta"
      className="relative min-h-[70vh] md:min-h-[78vh] flex items-end overflow-hidden border-t border-white/[0.06]"
      ref={ref}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={ASSETS.finalCtaBg}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
        />
      </motion.div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,17,17,0.35) 0%, rgba(17,17,17,0.2) 35%, rgba(17,17,17,0.75) 70%, rgba(17,17,17,0.96) 100%)",
        }}
      />

      <div className={`relative z-10 w-full section-padding ${isRTL ? "text-right" : "text-left"}`}>
        <div className={`container-tight max-w-2xl ${isRTL ? "mr-0 ml-auto" : ""}`}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight text-white"
          >
            {t.title[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="mt-5 font-editorial text-base md:text-lg text-white/70 leading-relaxed max-w-lg"
          >
            {t.body[language]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className={`mt-9 flex flex-col gap-4 ${isRTL ? "items-end" : "items-start"}`}
          >
            <MagneticCTA href={IG_DM_URL}>{t.cta[language]}</MagneticCTA>
            <a
              href="#products"
              className="font-editorial text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              {t.secondary[language]}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
