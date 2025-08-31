import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import KartSection from "@/components/KartSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LocationSection />
      <KartSection />
      <Footer />
    </div>
  );
};

export default Index;
