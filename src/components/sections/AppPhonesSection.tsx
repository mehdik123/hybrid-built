import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS } from "@/lib/constants";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const SCREENS = [
  { src: ASSETS.appHome, label: { en: "Home", ar: "الرئيسية", fr: "Accueil" } },
  { src: ASSETS.appTrain, label: { en: "Train", ar: "تدريب", fr: "Train" } },
  { src: ASSETS.appNutrition, label: { en: "Nutrition", ar: "تغذية", fr: "Nutrition" } },
  { src: ASSETS.appProgress, label: { en: "Progress", ar: "التقدم", fr: "Progrès" } },
] as const;

const copy = {
  eyebrow: { en: "My coaching app", ar: "تطبيق التدريب ديالي", fr: "Mon app de coaching" },
  title: {
    en: "I coach you. The app keeps it organized.",
    ar: "أنا اللي كنوجّهك. التطبيق غير كيساعدنا ننظمو.",
    fr: "Coaching privé dans mon app.",
  },
  lead: {
    en: "Most coaches hand you a PDF and disappear. I write the plan and check in with you every day. The app is where you see training, meals, and progress in one place.",
    ar: "بزاف ديال الكوتشات كيعطيوك PDF وكيخليوك بوحدك. أنا اللي كنقاد البرنامج وكنتابع معاك نهار بنهار. التطبيق غير بلاصة كتلقا فيها التمارين، الماكلة والتقدم ديالك.",
    fr: "Une expérience fluide: on suit tes PRs, milestones, poids, photos hebdo, volume d’entraînement et progrès musculaire.",
  },
} as const;

const AppPhonesSection = () => {
  const { language, isRTL } = useLanguage();
  const lang = language as "en" | "ar" | "fr";
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;
    const { gsap, ScrollTrigger } = getGsap();
    const reduced = prefersReducedMotion();
    const phones = stage.querySelectorAll<HTMLElement>("[data-phone]");

    const layoutPhones = (index: number, animate: boolean) => {
      phones.forEach((phone, i) => {
        const dist = i - index;
        const abs = Math.abs(dist);
        const dir = isRTL ? -1 : 1;
        const props = {
          x: dist * 72 * dir,
          y: abs * 14 - (abs === 0 ? 28 : 0),
          scale: abs === 0 ? 1.1 : Math.max(0.78, 0.96 - abs * 0.08),
          opacity: abs === 0 ? 1 : Math.max(0.28, 0.7 - abs * 0.18),
          rotate: dist * 4 * dir,
          zIndex: 20 - abs,
          duration: animate ? 0.55 : 0,
          ease: "power3.out",
          overwrite: "auto" as const,
        };
        gsap.to(phone, props);
      });
    };

    const ctx = gsap.context(() => {
      if (reduced) {
        layoutPhones(active, false);
        return;
      }

      gsap.from(phones, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        stagger: 0.07,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: root, start: "top 72%" },
        onComplete: () => layoutPhones(active, true),
      });

      ScrollTrigger.create({
        trigger: root,
        start: "top 60%",
        end: "bottom 35%",
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(
            SCREENS.length - 1,
            Math.max(0, Math.round(self.progress * (SCREENS.length - 1)))
          );
          setActive(idx);
        },
      });

      gsap.to(stage, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, isRTL]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const { gsap } = getGsap();
    const phones = stage.querySelectorAll<HTMLElement>("[data-phone]");
    const dir = isRTL ? -1 : 1;
    phones.forEach((phone, i) => {
      const dist = i - active;
      const abs = Math.abs(dist);
      gsap.to(phone, {
        x: dist * 72 * dir,
        y: abs * 14 - (abs === 0 ? 28 : 0),
        scale: abs === 0 ? 1.1 : Math.max(0.78, 0.96 - abs * 0.08),
        opacity: abs === 0 ? 1 : Math.max(0.28, 0.7 - abs * 0.18),
        rotate: dist * 4 * dir,
        zIndex: 20 - abs,
        duration: prefersReducedMotion() ? 0 : 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  }, [active, isRTL]);

  return (
    <section
      id="app"
      ref={rootRef}
      className="relative section-padding bg-ink border-t border-white/[0.08] overflow-hidden"
    >
      <div className="container-tight">
        <div className={`max-w-3xl mb-10 md:mb-14 ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <p className="font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-4">
            {copy.eyebrow[lang]}
          </p>
          <h2
            className={`mega-type text-white ${
              lang === "ar"
                ? "text-[clamp(1.75rem,5vw,3.4rem)] leading-[1.2]"
                : "text-[clamp(2.4rem,6.5vw,5rem)]"
            }`}
          >
            {copy.title[lang]}
          </h2>
          <p className="mt-5 font-editorial text-base text-white/55 leading-relaxed max-w-xl">
            {copy.lead[lang]}
          </p>
        </div>

        <div
          className={`mb-8 flex flex-wrap gap-2 ${isRTL ? "justify-end" : "justify-start"} md:justify-center`}
        >
          {SCREENS.map((screen, i) => (
            <button
              key={screen.src}
              type="button"
              onClick={() => setActive(i)}
              className={`font-editorial text-[10px] uppercase tracking-[0.16em] px-3 py-2 transition-colors ${
                active === i
                  ? "text-white border border-red-br bg-red-br/10"
                  : "text-white/40 border border-white/10 hover:text-white/70"
              }`}
            >
              {screen.label[lang]}
            </button>
          ))}
        </div>

        <div
          ref={stageRef}
          className="relative mx-auto h-[400px] sm:h-[460px] md:h-[540px] max-w-4xl"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 bottom-6 h-24 w-[70%] -translate-x-1/2 rounded-[100%] bg-red-br/15 blur-3xl"
          />

          {SCREENS.map((screen, i) => (
            <button
              key={screen.src}
              type="button"
              data-phone
              onClick={() => setActive(i)}
              aria-label={screen.label[lang]}
              aria-pressed={active === i}
              className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[min(190px,40vw)] md:w-[210px] aspect-[9/19] border border-white/20 bg-black overflow-hidden shadow-2xl shadow-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-br will-change-transform"
            >
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-2 w-10 rounded-full bg-black/90 z-10" />
              <img
                src={screen.src}
                alt={screen.label[lang]}
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="eager"
                decoding="async"
                draggable={false}
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/90 to-transparent" />
              <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 font-editorial text-[9px] uppercase tracking-[0.16em] text-white/90">
                {screen.label[lang]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPhonesSection;
