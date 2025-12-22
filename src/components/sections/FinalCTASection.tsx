import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "10-20 lbs leaner or heavier (depending on goal)",
  "Significantly stronger (PRs on all lifts)",
  "Confident in your training and nutrition",
  "Looking in the mirror and loving what you see"
];

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const instagramDMLink = "https://instagram.com/direct/t/YOUR_USERNAME";

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-8">
            READY TO <span className="text-gradient">TRANSFORM</span>?
          </h2>

          <div className="text-lg md:text-xl text-muted-foreground space-y-2 mb-8">
            <p>You've seen the results.</p>
            <p>You know what you'll get.</p>
            <p className="text-foreground font-medium">Now it's time to decide.</p>
          </div>

          <div className="text-left max-w-md mx-auto mb-8 space-y-4">
            <p className="text-foreground text-lg font-medium text-center mb-4">
              12 weeks from now, you could be:
            </p>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground mb-10 text-lg">
            Or you could still be guessing, wasting time on random programs.
            <br />
            <span className="text-foreground font-semibold">The choice is yours.</span>
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xxl" className="mb-4">
                Message Me Now
              </Button>
            </a>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              DM me <span className="text-primary font-semibold">'COACHING'</span> on Instagram.
              <br />
              Let's build something great. <Dumbbell className="w-5 h-5 text-primary" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
