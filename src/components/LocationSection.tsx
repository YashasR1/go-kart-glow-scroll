import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  const openMaps = () => {
    // Opens Google Maps with a sample location (you can change this)
    window.open('https://maps.app.goo.gl/54VswPKNGydgNVPp9', '_blank');
  };

  return (
    <section id="location" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Us on the <span className="text-primary">Track</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video */}
          <div className="relative">
            <div className="aspect-square bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/GoKart video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              </div>
            </div>
          </div>

          {/* Right Column - Map and Info */}
          <div className="space-y-8">
            {/* Embedded Map */}
                <div className="relative h-64 md:h-80 bg-card border border-border rounded-xl overflow-hidden">
                  <iframe
                  src="https://www.google.com/maps/place/Grips+Gokarting+%26+Bowling/@12.8940209,77.4600277,18z/data=!4m6!3m5!1s0x3bae38c8260f661f:0x3850414ed8976f9e!8m2!3d12.893367!4d77.4606182!16s%2Fg%2F1tf9lq1x?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 w-full h-full"
                  />
                </div>

            {/* Interactive Map
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
            </div> */}

            {/* Location Details */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300">
              <p className="text-lg leading-relaxed">
                <span className="font-bold text-primary">The face of motorsport in India</span> is about to change forever. 
                <span className="block mt-4">Get set to experience the <span className="text-accent font-semibold">best karting experience</span> in this state-of-the-art infrastructure.</span>
                <span className="block mt-4 text-muted-foreground">The race track is located just <span className="text-foreground font-medium">2.5 KMS</span> from Kengeri on Mysore road and <span className="text-foreground font-medium">0.5 KMS</span> from the NICE road towards Mysore and has superb road links from the garden city.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;