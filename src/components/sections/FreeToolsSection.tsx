import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layout } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import OneRepMaxCalculator from "@/components/OneRepMaxCalculator";
import EmailCaptureModal from "@/components/EmailCaptureModal";

const FreeToolsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { language, isRTL } = useLanguage();
    const t = translations.tools;

    return (
        <section id="tools" className="section-padding bg-background relative overflow-hidden" ref={ref}>
            {/* Subtle background decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-6 uppercase tracking-tight">
                        {t.title1[language]} <span className="text-primary">{t.title2[language]}</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
                        {t.subtitle[language]}
                    </p>
                    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                </motion.div>

                <div className="flex justify-center">
                    {/* Tool 1: 1RM Calculator (Interactive) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                        className="w-full max-w-2xl"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-primary/40 via-primary/10 to-primary/40 opacity-40 group-hover:opacity-90 blur-xl transition-opacity duration-700" />
                            <div className="relative rounded-[26px] bg-foreground/70 backdrop-blur-2xl border border-background/10 group-hover:border-primary/40 transition-colors duration-500 shadow-[0_24px_80px_rgba(0,0,0,0.75)]">
                                <OneRepMaxCalculator />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FreeToolsSection;
