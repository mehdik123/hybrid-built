import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TransformationsSection from "@/components/sections/TransformationsSection";
import VideoTestimonialSection from "@/components/sections/VideoTestimonialSection";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import VSLSection from "@/components/sections/VSLSection";
import PaidProductSection from "@/components/sections/PaidProductSection";
import CoachingSection from "@/components/sections/CoachingSection";
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
      <TransformationsSection />
      <VideoTestimonialSection />
      <LeadMagnetSection />
      <VSLSection />
      <PaidProductSection />
      <CoachingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyApplyButton />
    </main>
  );
};

export default Index;
