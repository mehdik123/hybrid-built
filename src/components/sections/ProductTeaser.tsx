import { motion } from "framer-motion";
import { Zap, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const ProductTeaser = () => {
    const { language, isRTL } = useLanguage();
    const t = translations.productTeaser;

    return (
        <section className="py-12 bg-secondary/30 border-y border-background/5">
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

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

                        {/* Paid Product - Highlighted */}
                        <div className="bg-card border border-primary/40 p-4 rounded-2xl flex flex-col gap-2 min-w-[180px] shadow-lg shadow-foreground/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                            <div className="absolute -top-1 -right-1 w-8 h-8 bg-primary blur-xl opacity-30" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-1">
                                    <Zap className="w-5 h-5 text-primary fill-primary/20" />
                                    <span className="text-[9px] font-black uppercase text-primary bg-primary/10 px-2 py-0.5 rounded-full">Best Seller</span>
                                </div>
                                <span className="text-sm font-black uppercase text-foreground leading-tight">{t.blueprintTitle[language]}</span>
                                <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{t.blueprintDesc[language]}</span>
                            </div>
                        </div>

                        {/* Free Tool - Secondary */}
                        <div className="bg-card/50 border border-background/5 p-4 rounded-2xl flex flex-col gap-2 min-w-[160px] hover:border-background/10 transition-colors">
                            <Gift className="w-5 h-5 text-indigo-400" />
                            <span className="text-sm font-bold uppercase text-foreground/80 leading-tight">{t.freeTitle[language]}</span>
                            <span className="text-[10px] text-muted-foreground uppercase">{t.freeDesc[language]}</span>
                        </div>
                    </div>

                    <Link to="/products" className="w-full md:w-auto">
                        <button className="w-full bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl shadow-lg shadow-white/10 flex items-center justify-center gap-3 group transition-all">
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
