import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Commodity } from "@/types";
import { PriceChart } from "./PriceChart";
import { cn } from "@/lib/utils";

export function CommodityCard({ commodity }: { commodity: Commodity }) {
  const priceChange = commodity.currentPrice - commodity.previousPrice;
  const percentageChange = (priceChange / commodity.previousPrice) * 100;
  const isUp = priceChange > 0;

  const chartData = [...commodity.history, ...commodity.predicted];

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold text-foreground">
              {commodity.name}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-xs mt-1">
              Kategori: {commodity.category}
            </CardDescription>
          </div>
          <div className="bg-muted px-2 py-1 rounded text-xs font-medium text-muted-foreground">
            Per {commodity.unit}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-3 mt-2">
          <span className="text-3xl font-bold text-primary">
            Rp {commodity.currentPrice.toLocaleString("id-ID")}
          </span>
          <div className={cn(
            "flex items-center text-sm font-medium mb-1",
            isUp ? "text-destructive" : "text-[#39FF14]" // Red for up (inflation), Green for down 
          )}>
            {isUp ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {Math.abs(percentageChange).toFixed(1)}%
          </div>
        </div>
        
        <PriceChart data={chartData} />
        
        <div className="flex justify-between items-center mt-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Histori</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full border border-secondary" />
            <span className="text-muted-foreground">Prediksi AI</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
