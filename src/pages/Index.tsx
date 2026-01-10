import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import StickyApplyButton from "@/components/StickyApplyButton";

// Lazy loaded components
const ProductTeaser = lazy(() => import("@/components/sections/ProductTeaser"));
const TransformationsSection = lazy(() => import("@/components/sections/TransformationsSection"));
const VideoTestimonialSection = lazy(() => import("@/components/sections/VideoTestimonialSection"));
const VSLSection = lazy(() => import("@/components/sections/VSLSection"));
const FreeToolsSection = lazy(() => import("@/components/sections/FreeToolsSection"));
const CoachingSection = lazy(() => import("@/components/sections/CoachingSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection"));
const Footer = lazy(() => import("@/components/sections/Footer"));

// Loading fallback component
const SectionLoader = () => (
  <div className="h-64 w-full flex items-center justify-center bg-background/50 animate-pulse">
    <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <LanguageSelectorModal />
      <Header />
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<SectionLoader />}>
        <TransformationsSection />
        <VideoTestimonialSection />
        <VSLSection />
        <CoachingSection />
        <FreeToolsSection />
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
