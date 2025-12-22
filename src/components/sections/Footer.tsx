import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Footer = () => {
  const { language, isRTL } = useLanguage();
  const t = translations.footer;

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/yourhandle" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/yourchannel" },
  ];

  return (
    <footer className="py-12 md:py-16 border-t border-border bg-card/50">
      <div className="container-tight px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl mb-6 text-foreground">
            {t.title1[language]} <span className="text-gradient">{t.title2[language]}</span>
          </h3>

          <div className={`flex justify-center gap-4 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            {/* TikTok - custom icon since lucide doesn't have it */}
            <a
              href="https://tiktok.com/@yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>

          <p className="text-muted-foreground mb-6">
            {t.questions[language]}
          </p>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} [Your Name] | {t.rights[language]}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;