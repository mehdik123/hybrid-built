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
            // FormSubmit.co configuration
            // REPLACE WITH YOUR EMAIL ADDRESS
            const FORMSUBMIT_EMAIL = "REPLACE_WITH_YOUR_EMAIL";
            const endpoint = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    _subject: "New Waitlist Signup: Hybrid Split Identifier",
                    _captcha: "false", // Disable captcha
                    source: source,
                }),
            });

            if (response.ok) {
                // Success
                setIsLoading(false);
                setStep("success");
            } else {
                // Error handling
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

                <div className="relative p-6 sm:p-8">
                    <DialogHeader className="mb-6 relative z-10">
                        <DialogTitle className="text-center font-display text-2xl sm:text-3xl uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            {step === "form" ? t.title[language] : t.successTitle[language]}
                        </DialogTitle>
                    </DialogHeader>

                    <AnimatePresence mode="wait">
                        {step === "form" ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onSubmit={handleSubmit}
                                className="space-y-4 relative z-10"
                            >
                                <div className="space-y-2">
                                    <label className={`text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                        <User className="w-3 h-3" />
                                        {t.nameLabel[language]}
                                    </label>
                                    <Input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={`bg-white/5 border-white/10 text-foreground focus:border-primary/50 transition-all ${isRTL ? 'text-right' : ''}`}
                                        placeholder={language === 'en' ? "Your Name" : "الاسم ديالك"}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={`text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                        <Mail className="w-3 h-3" />
                                        {t.emailLabel[language]}
                                    </label>
                                    <Input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={`bg-white/5 border-white/10 text-foreground focus:border-primary/50 transition-all ${isRTL ? 'text-right' : ''}`}
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest py-6 group"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            {t.submitting[language]}
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            {t.submit[language]}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </Button>
                                <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                                    <Lock className="w-3 h-3" />
                                    {t.privacy[language]}
                                </div>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-4 relative z-10"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </div>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {t.successDesc[language]}
                                </p>
                                <Button
                                    onClick={() => setIsOpen(false)}
                                    variant="outline"
                                    className="w-full border-white/10 hover:bg-white/5"
                                >
                                    {language === "en" ? "Close" : "سد النافذة"}
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default EmailCaptureModal;
