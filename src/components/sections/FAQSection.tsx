import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How does online coaching work?",
    answer: "We communicate through Instagram or WhatsApp. You get a custom plan, check in weekly with progress updates, and I adjust everything based on your results. It's like having me in your pocket 24/7."
  },
  {
    question: "Do I need a gym?",
    answer: "Ideally yes, but I can work with home setups (pull-up bar, dip station, minimal equipment). Tell me what you have and I'll build around it."
  },
  {
    question: "What if I'm a beginner?",
    answer: "Perfect. I work with all levels—beginners to advanced. Your program will be tailored to YOUR experience."
  },
  {
    question: "Can I see results in 12 weeks?",
    answer: "Yes, if you follow the plan. Most clients see significant changes in 8-12 weeks (visible muscle, fat loss, strength gains)."
  },
  {
    question: "What if I travel or miss workouts?",
    answer: "Life happens. I adjust your plan when needed. The goal is consistency over perfection."
  },
  {
    question: "Payment plans?",
    answer: "Yes, message me and we'll work it out."
  },
  {
    question: "How many clients do you take?",
    answer: "Limited spots (5-10 per month) to give everyone quality attention. If spots are full, I'll add you to the waitlist."
  }
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const instagramDMLink = "https://instagram.com/direct/t/YOUR_USERNAME";

  return (
    <section id="faq" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-tight max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              Apply Now
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
