import { useState } from "react";
import { X, Mail, User, CheckCircle, ArrowRight, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface EmailCaptureModalProps {
    children: React.ReactNode;
    source?: string;
}

const EmailCaptureModal = ({ children, source = "generic" }: EmailCaptureModalProps) => {
    const { language, isRTL } = useLanguage();
    const t = translations.modal;
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<"form" | "success">("form");
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("https://formspree.io/f/REPLACE_WITH_FORM_ID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    source: source
                })
            });

            if (response.ok) {
                // Success
                setIsLoading(false);
                setStep("success");

                // Waitlist mode: No auto-download
                // Just show success message
            } else {
                // Error handling could go here
                setIsLoading(false);
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            setIsLoading(false);
            alert("Connection error. Please check your internet.");
        }
    };

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        if (!open) {
            // Reset state when closed
            setTimeout(() => setStep("form"), 300);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[90vw] sm:max-w-md bg-secondary/10 backdrop-blur-3xl border-white/10 p-0 overflow-hidden gap-0 rounded-2xl sm:rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />

                <AnimatePresence mode="wait">
                    {step === "form" ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="p-6 sm:p-8 relative"
                        >
                            <DialogHeader className="mb-6 space-y-3">
                                <DialogTitle className="text-center font-display text-2xl sm:text-3xl uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                                    {t.title[language]}
                                </DialogTitle>
                                <p className="text-center text-muted-foreground text-sm leading-relaxed max-w-[95%] sm:max-w-[85%] mx-auto">
                                    {t.subtitle[language]}
                                </p>
                            </DialogHeader>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <div className="relative">
                                        <User className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
                                        <Input
                                            placeholder={t.nameLabel[language]}
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                            className={`h-12 bg-background/50 border-white/10 focus:border-primary/50 transition-all ${isRTL ? 'pr-10 text-right' : 'pl-10'}`}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Mail className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
                                        <Input
                                            type="email"
                                            placeholder={t.emailLabel[language]}
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            className={`h-12 bg-background/50 border-white/10 focus:border-primary/50 transition-all ${isRTL ? 'pr-10 text-right' : 'pl-10'}`}
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm transition-all shadow-lg shadow-primary/20"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            {t.submit[language]} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                                        </span>
                                    )}
                                </Button>

                                <p className="text-[10px] text-center text-muted-foreground/60 flex items-center justify-center gap-1.5 pt-2">
                                    <Lock className="w-3 h-3" />
                                    {t.privacy[language]}
                                </p>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-4"
                        >
                            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                                {t.successTitle[language]}
                            </h3>
                            <p className="text-muted-foreground text-sm max-w-[200px]">
                                {t.successDesc[language]}
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 border-white/10 hover:bg-white/5"
                            >
                                Close
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </DialogContent>
        </Dialog>
    );
};

export default EmailCaptureModal;
