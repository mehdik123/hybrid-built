import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { language, isRTL } = useLanguage();
  const t = landing.faq;

  return (
    <section id="faq" className="section-padding bg-[#111111] relative overflow-hidden" ref={ref}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-br via-red-br/40 to-transparent"
      />

      <div className="container-tight max-w-3xl relative">
        <div className={`mb-10 md:mb-14 ${isRTL ? "text-right" : ""}`}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-editorial text-[10px] uppercase tracking-[0.28em] text-red-br mb-4"
          >
            {t.eyebrow[language]}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-3xl md:text-5xl uppercase leading-[1.08] text-foreground"
          >
            {t.title[language]}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08 }}
          className="bg-white/[0.03] border border-white/[0.08] px-5 md:px-7"
        >
          <Accordion type="single" collapsible className="space-y-0">
            {t.items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/[0.08] last:border-b-0 px-0"
              >
                <AccordionTrigger
                  className={`text-foreground hover:text-red-br py-5 md:py-6 text-base md:text-lg font-editorial ${
                    isRTL ? "text-right flex-row-reverse" : "text-left"
                  }`}
                >
                  {faq.question[language]}
                </AccordionTrigger>
                <AccordionContent
                  className={`text-white/55 pb-6 text-sm md:text-base leading-relaxed ${
                    isRTL ? "text-right" : ""
                  }`}
                >
                  {faq.answer[language]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
