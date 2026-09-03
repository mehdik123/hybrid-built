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
    <section id="faq" className="section-padding bg-ink border-t border-white/[0.06]" ref={ref}>
      <div className="container-tight max-w-3xl">
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
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08 }}
        >
          <Accordion type="single" collapsible className="space-y-0">
            {t.items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-t border-white/[0.08] px-0 data-[state=open]:border-white/[0.08]"
              >
                <AccordionTrigger
                  className={`text-foreground hover:text-red-br py-5 text-base md:text-lg font-editorial ${
                    isRTL ? "text-right flex-row-reverse" : "text-left"
                  }`}
                >
                  {faq.question[language]}
                </AccordionTrigger>
                <AccordionContent
                  className={`text-white/55 pb-6 text-sm md:text-base leading-relaxed ${isRTL ? "text-right" : ""}`}
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
