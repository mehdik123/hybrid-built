import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Dumbbell, Salad, MessageCircle, CalendarCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Dumbbell,
    title: "Custom Training Plan",
    description: "Built specifically for your experience level, goals, and equipment access. Updated weekly based on your progress."
  },
  {
    icon: Salad,
    title: "Personalized Nutrition System",
    description: "Your exact macros, meal plans (Moroccan & international options), and how to adjust based on results."
  },
  {
    icon: CalendarCheck,
    title: "Weekly Check-Ins",
    description: "Form reviews, progress analysis, and program adjustments. I keep you on track."
  },
  {
    icon: MessageCircle,
    title: "24/7 Messaging Access",
    description: "Questions answered within 24 hours. You're never stuck or confused."
  },
  {
    icon: ShieldCheck,
    title: "Accountability & Support",
    description: "I hold you accountable for 12 weeks. No excuses, just results."
  }
];

const whoIsFor = [
  "You're serious (no tire-kickers)",
  "You want expert guidance (not YouTube advice)",
  "You're ready to invest in yourself",
  "You'll commit for 12 weeks minimum"
];

const CoachingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const instagramDMLink = "https://instagram.com/direct/t/YOUR_USERNAME";

  return (
    <section id="coaching" className="section-padding bg-card" ref={ref}>
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            1-ON-1 <span className="text-gradient">ONLINE COACHING</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get a Custom Program Built for YOUR Body & Goals
          </p>
        </motion.div>

        {/* What You Get */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl md:text-3xl text-center text-primary mb-10">
            WHAT YOU GET:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:bg-secondary/70"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who This Is For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl text-center text-primary mb-8">
            WHO THIS IS FOR:
          </h3>
          <div className="space-y-4">
            {whoIsFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-10 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-secondary to-background border border-border"
        >
          <h3 className="font-display text-2xl md:text-3xl text-primary mb-6">
            INVESTMENT:
          </h3>
          <div className="mb-6">
            <span className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">$200</span>
            <span className="text-muted-foreground text-xl">/month</span>
          </div>
          <p className="text-muted-foreground mb-2">
            (12-week minimum commitment = $600 total)
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Payment plans available (ask in DM). Limited spots available each month.
          </p>

          <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              Message Me to Apply
            </Button>
          </a>

          <div className="mt-8 text-left max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-3">DM me on Instagram with:</p>
            <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
              <li>Your current stats (age, weight, training experience)</li>
              <li>Your goal (build muscle, lose fat, get shredded, etc.)</li>
              <li>When you want to start</li>
            </ol>
            <p className="text-sm text-foreground/70 mt-4">I'll respond within 24 hours and we'll see if it's a good fit.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingSection;
