import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, CheckCircle, ArrowRight, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EmailCaptureFormProps {
  source?: string;
  subject?: string;
  onSuccess?: () => void;
  className?: string;
  /** Inline single-field layout for path cards */
  compact?: boolean;
}

const EmailCaptureForm = ({
  source = "free-tool",
  subject = "Free Hybrid Tool Request",
  onSuccess,
  className = "",
  compact = false,
}: EmailCaptureFormProps) => {
  const { language, isRTL } = useLanguage();
  const t = translations.modal;
  const freeT = translations.freeToolPage;
  const isFreeTool = source.includes("free-tool");
  const [step, setStep] = useState<"form" | "success">("form");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const FORMSUBMIT_EMAIL = "REPLACE_WITH_YOUR_EMAIL";
      const endpoint = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: subject,
          _captcha: "false",
          _template: "table",
          source,
          message: `Send Hybrid Split Identifier to ${formData.email}`,
        }),
      });

      if (response.ok) {
        localStorage.setItem("freeToolUnlocked", "true");
        localStorage.setItem("freeToolEmail", formData.email);
        setStep("success");
        onSuccess?.();
      } else {
        alert(language === "en" ? "Something went wrong. Please try again." : "وقع مشكل. عاود جرب.");
      }
    } catch {
      alert(language === "en" ? "Connection error. Please check your internet." : "مشكل فالاتصال.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {step === "form" ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: compact ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: compact ? 0 : -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className={compact ? "flex gap-2" : "space-y-4"}
          >
            {compact ? (
              <>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value, name: e.target.value.split("@")[0] || "User" })}
                  className={`flex-1 bg-white/5 border-white/10 h-9 text-sm focus:border-red-br/50 ${isRTL ? "text-right" : ""}`}
                  placeholder={language === "en" ? "Email" : language === "fr" ? "Email" : "الإيميل"}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary-cta !py-2 !px-3 !text-[10px] shrink-0 h-9"
                >
                  {isLoading ? "…" : t.submit[language].split(" ")[0]}
                </Button>
              </>
            ) : (
              <>
            <div className="space-y-2">
              <label
                className={`text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <User className="w-3 h-3" />
                {t.nameLabel[language]}
              </label>
              <Input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`bg-white/5 border-white/10 h-12 text-base focus:border-primary/50 ${isRTL ? "text-right" : ""}`}
                placeholder={language === "en" ? "Your name" : language === "fr" ? "Votre nom" : "الاسم ديالك"}
              />
            </div>
            <div className="space-y-2">
              <label
                className={`text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <Mail className="w-3 h-3" />
                {t.emailLabel[language]}
              </label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`bg-white/5 border-white/10 h-12 text-base focus:border-primary/50 ${isRTL ? "text-right" : ""}`}
                placeholder="name@example.com"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="btn-primary-cta w-full !rounded-none"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t.submitting[language]}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  {t.submit[language]}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              )}
            </Button>
            <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground/60 uppercase tracking-widest">
              <Lock className="w-3 h-3" />
              {t.privacy[language]}
            </div>
              </>
            )}
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={compact ? "text-center py-2" : "text-center py-6"}
          >
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/30">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl uppercase tracking-tight mb-2">
              {isFreeTool ? freeT.sentTitle[language] : t.successTitle[language]}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {isFreeTool ? freeT.sentDesc[language] : t.successDesc[language]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailCaptureForm;
