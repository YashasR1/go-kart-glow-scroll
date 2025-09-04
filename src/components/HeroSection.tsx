import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Background image with mobile optimization */}
      <div className="absolute inset-0 w-full bg-black">
        <img 
          src="/heroimage.png" 
          alt="Background" 
          className="object-contain md:object-cover w-full h-full"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      
      {/* Navigation - Desktop */}
      <nav className="hidden md:flex fixed top-8 right-8 z-50 gap-6">
        <button 
          onClick={() => scrollToSection('home')}
          className="nav-link text-lg font-medium"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('karts')}
          className="nav-link text-lg font-medium"
        >
          Kart
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="nav-link text-lg font-medium"
        >
          Contact
        </button>
      </nav>

      {/* Navigation - Mobile Dropdown */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="bg-black/20 border-white/20 hover:bg-white/10">
              <Menu className="h-4 w-4 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-black/80 backdrop-blur-md border-white/20">
            <DropdownMenuItem onClick={() => scrollToSection('home')} className="text-white hover:bg-white/10">
              Home
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('karts')} className="text-white hover:bg-white/10">
              Kart
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('contact')} className="text-white hover:bg-white/10">
              Contact
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
    </section>
  );
};

export default HeroSection;