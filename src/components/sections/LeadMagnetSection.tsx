import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailCaptureModal from "@/components/EmailCaptureModal";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const LeadMagnetSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { language, isRTL } = useLanguage();
    const t = translations.products;

    const freeDownloadLink = "https://ig.me/m/unbreakablesteam?text=Hey!%20I'm%20interested%20in%20the%20free%20starter%20guide.%20Can%20you%20send%20it%20to%20me%3F";

    return (
        <section id="lead-magnet" className="section-padding bg-secondary/5" ref={ref}>
            <div className="container-tight">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className={`bg-card border-2 border-accent/20 rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-500 ${isRTL ? 'text-right' : ''} flex flex-col md:flex-row`}
                    >
                        {/* Image/Icon Side */}
                        <div className="md:w-2/5 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center p-12 min-h-[300px]">
                            <div className="relative">
                                <Gift className="w-32 h-32 text-accent/40" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 4 }}
                                    >
                                        <Gift className="w-16 h-16 text-accent" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                            <div className={`inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                                <Gift className="w-4 h-4" />
                                {t.free[language]}
                            </div>

                            <h3 className="font-display text-4xl text-foreground mb-4 uppercase tracking-tight">
                                {t.freeTitle[language]}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                                {t.freeDescription[language]}
                            </p>

                            <div className="mb-8">
                                <ul className="space-y-3">
                                    <li className={`flex items-start gap-3 text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span>{language === "ar" ? "خطة تمارين هجينة (علوي/سفلي)" : "Complete Hybrid Starter Routine"}</span>
                                    </li>
                                    <li className={`flex items-start gap-3 text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span>{language === "ar" ? "دليل الماكروز الأساسي" : "The Core Hybrid Macro Guide"}</span>
                                    </li>
                                    <li className={`flex items-start gap-3 text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span>{language === "ar" ? "قائمة تسوق للمحترفين" : "Elite Performance Grocery List"}</span>
                                    </li>
                                </ul>
                            </div>

                            <EmailCaptureModal source="free_guide">
                                <Button size="xxl" className="w-full bg-accent hover:bg-accent/80 text-accent-foreground font-black text-lg uppercase tracking-widest py-8 transform transition-transform active:scale-95 shadow-xl shadow-accent/20 cursor-pointer">
                                    {t.joinWaitlist[language]}
                                </Button>
                            </EmailCaptureModal>
                            <p className="text-center text-muted-foreground text-sm mt-4 italic">
                                {language === 'en' ? "Join the list - Limited spots." : "انضم للقائمة - أماكن محدودة."}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LeadMagnetSection;
