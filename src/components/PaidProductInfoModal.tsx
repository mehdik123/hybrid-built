import { X, Zap, Check, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

interface PaidProductInfoModalProps {
    children: React.ReactNode;
}

const PaidProductInfoModal = ({ children }: PaidProductInfoModalProps) => {
    const { language, isRTL } = useLanguage();
    const t = translations.paidProductModal;
    const dmLink = "https://ig.me/m/unbreakablesteam?text=HYBRID%20PROGRAM";

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] sm:max-w-2xl bg-secondary/10 backdrop-blur-3xl border-white/10 p-0 overflow-hidden gap-0 max-h-[90vh]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none" />

                <ScrollArea className="max-h-[90vh]">
                    <div className="p-6 sm:p-8 relative">
                        <DialogHeader className="mb-6 space-y-3">
                            <div className="flex items-center justify-center gap-3 mb-2">
                                <Zap className="w-8 h-8 text-primary" />
                                <DialogTitle className="text-center font-display text-2xl sm:text-3xl uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                                    {t.title[language]}
                                </DialogTitle>
                            </div>
                            <p className="text-center text-muted-foreground text-sm leading-relaxed max-w-[95%] mx-auto">
                                {t.subtitle[language]}
                            </p>
                        </DialogHeader>

                        {/* Pricing */}
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-6">
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <span className="text-4xl font-black text-primary">$20</span>
                                <span className="text-2xl text-muted-foreground">/</span>
                                <span className="text-4xl font-black text-primary">199 DH</span>
                            </div>
                            <p className="text-center text-xs text-muted-foreground uppercase tracking-widest">
                                {t.oneTimePayment[language]}
                            </p>
                        </div>

                        {/* What You Get */}
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4 text-primary uppercase tracking-wide">
                                {t.whatYouGet[language]}
                            </h3>
                            <ul className="space-y-3">
                                {t.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                                    >
                                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{feature[language]}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* How to Use */}
                        <div className="mb-6 bg-card/50 border border-border/50 rounded-xl p-5">
                            <h3 className="font-bold text-lg mb-3 text-foreground uppercase tracking-wide">
                                {t.howToUse[language]}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {t.howToUseDesc[language]}
                            </p>
                        </div>

                        {/* Payment Process */}
                        <div className="mb-8 bg-primary/5 border border-primary/20 rounded-xl p-5">
                            <h3 className="font-bold text-lg mb-3 text-primary uppercase tracking-wide">
                                {t.howToBuy[language]}
                            </h3>
                            <ol className={`space-y-2 text-sm text-muted-foreground ${isRTL ? 'text-right' : ''}`}>
                                <li className="flex items-start gap-2">
                                    <span className="font-bold text-primary">1.</span>
                                    <span>{t.step1[language]}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="font-bold text-primary">2.</span>
                                    <span>{t.step2[language]}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="font-bold text-primary">3.</span>
                                    <span>{t.step3[language]}</span>
                                </li>
                            </ol>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={dmLink} target="_blank" rel="noopener noreferrer" className="block flex-1 order-2 sm:order-1">
                                <Button
                                    size="lg"
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 py-7"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    {t.dmButton[language]}
                                </Button>
                            </a>
                            <a href="https://hybridtrainingblueprint-mehdikamal535-7388s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="block flex-1 order-1 sm:order-2">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full border-primary/30 text-primary hover:bg-primary/10 font-black uppercase tracking-widest text-sm py-7"
                                >
                                    <Zap className="w-5 h-5" />
                                    {language === 'en' ? 'PREVIEW HERE' : 'شوف لبلان هنا'}
                                </Button>
                            </a>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default PaidProductInfoModal;
