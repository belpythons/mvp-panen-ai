import { Commodity } from "@/types";
import { CommodityCard } from "./CommodityCard";

export function CommodityGrid({ commodities }: { commodities: Commodity[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {commodities.map((commodity) => (
        <CommodityCard key={commodity.id} commodity={commodity} />
      ))}
    </div>
  );
}
