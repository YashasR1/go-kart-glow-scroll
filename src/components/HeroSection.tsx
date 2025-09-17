import TrackStats from "./Stats";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pb-8"
    >
      {/* Background image with mobile optimization */}
      <motion.div
        className="absolute inset-0 w-full bg-black overflow-hidden"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <img
          src="/heroimage1.webp"
          alt="Background"
          className="object-cover w-full h-full opacity-90 scale-150 sm:scale-100"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -40, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="flex flex-col items-center pt-[110px] px-4"
      >
        <h1 className="relative figtree-text text-[28px] sm:text-[35px] md:text-[40px] font-bold text-white z-20 text-center w-full tracking-wide">
          Let’s Go Racing!
        </h1>
        <p className="relative figtree-text-p text-white/80 z-20 mt-1 text-base sm:text-lg text-center max-w-[300px] sm:max-w-lg">
          Your ultimate go-karting adventure begins here.
        </p>
      </motion.div>

      <div className="relative z-20 mt-auto">
        <TrackStats />
      </div>

      {/* Top left corner glow */}
      <div className="absolute top-0 left-0 sm:w-[400px] sm:h-[300px] w-[300px] h-[200px] rounded-full bg-red-500/50 blur-[150px] -translate-x-1/4 -translate-y-1/4 z-10 mix-blend-screen" />

      {/* Bottom right corner glow */}
      <div className="absolute bottom-0 right-0 w-[260px] h-[160px] sm:w-[250px] sm:h-[250px] rounded-full bg-red-500/50 blur-[150px] translate-x-1/4 translate-y-1/4 z-10 mix-blend-screen" />
    </section>
  );
};

export default HeroSection;
