export interface DailyPrice {
  date: string;
  price: number;
  isPredicted: boolean;
}

export interface Commodity {
  id: string;
  name: string;
  category: string;
  unit: string;
  currentPrice: number;
  previousPrice: number;
  history: DailyPrice[];
  predicted: DailyPrice[];
}
