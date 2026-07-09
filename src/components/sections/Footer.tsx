import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";

const Footer = () => {
  const { language, isRTL } = useLanguage();
  const t = translations.footer;

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/unbreakablesteam" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@unbreakablesteam" },
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
            <a
              href="https://tiktok.com/@unbreakablesteam"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target w-12 h-12 bg-ink flex items-center justify-center text-muted-foreground hover:text-red-br transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>

          <p className="font-editorial text-sm text-muted-foreground mb-6">{t.questions[language]}</p>

          <div className="hairline max-w-xs mx-auto mb-6" />

          <p className="font-editorial text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Mehdi · {t.rights[language]}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
