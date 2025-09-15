import { Ruler, MoveHorizontal, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function TrackStats() {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-20 text-white exo-text mb-8 px-4">
      {/* Track Length */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        className="flex flex-col items-center"
      >
        <div className="p-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm">
          <Ruler className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <p className="text-xl md:text-2xl font-bold mt-2">470m</p>
        <p className="text-xs md:text-sm text-gray-400">TRACK LENGTH</p>
      </motion.div>

      {/* Engine Power */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
        className="flex flex-col items-center"
      >
        <div className="border border-white/20 bg-black/50 backdrop-blur-sm p-2 rounded-full">
          <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <p className="text-xl md:text-2xl mt-2 font-bold">270CC</p>
        <p className="text-xs md:text-sm text-gray-400">ENGINE POWER</p>
      </motion.div>

      {/* Track Width */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
        className="flex flex-col items-center"
      >
        <div className="border border-white/20 bg-black/50 backdrop-blur-sm p-2 rounded-full">
          <MoveHorizontal className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <p className="text-xl md:text-2xl mt-2 font-bold">7m</p>
        <p className="text-xs md:text-sm text-gray-400">TRACK WIDTH</p>
      </motion.div>
    </div>
  );
}
