import { Ruler, MoveHorizontal, Zap } from "lucide-react";

export default function TrackStats() {
  return (
    <div className="flex justify-center gap-20 text-white exo-text">
      {/* Track Length */}
      <div className="flex flex-col items-center">
        <div className="p-2 rounded-full border border-white/20 bg-black/20">
          <Ruler className="w-5 h-5 text-white" />
        </div>
        <p className="text-2xl font-bold mt-2">800m</p>
        <p className="text-sm text-gray-400">TRACK LENGTH</p>
      </div>

      {/* Engine Power */}
      <div className="flex flex-col items-center">
        <div className="border border-white/20 bg-black/20 p-2 rounded-full">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <p className="text-2xl mt-2 font-bold">270CC</p>
        <p className="text-sm text-gray-400">ENGINE POWER</p>
      </div>

      {/* Track Width */}
      <div className="flex flex-col items-center">
        <div className="border border-white/20 bg-black/20 p-2 rounded-full">
          <MoveHorizontal className="w-5 h-5 text-white" />
        </div>
        <p className="text-2xl mt-2 font-bold">8m</p>
        <p className="text-sm text-gray-400">TRACK WIDTH</p>
      </div>
    </div>
  );
}
