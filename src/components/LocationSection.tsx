import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {

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
                {/* Embedded Map */}
<div className="relative h-64 md:h-80 bg-card border border-border rounded-xl overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.606500654255!2d77.46002768775325!3d12.894020893584884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae38c8260f661f%3A0x3850414ed8976f9e!2sGrips%20Gokarting%20%26%20Bowling!5e0!3m2!1sen!2sin!4v1756989568650!5m2!1sen!2sin"
    width="100%"
    height="100%"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="border-0 w-full h-full"
  />
</div>


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