import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const VSLSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const instagramDMLink = "https://ig.me/m/unbreakablesteam?text=Just%20watched%20your%20VSL!%20I'd%20love%20to%20know%20more%20about%20working%20together!";
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
                        {language === "ar" ? "شاهد قصة" : "Watch My"}{" "}
                        <span className="text-gradient">
                            {language === "ar" ? "التحول" : "Transformation Story"}
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {language === "ar"
                            ? "اكتشف كيف يمكنني مساعدتك في تحقيق جسم أحلامك في 12 أسبوعًا فقط"
                            : "Discover how I can help you achieve your dream physique in just 12 weeks"}
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative max-w-5xl mx-auto mb-8"
                >
                    {/* Video Wrapper with premium styling */}
                    <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                        {/* Aspect ratio container */}
                        <div className="aspect-video bg-black">
                            {/* YouTube/Vimeo Embed or self-hosted video */}
                            <iframe
                                className="w-full h-full"
                                src={videoEmbedUrl}
                                title="Video Sales Letter"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            {/* Alternative: Self-hosted video */}
                            {/* <video
                controls
                className="w-full h-full"
                poster="/vsl-thumbnail.jpg"
              >
                <source src="/vsl-video.mp4" type="video/mp4" />
              </video> */}
                        </div>

                        {/* Decorative glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary to-primary opacity-20 blur-xl -z-10" />
                    </div>
                </motion.div>

                {/* CTA Below Video */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-lg text-foreground/80 mb-6">
                        {language === "ar"
                            ? "جاهز للبدء في رحلة التحول الخاصة بك؟"
                            : "Ready to start your transformation journey?"}
                    </p>
                    <a href={instagramDMLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="hero" size="xl" className="group">
                            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                            {language === "ar" ? "تحدث معي الآن" : "Message Me Now"}
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default VSLSection;

