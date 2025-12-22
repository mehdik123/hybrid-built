import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CoachingSection from "@/components/sections/CoachingSection";
import TransformationsSection from "@/components/sections/TransformationsSection";
import FAQSection from "@/components/sections/FAQSection";
import ProductsSection from "@/components/sections/ProductsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";
import StickyApplyButton from "@/components/StickyApplyButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoachingSection />
      <TransformationsSection />
      <FAQSection />
      <ProductsSection />
      <FinalCTASection />
      <Footer />
      <StickyApplyButton />
    </main>
  );
};

export default Index;
