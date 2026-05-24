import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSelectorModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { setLanguage } = useLanguage();

    useEffect(() => {
        // Only show if no language is saved in localStorage
        const savedLang = localStorage.getItem('language');
        if (!savedLang) {
            const timer = setTimeout(() => setIsOpen(true), 1500); // Slight delay for better UX
            return () => clearTimeout(timer);
        }
    }, []);

    const handleSelect = (lang: "en" | "ar" | "fr") => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none"
                    >
                        <div className="bg-card border border-background/10 rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl shadow-foreground/10 pointer-events-auto relative overflow-hidden group">
                            {/* Decorative Glow */}
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />

                            <div className="relative z-10 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8 border border-primary/20">
                                    <Globe className="w-8 h-8 text-primary" />
                                </div>

                                <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tighter mb-4 text-gradient">
                                    Choose Your Language
                                </h2>
                                <p className="text-muted-foreground mb-10 text-lg">
                                    Select your preferred language to continue your hybrid journey.
                                </p>

                                <div className="grid grid-cols-1 gap-4">
                                    <Button
                                        size="xl"
                                        className="bg-primary hover:bg-primary/90 text-background font-black uppercase tracking-widest text-lg py-6 shadow-xl shadow-foreground/10"
                                        onClick={() => handleSelect("en")}
                                    >
                                        English
                                    </Button>
                                    <Button
                                        size="xl"
                                        variant="outline"
                                        className="border-primary/20 text-primary hover:bg-primary/10 font-black uppercase tracking-widest text-lg py-6 bg-transparent"
                                        onClick={() => handleSelect("fr")}
                                    >
                                        Français
                                    </Button>
                                    <Button
                                        size="xl"
                                        variant="outline"
                                        className="border-primary/20 text-primary hover:bg-primary/10 font-black uppercase tracking-widest text-lg py-6 bg-transparent"
                                        onClick={() => handleSelect("ar")}
                                    >
                                        العربية / Darija
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LanguageSelectorModal;
