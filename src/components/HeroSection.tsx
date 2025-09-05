import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import TrackStats from "./Stats";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pb-8"
    >
      {/* Background image with mobile optimization */}
      <div className="absolute inset-0 w-full bg-black overflow-hidden">
        <img
          src="/heroimage1.png"
          alt="Background"
          className="object-cover w-full h-full opacity-90 scale-150 sm:scale-100"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="flex flex-col items-center pt-[110px] px-4">
        <h1 className="relative figtree-text text-[28px] sm:text-[35px] md:text-[40px] font-bold text-white z-20 text-center w-full tracking-wide">
          Let’s Go Racing!
        </h1>
        <p className="relative figtree-text-p text-white/80 z-50 mt-1 text-base sm:text-lg text-center max-w-md">
          Your ultimate go-karting adventure begins here.
        </p>
      </div>
      
      <div className="relative z-20 mt-auto">
        <TrackStats />
      </div>

      {/* Top left corner glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full bg-red-500/50 blur-[150px] -translate-x-1/4 -translate-y-1/4 z-10 mix-blend-screen" />

      {/* Bottom right corner glow */}
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full bg-red-500/50 blur-[150px] translate-x-1/4 translate-y-1/4 z-10 mix-blend-screen" />
    </section>
  );
};

export default HeroSection;
