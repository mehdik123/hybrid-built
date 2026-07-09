import { Suspense, lazy, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import StickyApplyButton from "@/components/StickyApplyButton";
import ScrollProgress from "@/components/ScrollProgress";
import KeywordMarquee from "@/components/motion/KeywordMarquee";
import BackButton from "@/components/BackButton";
import { useLanguage } from "@/contexts/AppContext";

const TransformationsSection = lazy(() => import("@/components/sections/TransformationsSection"));
const CoachingSection = lazy(() => import("@/components/sections/CoachingSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const ProductTeaser = lazy(() => import("@/components/sections/ProductTeaser"));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const SectionLoader = () => (
  <div className="min-h-[280px] w-full flex items-center justify-center bg-background" aria-hidden>
    <div
      className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin"
      style={{ animationDuration: "0.8s" }}
    />
  </div>
);

const Index = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background relative">
      <LanguageSelectorModal />
      <Header />
      <div className={`absolute top-24 md:top-32 z-30 ${isRTL ? "right-4 md:right-8" : "left-4 md:left-8"}`}>
        <BackButton className="mb-0" />
      </div>
      <ScrollProgress />
      <HeroSection />
      <KeywordMarquee />
      <Suspense fallback={<SectionLoader />}>
        <TransformationsSection />
        <AboutSection />
        <CoachingSection />
        <FAQSection />
        <ProductTeaser />
        <FinalCTASection />
        <Footer />
      </Suspense>
      <StickyApplyButton />
    </main>
  );
};

export default Index;
