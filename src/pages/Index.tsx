import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductTeaser from "@/components/sections/ProductTeaser";
import TransformationsSection from "@/components/sections/TransformationsSection";
import VideoTestimonialSection from "@/components/sections/VideoTestimonialSection";
import VSLSection from "@/components/sections/VSLSection";
import CoachingSection from "@/components/sections/CoachingSection";
import FreeToolsSection from "@/components/sections/FreeToolsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";
import StickyApplyButton from "@/components/StickyApplyButton";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <LanguageSelectorModal />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductTeaser />
      <TransformationsSection />
      <VideoTestimonialSection />
      <VSLSection />
      <FreeToolsSection />
      <CoachingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyApplyButton />
    </main>
  );
};

export default Index;
