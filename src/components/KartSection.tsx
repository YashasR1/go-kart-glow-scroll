import { Zap, Shield, Gauge, Trophy } from "lucide-react";

const KartSection = () => {
  const kartTypes = [
    {
      name: "Lightning Pro",
      speed: "45 MPH",
      icon: Zap,
      description: "Professional racing kart with advanced handling and speed control"
    },
    {
      name: "Thunder Elite",
      speed: "40 MPH", 
      icon: Trophy,
      description: "Competition-grade kart perfect for experienced racers"
    },
    {
      name: "Storm Racer",
      speed: "35 MPH",
      icon: Gauge,
      description: "High-performance kart with precision steering and acceleration"
    },
    {
      name: "Bolt Junior",
      speed: "25 MPH",
      icon: Shield,
      description: "Safe and fun kart designed for younger drivers and beginners"
    }
  ];

  return (
    <section id="karts" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Racing <span className="text-primary">Fleet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our collection of premium go-karts, each designed for maximum performance and safety
          </p>
        </div>

        {/* Horizontal Scrolling Karts */}
        <div className="relative overflow-hidden mb-20">
          <div className="marquee">
            {/* First set */}
            {kartTypes.map((kart, index) => (
              <div key={`first-${index}`} className="kart-card">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <kart.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{kart.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">{kart.speed}</div>
                  <p className="text-muted-foreground text-sm">{kart.description}</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {kartTypes.map((kart, index) => (
              <div key={`second-${index}`} className="kart-card">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <kart.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{kart.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">{kart.speed}</div>
                  <p className="text-muted-foreground text-sm">{kart.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bowling Section */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Bowling Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-accent rounded-full relative">
                      <div className="absolute top-2 left-3 w-2 h-2 bg-background rounded-full"></div>
                      <div className="absolute top-3 left-2 w-1 h-1 bg-background rounded-full"></div>
                      <div className="absolute top-3 left-4 w-1 h-1 bg-background rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">Bowling Available</h3>
                  <p className="text-muted-foreground text-sm">Premium bowling lanes</p>
                </div>
              </div>
            </div>

            {/* Right - Bowling Description */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                More Than Just <span className="text-accent">Racing</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Take a break from the track and enjoy our state-of-the-art bowling alley. 
                With 12 premium lanes featuring the latest scoring technology and comfortable 
                seating areas, it's the perfect way to extend your racing experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're celebrating a victory or planning a group event, our bowling 
                facility offers the perfect complement to your go-karting adventure. 
                Book a combo package and save on both activities!
              </p>
              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">12</div>
                  <div className="text-sm text-muted-foreground">Lanes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">8</div>
                  <div className="text-sm text-muted-foreground">Players/Lane</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">HD</div>
                  <div className="text-sm text-muted-foreground">Scoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KartSection;