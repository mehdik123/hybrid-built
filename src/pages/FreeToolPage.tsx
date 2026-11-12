import { useEffect, useState } from "react";
import { ArrowLeft, CalendarDays, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";

type Focus = "muscle" | "strength" | "hybrid";
type Language = "en" | "ar" | "fr";
type Localized = Record<Language, string>;

const FreeToolPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations.freeToolPage;
  const [days, setDays] = useState(3);
  const [focus, setFocus] = useState<Focus>("hybrid");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const splitKey = ({ 2: "two", 3: "three", 4: "four", 5: "five", 6: "six" } as const)[days as 2 | 3 | 4 | 5 | 6];
  const split = t.splits[splitKey];

  const dayButtonLabel = (dayCount: number) => ({ en: `${dayCount} days per week`, ar: `${dayCount} أيام في الأسبوع`, fr: `${dayCount} jours par semaine` })[language];

  return (
    <main className="min-h-screen bg-ink">
      <LanguageSelectorModal />
      <Header />
      <div className={`container-tight mx-auto max-w-4xl px-5 pb-20 pt-28 md:px-8 md:pb-24 md:pt-36 ${isRTL ? "text-right" : ""}`}>
        <Link to="/" className={`mb-8 inline-flex min-h-11 items-center gap-2 font-editorial text-sm text-muted-foreground transition-colors hover:text-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {language === "ar" ? "العودة للموقع" : language === "fr" ? "Retour au site" : "Back to the site"}
        </Link>

        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-editorial text-[10px] uppercase tracking-[0.25em] text-red-br">
            {language === "ar" ? "أداة تدريب مجانية" : language === "fr" ? "OUTIL D’ENTRAÎNEMENT GRATUIT" : "FREE TRAINING TOOL"}
          </p>
          <h1 className="font-display text-4xl uppercase leading-[1.02] text-foreground md:text-6xl">
            {t.title1[language]} <span className="text-red-br">{t.title2[language]}</span>
          </h1>
          <p className="mt-4 max-w-xl font-editorial text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.subtitle[language]}
          </p>
        </div>

        <section className="border-y border-white/[0.1] py-7 md:py-9" aria-labelledby="split-days-title">
          <div className={`mb-4 flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <CalendarDays className="h-5 w-5 text-red-br" aria-hidden="true" />
            <h2 id="split-days-title" className="font-editorial text-xs uppercase tracking-[0.18em] text-foreground">
              {t.calculatorTitle[language]}
            </h2>
          </div>
          <div className={`flex flex-wrap gap-2 ${isRTL ? "flex-row-reverse" : ""}`} role="group" aria-label={t.calculatorTitle[language]}>
            {[2, 3, 4, 5, 6].map((dayCount) => (
              <Button
                key={dayCount}
                type="button"
                variant={days === dayCount ? "hero" : "outline"}
                aria-pressed={days === dayCount}
                aria-label={dayButtonLabel(dayCount)}
                onClick={() => setDays(dayCount)}
                className="h-12 min-w-12 rounded-none px-4 font-display text-lg"
              >
                {dayCount}
              </Button>
            ))}
          </div>

          <div className="mb-4 mt-8 flex items-center gap-3">
            <Dumbbell className="h-5 w-5 text-red-br" aria-hidden="true" />
            <h2 className="font-editorial text-xs uppercase tracking-[0.18em] text-foreground">
              {t.focusTitle[language]}
            </h2>
          </div>
          <div className={`flex flex-wrap gap-2 ${isRTL ? "flex-row-reverse" : ""}`} role="group" aria-label={t.focusTitle[language]}>
            {(["muscle", "strength", "hybrid"] as Focus[]).map((option) => (
              <Button
                key={option}
                type="button"
                variant={focus === option ? "hero" : "outline"}
                aria-pressed={focus === option}
                onClick={() => setFocus(option)}
                className="min-h-11 rounded-none px-4 font-editorial text-sm"
              >
                {t.goals[option][language]}
              </Button>
            ))}
          </div>
        </section>

        <section className="py-8 md:py-10" aria-live="polite" aria-atomic="true">
          <p className="mb-2 font-editorial text-[10px] uppercase tracking-[0.22em] text-red-br">
            {t.recommendationTitle[language]}
          </p>
          <h2 className="font-display text-2xl uppercase leading-tight text-foreground md:text-4xl">
            {split.title[language]}
          </h2>
          <p className="mt-3 max-w-2xl font-editorial text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.focusNotes[focus][language]}
          </p>
          <div className="mt-6 grid gap-x-8 border-t border-white/[0.1] sm:grid-cols-2">
            {split.sessions.map((session: Localized, index: number) => (
              <div key={index} className={`flex min-h-14 items-center justify-between gap-4 border-b border-white/[0.08] py-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <span className="font-editorial text-sm text-foreground">{session[language]}</span>
                <span className="font-editorial text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {language === "ar" ? `الحصة ${index + 1}` : language === "fr" ? `SÉANCE ${index + 1}` : `SESSION ${index + 1}`}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-editorial text-xs text-muted-foreground">{t.noEmail[language]}</p>
        </section>
      </div>
    </main>
  );
};

export default FreeToolPage;
