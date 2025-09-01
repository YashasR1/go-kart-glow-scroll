import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import KartSection from "@/components/KartSection";
import TipsAndTricks from "@/components/TipsAndTricks";
import BowlingSection from "@/components/BowlingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LocationSection />
      <KartSection />
      <TipsAndTricks />
      <BowlingSection />
      <Footer />
    </div>
  );
};

export default Index;
