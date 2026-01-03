import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import PaidProductSection from "@/components/sections/PaidProductSection";
import StickyApplyButton from "@/components/StickyApplyButton";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import { useEffect } from "react";

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-background">
            <LanguageSelectorModal />
            <Header />
            <div className="pt-20">
                <LeadMagnetSection />
                <PaidProductSection />
            </div>
            <Footer />
            <StickyApplyButton />
        </main>
    );
};

export default Products;
