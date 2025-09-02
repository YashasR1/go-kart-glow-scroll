import { Kart } from "@/lib/types";

interface KartCardProps {
  kart: Kart;
}

export const KartCard: React.FC<KartCardProps> = ({
  kart,
}) => {
  return (
    <div className="w-full p-6 rounded-xl overflow-hidden bg-black border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF0000]/10">
      <div className="relative w-full aspect-[5/4] mb-3">
        <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
          <img src={kart.icon} alt={kart.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="absolute top-3 right-3 bg-[#FF0000] text-white px-3 py-1 rounded-full text-sm font-medium">
          {kart.price}
        </div>
      </div>
      
      <div className="px-1">
        <h3 className="text-2xl font-bold text-white mb-2 hover:text-[#FF0000] transition-colors">
          {kart.name}
        </h3>
        
        <div className="mb-3">
          <span className="inline-block bg-[#FF0000]/20 text-[#FF0000] px-3 py-1 rounded-full text-sm font-medium">
            {kart.age}
          </span>
        </div>
        
        <p className="text-gray-300 text-base leading-relaxed">
          {kart.description}
        </p>
      </div>
    </div>
  );
};
