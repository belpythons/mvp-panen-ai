import { Commodity, DailyPrice } from "@/types";

function generateDates(startDate: Date, days: number): string[] {
  const dates = [];
  for (let i = 0; i < days; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    dates.push(d.toISOString().split("T")[0]);
  }
  return dates;
}

const today = new Date();
const pastDates = generateDates(new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000), 7);
const futureDates = generateDates(new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000), 7);

function generateTrend(startPrice: number, volatility: number, isUptrend: boolean, dates: string[], isPredicted: boolean): DailyPrice[] {
  let currentPrice = startPrice;
  return dates.map((date) => {
    const change = (Math.random() * volatility * (isUptrend ? 1.5 : 0.5)) - (volatility * 0.5);
    currentPrice = Math.max(100, Math.round(currentPrice + change));
    return { date, price: currentPrice, isPredicted };
  });
}

export const COMMODITIES: Commodity[] = [
  {
    id: "beras",
    name: "Beras Medium",
    category: "Pangan Pokok",
    unit: "kg",
    currentPrice: 14500,
    previousPrice: 14300,
    history: generateTrend(13800, 200, true, pastDates, false),
    predicted: generateTrend(14500, 300, true, futureDates, true),
  },
  {
    id: "cabai-merah",
    name: "Cabai Merah Keriting",
    category: "Sayuran",
    unit: "kg",
    currentPrice: 85000,
    previousPrice: 90000,
    history: generateTrend(95000, 5000, false, pastDates, false),
    predicted: generateTrend(85000, 2000, false, futureDates, true),
  },
  {
    id: "bawang-merah",
    name: "Bawang Merah",
    category: "Bumbu",
    unit: "kg",
    currentPrice: 42000,
    previousPrice: 41000,
    history: generateTrend(38000, 1500, true, pastDates, false),
    predicted: generateTrend(42000, 1000, true, futureDates, true),
  },
  {
    id: "bawang-putih",
    name: "Bawang Putih Honan",
    category: "Bumbu",
    unit: "kg",
    currentPrice: 48000,
    previousPrice: 48500,
    history: generateTrend(49000, 500, false, pastDates, false),
    predicted: generateTrend(48000, 800, false, futureDates, true),
  },
  {
    id: "telur-ayam",
    name: "Telur Ayam Ras",
    category: "Peternakan",
    unit: "kg",
    currentPrice: 31000,
    previousPrice: 30500,
    history: generateTrend(29500, 500, true, pastDates, false),
    predicted: generateTrend(31000, 400, false, futureDates, true),
  },
  {
    id: "daging-ayam",
    name: "Daging Ayam Ras",
    category: "Peternakan",
    unit: "kg",
    currentPrice: 40000,
    previousPrice: 39000,
    history: generateTrend(37000, 1000, true, pastDates, false),
    predicted: generateTrend(40000, 800, true, futureDates, true),
  },
];
