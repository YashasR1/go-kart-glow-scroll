import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/lovable-uploads/5b49cc52-0bd9-426e-ae50-2810a3e072e3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Racing grid overlay */}
      <div className="absolute inset-0 racing-grid opacity-20" />
      
      {/* Navigation */}
      <nav className="fixed top-8 right-8 z-50 flex flex-row gap-6">
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

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
          VELOCITY
          <span className="block text-primary">KARTING</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience the ultimate racing adventure with our premium go-karts and professional tracks
        </p>
        <Button 
          onClick={() => scrollToSection('karts')}
          className="btn-racing text-lg"
        >
          Start Racing
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;