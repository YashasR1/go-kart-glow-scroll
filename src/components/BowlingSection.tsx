const BowlingSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Bowling Section */}
        <div className="bg-[#080808] border border-border rounded-2xl p-8 md:p-12">
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

export default BowlingSection;