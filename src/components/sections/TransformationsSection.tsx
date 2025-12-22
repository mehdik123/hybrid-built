import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const transformations = [
  {
    quote: "Lost 15 lbs and built visible abs in 12 weeks. Best investment I've made.",
    name: "Youssef, 28"
  },
  {
    quote: "Added 50 lbs to my bench and 30 lbs to my squat. My back is finally thick.",
    name: "Amine, 24"
  },
  {
    quote: "Learned how to train hybrid. Now I'm strong AND aesthetic.",
    name: "Mehdi, 31"
  }
];

const TransformationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const instagramDMLink = "https://instagram.com/direct/t/YOUR_USERNAME";

  return (
    <section id="transformations" className="section-padding" ref={ref}>
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            CLIENT <span className="text-gradient">TRANSFORMATIONS</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real People. Real Results.
          </p>
        </motion.div>

        {/* Transformation Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {transformations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Before/After Image Placeholder */}
                <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full bg-muted-foreground/10 flex items-center justify-center border-r border-border">
                      <span className="text-muted-foreground text-sm font-medium">BEFORE</span>
                    </div>
                    <div className="w-1/2 h-full bg-muted-foreground/5 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm font-medium">AFTER</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Quote */}
                <div className="p-6">
                  <Quote className="w-8 h-8 text-primary/50 mb-3" />
                  <p className="text-foreground italic mb-4 leading-relaxed">
                    "{item.quote}"
                  </p>
                  <p className="text-primary font-semibold">— {item.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              I Want Results Like This
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationsSection;
