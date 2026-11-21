import { isolateLatin } from "@/lib/bidi";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { ASSETS } from "@/lib/constants";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

const SCREENS = [
  { src: ASSETS.appHome, label: { en: "Home", ar: "الرئيسية", fr: "Accueil" } },
  { src: ASSETS.appTrain, label: { en: "Train", ar: "تدريب", fr: "Train" } },
  { src: ASSETS.appCardio, label: { en: "Cardio", ar: "كارديو", fr: "Cardio" } },
  { src: ASSETS.appNutrition, label: { en: "Nutrition", ar: "تغذية", fr: "Nutrition" } },
  { src: ASSETS.appProgress, label: { en: "Progress", ar: "التقدم", fr: "Progrès" } },
  { src: ASSETS.appWeight, label: { en: "Weight", ar: "الوزن", fr: "Poids" } },
  { src: ASSETS.appPhotos, label: { en: "Photos", ar: "الصور", fr: "Photos" } },
] as const;

const copy = {
  eyebrow: { en: "My coaching app", ar: "تطبيق التدريب ديالي", fr: "Mon app de coaching" },
  title: {
    en: "I coach you. The app keeps it organized.",
    ar: "أنا اللي كنوجهك، والتطبيق غير كيعاوننا ننظمو.",
    fr: "Coaching privé dans mon app.",
  },
  lead: {
    en: "Most coaches hand you a PDF and disappear. I write the plan and check in with you every day. The app is where you see training, meals, and progress in one place.",
    ar: isolateLatin(
      "الأغلبية ديال les coachs كيعطيوك PDF وكيخليوك بوحدك. أنا اللي كنقاد البرنامج وكنتابع معاك نهار بنهار. التطبيق غير بلاصة كتلقا فيها التمارين، الماكلة والتقدم ديالك."
    ),
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
    const softMotion = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const getTravel = () => {
        const overflow = track.scrollWidth - window.innerWidth;
        return Math.max(overflow + 48, 1);
      };

      gsap.set(track, { x: 0, force3D: true });

      // Pin only the phones stage so the full phone frame fits in view.
      // Keep carousel order LTR in every language so labels always match images
      // (page dir=rtl was reversing tabs/track independently before).
      const st = ScrollTrigger.create({
        trigger: pin,
        start: "top top",
        end: () => `+=${Math.max(getTravel() * 1.15, window.innerHeight * 1.35)}`,
        pin: true,
        scrub: softMotion ? 0.2 : 0.65,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const travel = getTravel();
          gsap.set(track, { x: -travel * self.progress, force3D: true });

          const idx = Math.min(
            SCREENS.length - 1,
            Math.round(self.progress * (SCREENS.length - 1))
          );
          setActive(idx);

          if (softMotion) return;
          const center = window.innerWidth / 2;
          track.querySelectorAll<HTMLElement>("[data-phone]").forEach((phone) => {
            const r = phone.getBoundingClientRect();
            const c = r.left + r.width / 2;
            const t = Math.min(1, Math.abs(c - center) / (window.innerWidth * 0.4));
            const focus = 1 - t;
            phone.style.opacity = String(0.5 + focus * 0.5);
            phone.style.transform = `scale(${(0.92 + focus * 0.08).toFixed(3)})`;
          });
        },
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      const imgs = Array.from(track.querySelectorAll("img"));
      imgs.forEach((img) => img.addEventListener("load", refresh));
      const t1 = window.setTimeout(refresh, 100);
      const t2 = window.setTimeout(refresh, 600);

      return () => {
        window.removeEventListener("load", refresh);
        imgs.forEach((img) => img.removeEventListener("load", refresh));
        window.clearTimeout(t1);
        window.clearTimeout(t2);
        st.kill();
      };
    }, root);

    return () => ctx.revert();
  }, [language]);

  const jumpTo = (index: number) => {
    setActive(index);
    const pin = pinRef.current;
    if (!pin) return;
    const { ScrollTrigger } = getGsap();
    const st = ScrollTrigger.getAll().find((s) => s.trigger === pin);
    if (!st) return;
    const progress = SCREENS.length <= 1 ? 0 : index / (SCREENS.length - 1);
    window.scrollTo({ top: st.start + (st.end - st.start) * progress, behavior: "smooth" });
  };

  return (
    <section id="app" ref={rootRef} className="relative bg-ink border-t border-white/[0.08]">
      <div className="px-5 pt-8 pb-4 md:px-10 md:pt-12 lg:px-14">
        <div className={`max-w-3xl ${isRTL ? "mr-0 ml-auto text-right" : ""}`}>
          <p className="font-editorial text-[11px] uppercase tracking-[0.2em] text-red-br mb-2">
            {copy.eyebrow[lang]}
          </p>
          <h2
            className={`mega-type text-white ${
              lang === "ar"
                ? "text-[clamp(1.5rem,5vw,3rem)] leading-[1.2]"
                : "text-[clamp(2rem,5.5vw,4rem)]"
            }`}
          >
            {copy.title[lang]}
          </h2>
          <p className="mt-2 md:mt-3 font-editorial text-sm md:text-base text-white/55 leading-relaxed max-w-xl">
            {copy.lead[lang]}
          </p>
        </div>
      </div>

      <div ref={pinRef} className="relative bg-ink">
        <div className="px-5 md:px-10 lg:px-14 pb-2">
          <div
            className={`flex flex-wrap gap-2 ${isRTL ? "justify-end" : "justify-start"}`}
            // Keep button order identical to phone order (Home → Photos).
            style={{ direction: "ltr" }}
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

        <div className="relative w-full overflow-hidden pt-3 pb-8 md:pb-12">
          <div
            ref={trackRef}
            className="flex items-end gap-4 md:gap-5 px-5 md:px-10"
            style={{ width: "max-content", willChange: "transform", direction: "ltr" }}
          >
            {SCREENS.map((screen) => (
              <figure
                key={screen.src}
                data-phone
                className="relative shrink-0 h-[min(68vh,560px)] aspect-[9/19] border border-white/20 bg-black overflow-hidden shadow-2xl shadow-black/50 origin-center select-none"
                style={{ opacity: 0.85, transform: "scale(1)" }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-2 w-10 rounded-full bg-black/90 z-20" />
                <img
                  src={screen.src}
                  alt={screen.label[lang]}
                  className="absolute inset-0 h-full w-full object-cover object-top pointer-events-none"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
                {/* Soft brand veil — harder to lift a clean screenshot */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none mix-blend-soft-light opacity-40"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 20%, rgba(220,38,38,0.18), transparent 45%), linear-gradient(160deg, rgba(0,0,0,0.05), rgba(0,0,0,0.25))",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none z-10" />
                <figcaption className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 font-editorial text-[9px] uppercase tracking-[0.16em] text-white/90">
                  {screen.label[lang]}
                </figcaption>
              </figure>
            ))}
            <div className="shrink-0 w-[28vw] md:w-[32vw]" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPhonesSection;
