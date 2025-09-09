import { MapPin, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";

const LocationSection = () => {
  return (
    <section id="location" className="sm:py-20 px-6 bg-black pt-12 pb-2">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 max-w-xs sm:max-w-md mx-auto">
            Find Us on the <span className="text-primary">Track</span>
          </h2>
        </motion.div>

        <div className="gap-12 items-center">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.8 }}
              className="h-full w-full"
            >
            <div
              className="bg-[#080808] border border-border rounded-xl p-8 hover:border-primary transition-all  w-full duration-300"
            >
              <p className="text-lg leading-relaxed">
                <span className="font-bold text-primary">
                  The face of motorsport in India
                </span>{" "}
                is about to change forever.
                <span className="block mt-4">
                  Get set to experience the{" "}
                  <span className="text-accent font-semibold">
                    best karting experience
                  </span>{" "}
                  in this state-of-the-art infrastructure.
                </span>
                <span className="block mt-4 text-muted-foreground">
                  The race track is located just{" "}
                  <span className="text-foreground font-medium">2.5 KMS</span>{" "}
                  from Kengeri on Mysore road and{" "}
                  <span className="text-foreground font-medium">0.5 KMS</span>{" "}
                  from the NICE road towards Mysore and has superb road links
                  from the garden city.
                </span>
              </p>
              </div>
            </motion.div>

            {/* Embedded Map */}
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.8 }}
              className="bg-card border w-full border-border rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.606500654255!2d77.46002768775325!3d12.894020893584884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae38c8260f661f%3A0x3850414ed8976f9e!2sGrips%20Gokarting%20%26%20Bowling!5e0!3m2!1sen!2sin!4v1756989568650!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
