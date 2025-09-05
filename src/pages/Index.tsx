import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import TipsAndTricks from "@/components/TipsAndTricks";
import BowlingSection from "@/components/BowlingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { KartSection } from "@/components/Kart/KartSection";
import Navbar from "../components/Navbar";


const kartTypes = [
    {
      id: "1",
      name: "160CC kart",
      age: "Kids kart 7-10 years.",
      icon: "/10-BHP-Kart-Large_old.png",
      description: "Low powered and high handling capability.",
      price : "Rs. 400/- for 6 Laps"
    },
    {
      id: "2",
      name: "Twin Kart",
      age: "child above 5 years and below 7 years", 
      icon: "/Twin-Kart-Large.png",
      description: "Low powered and high handling capability.",
      price : "Rs. 500/- for 6 Laps"
    },
    {
      id: "3",
      name: "200CC kart",
      age : "Adult karts",
      icon: "/10-BHP-Kart-Large.png",
      description: "High powered engine, to just zoom through any corner.",
      price : "Rs. 500/- for 6 Laps"
    },
    {
      id: "4",
      name: "270CC Kart",
      age: "Adult karts",
      icon: "/12-BHP-Kart-Large.png",
      description: "All the power you ever wanted !!Very high powered engines, for that skilled driver in you.",
      price: "Rs. 600/- for 6 Laps"
    },
    {
      id: "5",
      name: "Pro Kart",
      age: "Adult karts",
      icon: "/Pro-Kart-Large.png",
      description: "Professional karts with twin engines.Packed with all the power and handling.",
      price: "Rs. 800/- for 6 Laps"
    }
  ];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LocationSection />
      <KartSection karts={kartTypes} onAddClick={() => {}} />
      <TipsAndTricks />
      <BowlingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;