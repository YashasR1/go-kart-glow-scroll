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
        backgroundPosition: '0 -200px',
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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 -mt-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
          <span className="block mb-[-10px]">GRIPS</span>
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