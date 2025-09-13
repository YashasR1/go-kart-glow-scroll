import { useEffect, useState } from "react";
import { KartCard } from "./KartCard";
import { Kart } from "@/lib/types";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface KartSectionProps {
  karts: Kart[];
  onAddClick: () => void;
}

export const KartSection: React.FC<KartSectionProps> = ({
  karts,
  onAddClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const topKarts = [...karts];

  const navigateToKart = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setActiveIndex((current) => (current + 1) % topKarts.length);
    } else {
      setActiveIndex((current) => (current - 1 + topKarts.length) % topKarts.length);
    }
  };

  useEffect(() => {
    if (topKarts.length > 1 && !isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % topKarts.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [topKarts.length, isHovered]);

  return (
    <section id="karts" className="w-full py-16 sm:py-24 px-4 overflow-hidden bg-black">
      {/* Header Badge */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 1 }} // reveals only once, when 60% is in view
      >
        <h2 className="text-4xl font-bold mb-4">
          Our Racing <span className="text-primary">Fleet</span>
        </h2>
      </motion.div>
      <motion.div
        className="text-center lg:mb-24 mb-24"
        initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose from our collection of premium go-karts, each designed for
          maximum performance and safety
        </p>
      </motion.div>
      <motion.div
        className="relative h-[410px] md:h-[380px] max-w-xs sm:max-w-md md:max-w-4xl mx-auto flex items-center justify-center"
        initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.8 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Controls - Only show when hovering and multiple karts */}
        {isHovered && topKarts.length > 1 && (
          <>
            <button
              onClick={() => navigateToKart('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-primary/50"
              aria-label="Previous kart"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateToKart('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-primary/50"
              aria-label="Next kart"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
        {topKarts.map((kart, index) => {
          const offset =
            (index - activeIndex + topKarts.length) %
            topKarts.length;

          let transform = "scale(0.7) translateX(0) translateY(40px)";
          let opacity = "0";
          let zIndex = 0;

          if (topKarts.length === 1) {
            transform = "scale(1) translateX(0) translateY(0)";
            opacity = "1";
            zIndex = 2;
          } else {
            if (offset === 0) {
              // Active card
              transform = "scale(1) translateX(0) translateY(0)";
              opacity = "1";
              zIndex = 2;
            } else if (offset === 1) {
              // Next card
              transform = "scale(0.8) translateX(70%) translateY(30px)";
              opacity = "0.4";
              zIndex = 1;
            } else if (offset === topKarts.length - 1) {
              // Previous card
              transform = "scale(0.8) translateX(-70%) translateY(30px)";
              opacity = "0.4";
              zIndex = 1;
            }
          }

          return (
            <div
              key={kart.id}
              className="absolute w-full sm:w-4/5 md:w-1/2 lg:w-[45%] transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform, zIndex, opacity }}
            >
              <div
                className={`w-full h-full transition-shadow duration-1000 rounded-2xl ${
                  offset === 0 ? "shadow-xl shadow-[#FF0000]/20" : ""
                }`}
              >
                <KartCard kart={kart} />
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};
