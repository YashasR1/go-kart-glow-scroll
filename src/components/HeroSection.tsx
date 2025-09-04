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
      <div className="absolute inset-0 w-full bg-black">
        <img
          src="/heroimage1.png"
          alt="Background"
          className="object-cover w-full h-full opacity-90"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="flex flex-col items-center pt-[110px] px-4">
        <h1 className="relative figtree-text text-[28px] sm:text-[35px] md:text-[40px] font-bold text-white z-20 text-center w-full tracking-wide">
          Start Your Engines
        </h1>
        <p className="relative figtree-text-p text-white/80 z-50 mt-1 text-base sm:text-lg text-center max-w-xl">
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
      
      {/* Navigation - Desktop */}
      <nav className="hidden md:flex fixed top-8 right-8 z-50 gap-6">
        <button
          onClick={() => scrollToSection("home")}
          className="nav-link text-lg font-medium"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("karts")}
          className="nav-link text-lg font-medium"
        >
          Kart
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="nav-link text-lg font-medium"
        >
          Contact
        </button>
      </nav>

      {/* Navigation - Mobile Dropdown */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-black/20 border-white/20 hover:bg-white/10"
            >
              <Menu className="h-4 w-4 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-black/80 backdrop-blur-md border-white/20"
          >
            <DropdownMenuItem
              onClick={() => scrollToSection("home")}
              className="text-white hover:bg-white/10"
            >
              Home
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => scrollToSection("karts")}
              className="text-white hover:bg-white/10"
            >
              Kart
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => scrollToSection("contact")}
              className="text-white hover:bg-white/10"
            >
              Contact
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default HeroSection;
