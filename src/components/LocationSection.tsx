import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  const openMaps = () => {
    // Opens Google Maps with a sample location (you can change this)
    window.open('https://maps.google.com/?q=Go+Kart+Track+Near+Me', '_blank');
  };

  return (
    <section id="location" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Us on the <span className="text-primary">Track</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Located in the heart of the city with easy access and premium facilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-square bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 group">
              <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">Premium Facility</h3>
                  <p className="text-muted-foreground">State-of-the-art racing complex with professional-grade tracks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map and Info */}
          <div className="space-y-8">
            {/* Interactive Map */}
            <div 
              onClick={openMaps}
              className="relative h-64 bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:border-primary transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-lg font-semibold">Click to Get Directions</p>
                  <p className="text-muted-foreground text-sm">Open in Google Maps</p>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Track Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">123 Racing Boulevard</p>
                    <p className="text-muted-foreground text-sm">Speedway City, RC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Open Daily</p>
                    <p className="text-muted-foreground text-sm">10:00 AM - 10:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">(555) 123-KART</p>
                    <p className="text-muted-foreground text-sm">Call for reservations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;