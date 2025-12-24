import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import VSLSection from "@/components/sections/VSLSection";
import TransformationsSection from "@/components/sections/TransformationsSection";
import VideoTestimonialSection from "@/components/sections/VideoTestimonialSection";
import CoachingSection from "@/components/sections/CoachingSection";
import ProductsSection from "@/components/sections/ProductsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";
import StickyApplyButton from "@/components/StickyApplyButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <VSLSection />
      <TransformationsSection />
      <VideoTestimonialSection />
      <CoachingSection />
      <ProductsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyApplyButton />
    </main>
  );
};

export default Index;

