export interface CartItem {
  id: number;
  price: Price;
}

export interface Price {
  size: string;
  price: string;
  currency: string;
}
