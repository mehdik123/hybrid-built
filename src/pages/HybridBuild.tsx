import { isolateLatin } from "@/lib/bidi";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import ScrollProgress from "@/components/ScrollProgress";
import { useLanguage } from "@/contexts/AppContext";
import { landing } from "@/content/coachingLanding";
import {
  ASSETS,
  GUMROAD_HYBRID_CHECKOUT_URL,
  IG_HYBRID_TRANSFER_DM_URL,
} from "@/lib/constants";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const Footer = lazy(() => import("@/components/sections/Footer"));

const hybrid = landing.products.items.find((p) => p.id === "blueprint")!;

const HybridBuild = () => {
  const { language, isRTL } = useLanguage();
  const [payMode, setPayMode] = useState<"card" | "transfer">("card");
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.querySelectorAll("[data-hb]"),
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.09, duration: 0.85, delay: 0.15, ease: "power3.out" }
      );
    }, root);
    return () => ctx.revert();
  }, [language]);

  const labels = {
    productName: "HYBRID BUILD",
    subtitle: {
      en: "The 8 Week Hybrid Athlete Program",
      ar: isolateLatin("برنامج Hybrid Athlete لمدة 8 سيمانات"),
      fr: "Le programme Hybrid Athlete 8 semaines",
    },
    positioning: {
      en: "A structured training system you follow on your own. Calisthenics and bodybuilding.",
      ar: isolateLatin("نظام تدريب منظم تقدر تتبعو بوحدك. Calisthenics و bodybuilding."),
      fr: "Un système d’entraînement structuré à suivre en autonomie. Calisthenics et musculation.",
    },
    payCard:
      language === "ar" ? "خلص بالبطاقة" : language === "fr" ? "Payer par carte" : "Pay by card",
    payTransfer:
      language === "ar"
        ? isolateLatin("خلاص بالـ virement")
        : language === "fr"
          ? "Payer par virement"
          : "Pay by transfer",
    transferHint:
      language === "ar"
        ? isolateLatin("صيفط ليا فـ Instagram. غادي نعطيك تفاصيل الـ virement، ومن بعد الخلاص كنحل ليك الـ access.")
        : language === "fr"
          ? "Écris-moi sur Instagram. Je t’envoie les infos de virement, puis je débloque l’accès après paiement."
          : "Message me on Instagram. I’ll send the transfer details, then unlock access after you pay.",
    dmTransfer:
      language === "ar"
        ? isolateLatin("صيفط ليا DM للـ virement")
        : language === "fr"
          ? "DM pour le virement"
          : "Message me for transfer details",
    cardNote:
      language === "ar"
        ? isolateLatin("خلاص فوري فـ Gumroad. Access من بعد الدفع.")
        : language === "fr"
          ? "Paiement Gumroad. Accès après paiement."
          : "Gumroad checkout. Access after payment.",
    backHome:
      language === "ar" ? "الرجوع للرئيسية" : language === "fr" ? "Retour à l’accueil" : "Back to home",
    whatsInside:
      language === "ar" ? "شنو كاين داخل" : language === "fr" ? "Ce qui est inclus" : "What's inside",
  };

  const gallery =
    "gallery" in hybrid && Array.isArray(hybrid.gallery) ? hybrid.gallery : [];

  return (
    <main className="min-h-screen bg-black relative">
      <LanguageSelectorModal />
      <Header variant="product" />
      <ScrollProgress />

      {/* Cover has baked-in poster text — keep it as a card, never under page copy */}
      <section ref={heroRef} className="relative bg-black border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-5 pt-28 pb-12 md:px-10 md:pt-32 md:pb-16 lg:px-14">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className={`lg:col-span-6 ${isRTL ? "text-right lg:order-2" : ""}`}>
              <p data-hb className="font-editorial text-[11px] uppercase tracking-[0.28em] text-red-br mb-4">
                {hybrid.tag[language]}
              </p>
              <h1
                data-hb
                className="mega-type text-white text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.9] mb-3"
              >
                {labels.productName}
              </h1>
              <p data-hb className="font-editorial text-base md:text-lg text-white/70 mb-3">
                {labels.subtitle[language]}
              </p>
              <p
                data-hb
                className={`max-w-xl font-editorial text-[15px] text-white/55 mb-8 ${
                  language === "ar" ? "leading-[1.85]" : "leading-relaxed"
                }`}
              >
                {labels.positioning[language]}
              </p>
              <div
                data-hb
                className={`flex flex-wrap items-center gap-4 mb-2 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <span className="mega-type text-white text-3xl md:text-4xl">
                  {hybrid.price[language]}
                </span>
                {hybrid.compareAt[language] && (
                  <span className="font-editorial text-white/35 line-through text-lg">
                    {hybrid.compareAt[language]}
                  </span>
                )}
                {"priceNote" in hybrid && hybrid.priceNote && (
                  <span className="font-editorial text-sm text-white/45">
                    {hybrid.priceNote[language]}
                  </span>
                )}
              </div>
              <div data-hb className="mt-6">
                <a href="#checkout" className="btn-primary-cta">
                  {hybrid.cta[language]}
                </a>
              </div>
            </div>

            <div className={`lg:col-span-6 ${isRTL ? "lg:order-1" : ""}`}>
              <div
                data-hb
                className={`grid grid-cols-2 gap-3 md:gap-4 max-w-[560px] ${
                  isRTL ? "mr-0 ml-auto" : "mx-auto lg:ml-auto lg:mr-0"
                }`}
              >
                <figure className="overflow-hidden border border-white/10 bg-[#0a0a0a]">
                  <img
                    src={ASSETS.hybridCoverDarija}
                    alt="Hybrid Build cover · Arabic"
                    className="block w-full h-auto object-contain object-top"
                    fetchPriority="high"
                  />
                  <figcaption className="px-2.5 py-2 font-editorial text-[10px] uppercase tracking-[0.16em] text-white/55 text-center border-t border-white/10">
                    {language === "fr" ? "Arabe" : language === "ar" ? "العربية" : "Arabic"}
                  </figcaption>
                </figure>
                <figure className="overflow-hidden border border-white/10 bg-[#0a0a0a]">
                  <img
                    src={ASSETS.hybridCoverEn}
                    alt="Hybrid Build cover · English"
                    className="block w-full h-auto object-contain object-top"
                    fetchPriority="high"
                  />
                  <figcaption className="px-2.5 py-2 font-editorial text-[10px] uppercase tracking-[0.16em] text-white/55 text-center border-t border-white/10">
                    {language === "fr" ? "Anglais" : language === "ar" ? "الإنجليزية" : "English"}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-black border-t border-white/[0.08] px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <div className={`max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 ${isRTL ? "text-right" : ""}`}>
          <div className="lg:col-span-6">
            <h2
              className={`mega-type text-white mb-6 ${
                language === "ar"
                  ? "text-[clamp(1.6rem,4vw,2.8rem)] leading-[1.2]"
                  : "text-[clamp(2rem,4vw,3.2rem)]"
              }`}
            >
              {labels.whatsInside}
            </h2>
            <p
              className={`font-editorial text-[15px] md:text-base text-white/70 mb-8 ${
                language === "ar" ? "leading-[1.85]" : "leading-relaxed"
              }`}
            >
              {hybrid.details[language]}
            </p>
            <ul className="space-y-3 mb-8">
              {hybrid.bullets.map((b, i) => (
                <li key={i} className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Check className="w-4 h-4 text-red-br shrink-0 mt-1" />
                  <span className="font-editorial text-sm md:text-[15px] text-white/70">{b[language]}</span>
                </li>
              ))}
            </ul>
            <div className={`flex flex-wrap gap-x-6 gap-y-2 font-editorial text-sm text-white/40 ${isRTL ? "flex-row-reverse" : ""}`}>
              <span>{hybrid.level[language]}</span>
              <span>{hybrid.duration[language]}</span>
              {"languages" in hybrid && hybrid.languages && <span>{hybrid.languages[language]}</span>}
            </div>
            {"disclaimer" in hybrid && hybrid.disclaimer && (
              <p className="mt-8 font-editorial text-xs text-white/35 leading-relaxed max-w-md">
                {hybrid.disclaimer[language]}
              </p>
            )}
          </div>

          <div className="lg:col-span-6">
            {gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {gallery.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="w-full aspect-[9/16] object-cover object-top border border-white/[0.08]"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        id="checkout"
        className="border-t border-white/[0.08] px-5 py-16 md:px-10 md:py-24 lg:px-14 bg-[#0a0a0a]"
      >
        <div className={`max-w-lg mx-auto ${isRTL ? "text-right" : ""}`}>
          <h2 className="mega-type text-white text-[clamp(2rem,5vw,3rem)] mb-2">{labels.productName}</h2>
          <p className="font-editorial text-sm text-white/50 mb-8">{labels.subtitle[language]}</p>

          <div className={`flex gap-2 mb-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <button
              type="button"
              onClick={() => setPayMode("card")}
              className={`flex-1 py-3 px-4 font-editorial text-sm border transition-colors ${
                payMode === "card"
                  ? "border-red-br text-white bg-red-br/10"
                  : "border-white/15 text-white/55 hover:border-white/30"
              }`}
            >
              {labels.payCard}
            </button>
            <button
              type="button"
              onClick={() => setPayMode("transfer")}
              className={`flex-1 py-3 px-4 font-editorial text-sm border transition-colors ${
                payMode === "transfer"
                  ? "border-red-br text-white bg-red-br/10"
                  : "border-white/15 text-white/55 hover:border-white/30"
              }`}
            >
              {labels.payTransfer}
            </button>
          </div>
          <p className="font-editorial text-sm text-white/55 mb-6 leading-relaxed">
            {language === "ar"
              ? isolateLatin("كل عملية شراء فيها رمز دخول شخصي باش تفتح الـ app.")
              : language === "fr"
                ? "Chaque achat inclut un code d’accès personnel pour débloquer l’app."
                : "Each purchase includes a personal access code to unlock the app."}
          </p>

          {payMode === "card" ? (
            <div>
              <p className="font-editorial text-sm text-white/45 mb-4">{labels.cardNote}</p>
              {"checkoutNote" in hybrid && hybrid.checkoutNote && (
                <p className="font-editorial text-xs text-white/30 mb-4">{hybrid.checkoutNote[language]}</p>
              )}
              <a
                href={GUMROAD_HYBRID_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-cta w-full justify-center"
              >
                {hybrid.cta[language]} · {hybrid.price[language]}
              </a>
            </div>
          ) : (
            <div>
              <p className="font-editorial text-sm text-white/45 mb-4">{labels.transferHint}</p>
              <a
                href={IG_HYBRID_TRANSFER_DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-cta w-full justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {labels.dmTransfer}
              </a>
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-white/[0.08] space-y-3">
            <Link to="/" className="btn-ghost-cta w-full justify-center">
              {labels.backHome}
            </Link>
            <Link to="/" className="block text-center font-editorial text-sm text-white/40 hover:text-white/70 transition-colors">
              {language === "ar"
                ? isolateLatin("باغي online coaching؟")
                : language === "fr"
                  ? "Tu préfères le coaching en ligne ?"
                  : "Prefer online coaching?"}
            </Link>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default HybridBuild;
