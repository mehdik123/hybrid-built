import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const PaidProductSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { language, isRTL } = useLanguage();
    const t = translations.products;

    const paidProductLink = "https://ig.me/m/unbreakablesteam?text=Hi!%20I'm%20interested%20in%20the%20Hybrid%20Physique%20Blueprint%20for%20%2415.%20Can%20you%20share%20more%20details%3F";

    return (
        <section id="paid-product" className="section-padding bg-background" ref={ref}>
            <div className="container-tight">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className={`bg-gradient-to-br from-primary/10 via-card to-background border-2 border-primary/50 rounded-3xl overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 relative ${isRTL ? 'text-right' : ''} flex flex-col md:flex-row-reverse`}
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary to-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity -z-10" />

                        {/* Image/Price Side */}
                        <div className="md:w-2/5 bg-gradient-to-br from-primary/30 to-primary/10 flex flex-col items-center justify-center p-12 min-h-[300px] relative">
                            <div className="relative">
                                <Zap className="w-32 h-32 text-primary/40" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    >
                                        <Zap className="w-16 h-16 text-primary fill-primary" />
                                    </motion.div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-black text-3xl shadow-xl mb-2">
                                    $15
                                </div>
                                <div className="text-white/40 line-through text-lg">
                                    {t.originalPrice[language]}
                                </div>
                            </div>

                            <div className="absolute top-4 left-4 right-4 flex justify-between">
                                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-2 animate-pulse uppercase tracking-tighter">
                                    <Clock className="w-3 h-3" />
                                    {t.limitedTime[language]}
                                </div>
                                <div className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
                                    {t.discountText[language]}
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="font-display text-4xl text-foreground mb-4 uppercase tracking-tight">
                                {t.paidTitle[language]}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                                {t.paidDescription[language]}
                            </p>

                            <div className="mb-8">
                                <p className="font-black text-primary mb-4 text-xs uppercase tracking-[0.2em]">{t.includes[language]}</p>
                                <ul className="grid grid-cols-1 gap-3">
                                    {t.features.map((feature, index) => (
                                        <li key={index} className={`flex items-start gap-3 text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium">{feature[language]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a href={paidProductLink} target="_blank" rel="noopener noreferrer" className="block">
                                <Button size="xxl" variant="hero" className="w-full font-black text-lg uppercase tracking-widest py-8 transform transition-transform active:scale-95 shadow-xl shadow-primary/40">
                                    {t.paidButton[language]}
                                </Button>
                            </a>
                            <p className="text-center text-muted-foreground text-xs mt-4 uppercase tracking-widest opacity-50">
                                {language === 'en' ? "NO SUBSCRIPTION - ONE TIME PAYMENT" : "بدون اشتراك - دفع لمرة واحدة فقط"}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PaidProductSection;
