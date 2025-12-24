import { motion } from "framer-motion";
import { Play, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/AppContext";

const VideoTestimonialSection = () => {
    const { language, isRTL } = useAppContext();
    const reelUrl = "https://www.instagram.com/reel/DPBtPxbjILV/?igsh=MXcweGh2NWZiZmZiNA==";

    const content = {
        en: {
            title: "Real Results.",
            subtitle: "Watch the transformation journey of one of our elite athletes.",
            cta: "WATCH FULL TESTIMONIAL",
            clientName: "Client Success Story",
            tag: "LIVE TESTIMONIAL"
        },
        ar: {
            title: "نتائج حقيقية.",
            subtitle: "شاهد رحلة التحول لأحد رياضيينا النخبة.",
            cta: "شاهد الشهادة كاملة",
            clientName: "قصة نجاح متدرب",
            tag: "شهادة مباشرة"
        }
    };

    const t = content[language as keyof typeof content];

    return (
        <section className="section-padding bg-black/50 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-tight relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        {t.tag}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-6xl mb-4"
                    >
                        {t.title} <span className="text-gradient font-black">UNBREAKABLE.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-2xl mx-auto aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden border border-border group"
                >
                    {/* Video Placeholder/Cover */}
                    <div className="absolute inset-0 bg-muted flex items-center justify-center">
                        <img
                            src="/testimonial-cover.jpg"
                            alt="Testimonial Cover"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop";
                            }}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    </div>

                    {/* Interaction Layer */}
                    <a
                        href={reelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                    >
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/50 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-current translate-x-1" />
                        </div>

                        <div className="mt-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <Button variant="cta" size="lg" className="gap-2">
                                <Instagram className="w-5 h-5" />
                                {t.cta}
                                <ExternalLink className="w-4 h-4" />
                            </Button>
                        </div>
                    </a>

                    {/* Client Branding */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                        <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                            <span className="text-white font-bold text-sm md:text-base">{t.clientName}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoTestimonialSection;
