import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-2">
            WHO I <span className="text-gradient">AM</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center overflow-hidden border border-border">
              <span className="text-muted-foreground text-lg">Profile Photo Placeholder</span>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              I'm <span className="text-primary font-semibold">[Your Name]</span>, a hybrid athlete and online coach with a community of{" "}
              <span className="text-primary font-bold">400,000+</span> followers.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I built my physique naturally by combining calisthenics and bodybuilding—no steroids, no shortcuts, just smart training.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I've helped <span className="text-foreground font-semibold">50+ clients</span> transform their physiques in 12 weeks using the same system.
            </p>

            <p className="text-xl text-foreground font-medium">
              Now, I want to help <span className="text-primary">you</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
