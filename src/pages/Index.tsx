import { Suspense, lazy, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import StickyApplyButton from "@/components/StickyApplyButton";
import ScrollProgress from "@/components/ScrollProgress";

const ProofSection = lazy(() => import("@/components/sections/ProofSection"));
const AppPhonesSection = lazy(() => import("@/components/sections/AppPhonesSection"));
const OfferSection = lazy(() => import("@/components/sections/OfferSection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const EntryProductsSection = lazy(() => import("@/components/sections/EntryProductsSection"));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const SectionLoader = () => (
  <div className="min-h-[160px] w-full flex items-center justify-center bg-ink" aria-hidden>
    <div
      className="w-6 h-6 border border-white/20 border-t-red-br animate-spin"
      style={{ animationDuration: "0.8s" }}
    />
  </div>
);

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const timer = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-ink relative">
      <LanguageSelectorModal />
      <Header />
      <ScrollProgress />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <ProofSection />
        <AppPhonesSection />
        <OfferSection />
        <ProcessSection />
        <EntryProductsSection />
        <FinalCTASection />
        <Footer />
      </Suspense>
      <StickyApplyButton />
    </main>
  );
};

export default Index;
