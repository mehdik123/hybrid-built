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
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-6 uppercase tracking-tight">
                        {t.title1[language]} <span className="text-primary">{t.title2[language]}</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
                        {t.subtitle[language]}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Tool 1: 1RM Calculator (Interactive) */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <OneRepMaxCalculator />
                    </motion.div>

                    {/* Tool 2: Split Finder (External) */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col"
                    >
                        <div className="bg-secondary/30 border border-white/5 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center group hover:border-primary/20 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <Layout className="w-8 h-8 text-primary" />
                            </div>

                            <h4 className="text-2xl font-black uppercase tracking-tight mb-4">
                                {t.splitFinder.title[language]}
                            </h4>
                            <p className="text-muted-foreground mb-10 max-w-sm text-lg leading-relaxed">
                                {t.splitFinder.desc[language]}
                            </p>

                            <EmailCaptureModal source="split_finder">
                                <Button size="xxl" variant="hero" className="w-full font-black uppercase tracking-widest py-8 transform transition-transform active:scale-95 shadow-xl shadow-primary/20 flex items-center justify-center gap-3 cursor-pointer">
                                    {t.splitFinder.button[language]}
                                    <ExternalLink className="w-5 h-5" />
                                </Button>
                            </EmailCaptureModal>

                            <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary/60">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                {language === 'en' ? "Instant Access" : "وصول فوري"}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FreeToolsSection;
