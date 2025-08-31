import { Zap, Shield, Gauge, Trophy } from "lucide-react";

const KartSection = () => {
  const kartTypes = [
    {
      name: "160CC kart",
      age: "Kids kart 7-10 years.",
      icon: "/10-BHP-Kart-Large_old.png",
      description: "Low powered and high handling capability.",
      price : "Rs. 400/- for 6 Laps"
    },
    {
      name: "Twin Kart",
      age: "child above 5 years and below 7 years", 
      icon: "/Twin-Kart-Large.png",
      description: "Low powered and high handling capability.",
      price : "Rs. 500/- for 6 Laps"
    },
    {
      name: "200CC kart",
      age : "Adult karts",
      icon: "/10-BHP-Kart-Large.png",
      description: "High powered engine, to just zoom through any corner.",
      price : "Rs. 500/- for 6 Laps"
    },
    {
      name: "270CC Kart",
      age: "Adult karts",
      icon: "/12-BHP-Kart-Large.png",
      description: "All the power you ever wanted !!Very high powered engines, for that skilled driver in you.",
      price: "Rs. 600/- for 6 Laps"
    },
    {
      name: "Pro Kart",
      age: "Adult karts",
      icon: "/Pro-Kart-Large.png",
      description: "Professional karts with twin engines.Packed with all the power and handling.",
      price: "Rs. 800/- for 6 Laps"
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
              <div key={`first-${index}`} className="kart-card min-w-[400px] p-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-80 h-64 bg-primary/10 rounded-xl flex items-center justify-center mb-8 overflow-hidden shadow-lg">
                    <img src={kart.icon} alt={kart.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{kart.name}</h3>
                  <div className="text-lg font-semibold text-primary mb-3">{kart.age}</div>
                  <p className="text-muted-foreground text-sm mb-4">{kart.description}</p>
                  <div className="bg-primary/10 rounded-lg p-4 w-full">
                    <span className="text-xl font-bold text-primary">{kart.price}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {kartTypes.map((kart, index) => (
              <div key={`second-${index}`} className="kart-card min-w-[400px] p-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-80 h-64 bg-primary/10 rounded-xl flex items-center justify-center mb-8 overflow-hidden shadow-lg">
                    <img src={kart.icon} alt={kart.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{kart.name}</h3>
                  <div className="text-lg font-semibold text-primary mb-3">{kart.age}</div>
                  <p className="text-muted-foreground text-sm mb-4">{kart.description}</p>
                  <div className="bg-primary/10 rounded-lg p-4 w-full">
                    <span className="text-xl font-bold text-primary">{kart.price}</span>
                  </div>
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
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl overflow-hidden">
                <img 
                  src="/bowling ball.png" 
                  alt="Bowling Ball" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right - Bowling Description */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                More Than Just <span className="text-accent">Racing</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Here's the latest addition to the grips world of entertainment. If you had enough of outdoor gokarting fun, walk in to our bowling arena and try your skills to strike at out bowling alleys. The bowling alleys are of international standards made of imported top class bowling equipments
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're celebrating a victory or planning a group event, our bowling 
                facility offers the perfect complement to your go-karting adventure. 
                Book a combo package and save on both activities!
              </p>
              <div className="bg-accent/10 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2">
                  <span className="text-accent">Pricing</span>
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">All days</span>
                  <span className="text-2xl font-bold text-accent">₹280</span>
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