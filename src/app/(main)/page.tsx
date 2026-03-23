import { COMMODITIES } from "@/lib/dummy-data";
import { CommodityGrid } from "@/components/dashboard/CommodityGrid";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Pantau harga komoditas pertanian hari ini dan prediksi AI untuk 7 hari ke depan.
        </p>
      </div>
      
      <CommodityGrid commodities={COMMODITIES} />
    </div>
  );
}
