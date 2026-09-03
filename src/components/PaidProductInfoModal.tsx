import { X, Zap, Check, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
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


    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] sm:max-w-2xl bg-secondary/10 backdrop-blur-3xl border-background/10 p-0 overflow-hidden gap-0 max-h-[90vh] z-[100] [&>button.rounded-sm]:hidden">
                <DialogClose className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-[110] rounded-full bg-foreground/80 p-2 text-background hover:bg-foreground/70 transition-colors border border-background/10`}>
                    <X className="w-5 h-5" />
                </DialogClose>
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

                        {/* Access note — price shared via DM */}
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-6">
                            <p className="text-center font-editorial text-sm text-foreground/80 leading-relaxed">
                                {language === "en"
                                  ? "Message me on Instagram for access. Pricing is shared personally."
                                  : language === "fr"
                                    ? "Envoie-moi un DM Instagram pour y accéder. Le tarif est partagé en privé."
                                    : "صيفط ليا DM فـ Instagram للوصول. الثمن كنبقاو عليه شخصياً."}
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



                        {/* Payment Methods */}
                        <div className="mb-6 bg-card/50 border border-border/50 rounded-xl p-5">
                            <h3 className="font-bold text-lg mb-4 text-primary uppercase tracking-wide flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                {t.paymentMethodsTitle[language]}
                            </h3>
                            <div className="grid gap-3">
                                {/* Bank */}
                                <div className={`flex items-center gap-3 bg-background/50 p-3 rounded-lg border border-background/5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                        <span className="text-blue-400 font-bold text-xs">BANK</span>
                                    </div>
                                    <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                                        <p className="text-sm font-medium text-foreground">{t.methods.bank[language]}</p>
                                    </div>
                                </div>

                                {/* Cash Agencies */}
                                <div className={`flex items-center gap-3 bg-background/50 p-3 rounded-lg border border-background/5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                                        <span className="text-yellow-400 font-bold text-xs">CASH</span>
                                    </div>
                                    <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                                        <p className="text-sm font-medium text-foreground">{t.methods.cash[language]}</p>
                                    </div>
                                </div>

                                {/* International */}
                                <div className={`flex items-center gap-3 bg-background/50 p-3 rounded-lg border border-background/5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                                        <span className="text-green-400 font-bold text-xs">INTL</span>
                                    </div>
                                    <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                                        <p className="text-sm font-medium text-foreground">{t.methods.intl[language]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Process */}
                        <div className="mb-8 bg-primary/5 border border-primary/20 rounded-xl p-5">
                            <h3 className="font-bold text-lg mb-3 text-primary uppercase tracking-wide">
                                {t.howToBuy[language]}
                            </h3>
                            <ol className={`space-y-3 text-sm text-muted-foreground ${isRTL ? 'text-right' : ''}`}>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs">1</span>
                                    <span className="mt-0.5">{t.step1[language]}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs">2</span>
                                    <span className="mt-0.5">{t.step2[language]}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs">3</span>
                                    <span className="mt-0.5">{t.step3[language]}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs">4</span>
                                    <span className="mt-0.5">{t.step4[language]}</span>
                                </li>
                            </ol>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-4">
                            <a href={`https://ig.me/m/unbreakablesteam?text=${encodeURIComponent(t.dmLinkText[language])}`} target="_blank" rel="noopener noreferrer" className="block w-full">
                                <Button
                                    size="lg"
                                    className="w-full bg-primary hover:bg-primary/90 text-background font-black uppercase tracking-widest text-base sm:text-lg transition-all shadow-lg shadow-foreground/10 flex items-center justify-center gap-3 py-8 sm:py-9"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    {t.dmButton[language]}
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
