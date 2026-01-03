import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import PaidProductSection from "@/components/sections/PaidProductSection";
import StickyApplyButton from "@/components/StickyApplyButton";
import LanguageSelectorModal from "@/components/LanguageSelectorModal";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/contexts/AppContext";

const Products = () => {
    const { language, isRTL } = useLanguage();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-background">
            <LanguageSelectorModal />
            <Header />
            <div className="pt-32 md:pt-40 pb-8 container-tight px-4 sm:px-8">
                <Link
                    to="/"
                    className={`inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:text-primary/80 transition-colors group mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                    <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
                    {translations.nav.backToHome[language]}
                </Link>
                <LeadMagnetSection />
                <PaidProductSection />
            </div>
            <Footer />
            <StickyApplyButton />
        </main>
    );
};

export default Products;
