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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:bg-[position:0_-200px]"
      style={{
        backgroundImage: 'url(/lovable-uploads/5b49cc52-0bd9-426e-ae50-2810a3e072e3.png)'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Racing grid overlay */}
      <div className="absolute inset-0 racing-grid opacity-20" />
      
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

      {/* Hero Content - Mobile Optimized */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6 -mt-10 md:-mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 text-glow">
          <span className="block mb-[-5px] md:mb-[-10px]">GRIPS</span>
          <span className="block text-primary">GOKARTING</span>
        </h1>
        {/* <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience the ultimate racing adventure with our premium go-karts and professional tracks
        </p> */}
      </div>
      
    </section>
  );
};

export default HeroSection;