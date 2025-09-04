import { Ruler, MoveHorizontal, Zap } from "lucide-react";

export default function TrackStats() {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-20 text-white exo-text mb-8 px-4">
      {/* Track Length */}
      <div className="flex flex-col items-center">
        <div className="p-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm">
          <Ruler className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <p className="text-xl md:text-2xl font-bold mt-2">800m</p>
        <p className="text-xs md:text-sm text-gray-400">TRACK LENGTH</p>
      </div>

      {/* Engine Power */}
      <div className="flex flex-col items-center">
        <div className="border border-white/20 bg-black/50 backdrop-blur-sm p-2 rounded-full">
          <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <p className="text-xl md:text-2xl mt-2 font-bold">270CC</p>
        <p className="text-xs md:text-sm text-gray-400">ENGINE POWER</p>
      </div>

      {/* Track Width */}
      <div className="flex flex-col items-center">
        <div className="border border-white/20 bg-black/50 backdrop-blur-sm p-2 rounded-full">
          <MoveHorizontal className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <p className="text-xl md:text-2xl mt-2 font-bold">8m</p>
        <p className="text-xs md:text-sm text-gray-400">TRACK WIDTH</p>
      </div>
    </div>
  );
}
