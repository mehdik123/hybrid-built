import Header from "@/components/Header";
import BackButton from "@/components/BackButton";
import Footer from "@/components/sections/Footer";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import PaidProductSection from "@/components/sections/PaidProductSection";
import StickyApplyButton from "@/components/StickyApplyButton";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import MaskedLines from "@/components/MaskedLines";

const Products = () => {
  const { language, isRTL } = useLanguage();
  const t = translations.products;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-ink">
      <LanguageSelectorModal />
      <Header />
      <div className={`pt-28 md:pt-36 pb-4 container-tight px-4 sm:px-8 ${isRTL ? "text-right" : ""}`}>
        <BackButton className="mb-8" />
        <div className="max-w-3xl mb-10 md:mb-14">
          <MaskedLines
            lines={[t.title1[language], t.title2[language]]}
            lineClassName="text-4xl md:text-5xl lg:text-6xl"
            redWordIndex={language === "en" ? { line: 1, wordIndex: 0 } : undefined}
          />
          <p className="mt-4 font-editorial text-muted-foreground">{t.subtitle[language]}</p>
        </div>
      </div>
      <PaidProductSection />
      <LeadMagnetSection />
      <Footer />
      <StickyApplyButton />
    </main>
  );
};

export default Products;
