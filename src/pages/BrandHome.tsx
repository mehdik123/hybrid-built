import { Suspense, lazy, useEffect } from "react";
import Header from "@/components/Header";
import BrandHero from "@/components/brand/BrandHero";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import ScrollProgress from "@/components/ScrollProgress";

const BrandWork = lazy(() => import("@/components/brand/BrandWork"));
const BrandPresence = lazy(() => import("@/components/brand/BrandPresence"));
const BrandClosing = lazy(() => import("@/components/brand/BrandClosing"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const SectionLoader = () => (
  <div className="min-h-[120px] w-full flex items-center justify-center bg-black" aria-hidden>
    <div
      className="w-6 h-6 border border-white/20 border-t-red-br animate-spin"
      style={{ animationDuration: "0.8s" }}
    />
  </div>
);

/** El Mehdi Kamal personal brand homepage */
const BrandHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black relative">
      <LanguageSelectorModal />
      <Header variant="brand" />
      <ScrollProgress />
      <BrandHero />
      <Suspense fallback={<SectionLoader />}>
        <BrandWork />
        <BrandPresence />
        <BrandClosing />
        <Footer />
      </Suspense>
    </main>
  );
};

export default BrandHome;
