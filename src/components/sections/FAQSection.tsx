import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import PrimaryCTA from "@/components/PrimaryCTA";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language, isRTL } = useLanguage();
  const t = translations.faq;

  return (
    <section id="faq" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container-tight max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            {t.title1[language]} <span className="text-red-br">{t.title2[language]}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {t.items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/80 border border-border px-6 data-[state=open]:border-red-br/40 transition-colors duration-200"
                data-cursor-label="OPEN"
              >
                <AccordionTrigger
                  className={`text-foreground hover:text-primary py-5 text-base md:text-lg font-medium ${
                    isRTL ? "text-right flex-row-reverse" : "text-left"
                  }`}
                >
                  {faq.question[language]}
                </AccordionTrigger>
                <AccordionContent
                  className={`text-muted-foreground pb-5 text-base leading-relaxed ${isRTL ? "text-right" : ""}`}
                >
                  {faq.answer[language]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-14"
        >
          <PrimaryCTA className="inline-flex flex-col items-center" showFriction={false} />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
