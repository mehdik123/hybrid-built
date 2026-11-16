import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { BRAND_NAME, IG_PROFILE_URL } from "@/lib/constants";

const Footer = () => {
  const { language, isRTL } = useLanguage();
  const t = translations.footer;

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: IG_PROFILE_URL },
  ];

  return (
    <footer className="py-12 md:py-16 border-t border-white/[0.06] bg-ink">
      <div className="container-tight px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`text-center ${isRTL ? "rtl" : ""}`}
        >
          <h3 className="font-display text-xl md:text-2xl uppercase mb-8 text-foreground">
            {t.title1[language]}{" "}
            <span className="text-red-br">{t.title2[language]}</span>
          </h3>

          <div className={`flex justify-center gap-px bg-white/[0.06] inline-flex mx-auto mb-8 ${isRTL ? "flex-row-reverse" : ""}`}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-12 h-12 bg-ink flex items-center justify-center text-muted-foreground hover:text-red-br transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="font-editorial text-sm text-muted-foreground mb-6">{t.questions[language]}</p>

          <div className="hairline max-w-xs mx-auto mb-6" />

          <p className="font-editorial text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} {BRAND_NAME} · {t.rights[language]}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
