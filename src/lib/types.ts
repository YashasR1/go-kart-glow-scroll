export interface Kart {
  id: string;
  name: string;
  age: string;
  icon: string;
  description: string;
  price: string;
}

export type NewKart = Omit<Kart, "id" | "date">;
