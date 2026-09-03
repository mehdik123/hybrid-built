import { Suspense, lazy, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import StickyApplyButton from "@/components/StickyApplyButton";
import ScrollProgress from "@/components/ScrollProgress";
import BackButton from "@/components/BackButton";
import { useLanguage } from "@/contexts/AppContext";

const AudienceSection = lazy(() => import("@/components/sections/AudienceSection"));
const AppSection = lazy(() => import("@/components/sections/AppSection"));
const ProofSection = lazy(() => import("@/components/sections/ProofSection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const OfferSection = lazy(() => import("@/components/sections/OfferSection"));
const EntryProductsSection = lazy(() => import("@/components/sections/EntryProductsSection"));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const SectionLoader = () => (
  <div className="min-h-[200px] w-full flex items-center justify-center bg-ink" aria-hidden>
    <div
      className="w-8 h-8 rounded-full border border-white/15 border-t-red-br animate-spin"
      style={{ animationDuration: "0.85s" }}
    />
  </div>
);

const Index = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-ink relative">
      <LanguageSelectorModal />
      <Header />
      <div className={`absolute top-24 md:top-32 z-30 ${isRTL ? "right-4 md:right-8" : "left-4 md:left-8"}`}>
        <BackButton className="mb-0" />
      </div>
      <ScrollProgress />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <AudienceSection />
        <AppSection />
        <ProofSection />
        <ProcessSection />
        <OfferSection />
        <EntryProductsSection />
        <FinalCTASection />
        <Footer />
      </Suspense>
      <StickyApplyButton />
    </main>
  );
};

export default Index;
