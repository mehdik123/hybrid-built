import { motion } from "framer-motion";
import { Zap, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const ProductTeaser = () => {
    const { language, isRTL } = useLanguage();
    const t = translations.productTeaser;

    return (
        <section className="py-12 bg-secondary/30 border-y border-white/5">
            <div className="container-tight px-4 sm:px-8">
                <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>

                    <div className={`text-center md:text-left ${isRTL ? 'md:text-right' : ''}`}>
                        <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter mb-2">
                            {t.title[language]}
                        </h2>
                        <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">
                            {t.subtitle[language]}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
                        <div className="bg-card border border-white/10 p-3 rounded-xl flex flex-col items-center gap-1 text-center">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black uppercase text-foreground">{t.blueprintTitle[language]}</span>
                            <span className="text-[8px] text-muted-foreground uppercase">{t.blueprintDesc[language]}</span>
                        </div>
                        <div className="bg-card border border-white/10 p-3 rounded-xl flex flex-col items-center gap-1 text-center">
                            <Gift className="w-4 h-4 text-accent" />
                            <span className="text-[10px] font-black uppercase text-foreground">{t.freeTitle[language]}</span>
                            <span className="text-[8px] text-muted-foreground uppercase">{t.freeDesc[language]}</span>
                        </div>
                    </div>

                    <Link to="/products" className="w-full md:w-auto">
                        <button className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transition-all">
                            {t.cta[language]}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default ProductTeaser;
