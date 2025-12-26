import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/AppContext";

const VSLSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const instagramDMLink = "https://ig.me/m/unbreakablesteam?text=HYBRID";
    const { language, isRTL } = useLanguage();

    // Replace with your actual YouTube/Vimeo video ID or self-hosted video
    const videoEmbedUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID";

    return (
        <section id="vsl" className="section-padding bg-background" ref={ref}>
            <div className="container-tight">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
                        {language === "ar" ? "شاهد" : "Watch The"}{" "}
                        <span className="text-gradient">
                            {language === "ar" ? "المنهجية" : "Methodology"}
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {language === "ar"
                            ? "اكتشف كيف نبني القوة والشكل الرياضي في وقت واحد"
                            : "Discover exactly how we build elite strength and aesthetics simultaneously"}
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative max-w-5xl mx-auto mb-12"
                >
                    {/* Video Wrapper with premium styling */}
                    <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/30 group">
                        {/* Aspect ratio container */}
                        <div className="aspect-video bg-black/40 backdrop-blur-xl flex items-center justify-center">
                            {/* YouTube/Vimeo Embed or self-hosted video */}
                            <iframe
                                className="w-full h-full"
                                src={videoEmbedUrl}
                                title="The Hybrid Method"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Decorative glow effect */}
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                </motion.div>

                {/* CTA Below Video */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center max-w-2xl mx-auto bg-card/30 border border-white/5 p-8 rounded-2xl"
                >
                    <p className="text-xl text-foreground font-semibold mb-6">
                        {language === "ar"
                            ? "هل المنهجية مناسبة لك؟ دعنا نكتشف ذلك."
                            : "Is this methodology right for you? Let's find out."}
                    </p>
                    <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
                        <Button size="xxl" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-black text-lg uppercase tracking-widest px-12 py-8 transform transition-transform active:scale-95 shadow-xl shadow-primary/20">
                            {language === "ar" ? "راسلني 'HYBRID'" : "DM ME 'HYBRID'"}
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default VSLSection;

