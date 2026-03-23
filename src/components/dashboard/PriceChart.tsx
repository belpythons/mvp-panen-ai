"use client";

import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { DailyPrice } from "@/types";

export function PriceChart({ data }: { data: DailyPrice[] }) {
  const chartData = useMemo(() => {
    return data.map((d) => ({
      date: new Date(d.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'short' }),
      price: d.price,
      isPredicted: d.isPredicted,
    }));
  }, [data]);

  const splitIndex = chartData.findIndex((d) => d.isPredicted);

  return (
    <div className="h-[200px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2A254A" vertical={false} />
          <XAxis 
            dataKey="date" 
            stroke="#A09EAA" 
            fontSize={10} 
            tickMargin={10}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#A09EAA" 
            fontSize={10} 
            tickFormatter={(value) => `Rp ${value / 1000}k`}
            axisLine={false}
            tickLine={false}
            domain={['dataMin - 1000', 'dataMax + 1000']}
            width={60}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#151226', borderColor: '#2A254A', color: '#F8F8F2' }}
            itemStyle={{ color: '#FF9E00' }}
            formatter={(value: unknown) => [`Rp ${Number(value).toLocaleString("id-ID")}`, "Harga"]}
          />
          {splitIndex > 0 && (
            <ReferenceLine x={chartData[splitIndex].date} stroke="#8A2BE2" strokeDasharray="3 3" />
          )}
          <Line
            type="monotone"
            dataKey="price"
            stroke="#FF9E00"
            strokeWidth={2}
            dot={{ r: 3, fill: "#FF9E00" }}
            activeDot={{ r: 5, fill: "#FF9E00", stroke: "#151226", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
