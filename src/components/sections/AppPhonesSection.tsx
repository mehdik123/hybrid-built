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
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!root || !pin || !track) return;

    const { gsap, ScrollTrigger } = getGsap();
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const getTravel = () => {
        const max = track.scrollWidth - pin.clientWidth;
        return Math.max(0, max);
      };

      // Start: first phone fully in view on the left
      gsap.set(track, { x: 0 });

      if (reduced) {
        // Fallback: allow native horizontal swipe
        pin.style.overflowX = "auto";
        return;
      }

      const tween = gsap.to(track, {
        x: () => (isRTL ? getTravel() : -getTravel()),
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${Math.max(getTravel() * 1.35, window.innerHeight * 1.6)}`,
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              SCREENS.length - 1,
              Math.round(self.progress * (SCREENS.length - 1))
            );
            setActive(idx);
          },
        },
      });

      // Emphasize the phone nearest viewport center
      const phones = track.querySelectorAll<HTMLElement>("[data-phone]");
      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: () => `+=${Math.max(getTravel() * 1.35, window.innerHeight * 1.6)}`,
        scrub: true,
        onUpdate: () => {
          const center = window.innerWidth / 2;
          phones.forEach((phone, i) => {
            const r = phone.getBoundingClientRect();
            const c = r.left + r.width / 2;
            const dist = Math.abs(c - center);
            const falloff = window.innerWidth * 0.35;
            const t = Math.min(1, dist / falloff);
            const focus = 1 - t;
            gsap.set(phone, {
              scale: 0.88 + focus * 0.14,
              opacity: 0.45 + focus * 0.55,
              zIndex: Math.round(focus * 20),
            });
          });
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, root);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    // Refresh after images layout
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [language, isRTL]);

  const jumpTo = (index: number) => {
    setActive(index);
    const root = rootRef.current;
    if (!root) return;
    const { ScrollTrigger } = getGsap();
    const st = ScrollTrigger.getAll().find((s) => s.trigger === root);
    if (!st) return;
    const progress = SCREENS.length <= 1 ? 0 : index / (SCREENS.length - 1);
    const scroll = st.start + (st.end - st.start) * progress;
    window.scrollTo({ top: scroll, behavior: "smooth" });
  };

  return (
    <section
      id="app"
      ref={rootRef}
      className="relative bg-ink border-t border-white/[0.08]"
    >
      <div className="px-5 pt-10 pb-4 md:px-10 md:pt-16 lg:px-14">
        <div className={`max-w-3xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <p className="font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-3">
            {copy.eyebrow[lang]}
          </p>
          <h2
            className={`mega-type text-white ${
              lang === "ar"
                ? "text-[clamp(1.6rem,5vw,3.2rem)] leading-[1.2]"
                : "text-[clamp(2.2rem,6vw,4.5rem)]"
            }`}
          >
            {copy.title[lang]}
          </h2>
          <p className="mt-3 md:mt-4 font-editorial text-sm md:text-base text-white/55 leading-relaxed max-w-xl">
            {copy.lead[lang]}
          </p>
        </div>

        <div
          className={`mt-5 mb-2 flex flex-wrap gap-2 ${
            isRTL ? "justify-end" : "justify-start"
          }`}
        >
          {SCREENS.map((screen, i) => (
            <button
              key={screen.src}
              type="button"
              onClick={() => jumpTo(i)}
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
      </div>

      {/* Horizontal phone strip — scrolls L→R as you scroll down */}
      <div
        ref={pinRef}
        className="relative w-full overflow-hidden pb-10 md:pb-14"
      >
        <div
          ref={trackRef}
          className={`flex items-end gap-4 md:gap-6 px-5 md:px-10 will-change-transform ${
            isRTL ? "flex-row-reverse" : ""
          }`}
          style={{ width: "max-content" }}
        >
          {SCREENS.map((screen, i) => (
            <figure
              key={screen.src}
              data-phone
              className="relative shrink-0 w-[58vw] max-w-[220px] sm:w-[200px] md:w-[240px] lg:w-[260px] aspect-[9/19] border border-white/20 bg-black overflow-hidden shadow-2xl shadow-black/50 will-change-transform"
              style={{ opacity: i === 0 ? 1 : 0.55, transform: "scale(0.92)" }}
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
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-2.5 left-1/2 -translate-x-1/2 font-editorial text-[9px] uppercase tracking-[0.16em] text-white/90">
                {screen.label[lang]}
              </figcaption>
            </figure>
          ))}
          {/* Trailing spacer so last phone can reach center */}
          <div className="shrink-0 w-[20vw] md:w-[30vw]" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default AppPhonesSection;
