import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Price {
  size: string;
  price: string;
  currency: string;
  count: number;
}

interface CartItem {
  id: string;
  prices: Price[];
}

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ id: string; price: { size: string; price: string; currency: string } }>) {
      const { id, price } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);

      if (itemIndex === -1) {
        // Item is not in the cart, add it as a new item
        state.push({
          id,
          prices: [{ ...price, count: 1 }],
        });
      } else {
        // Item is already in the cart, update the prices
        const existingItem = state[itemIndex];
        const priceIndex = existingItem.prices.findIndex(
          (p) => p.size === price.size && p.price === price.price && p.currency === price.currency
        );

        if (priceIndex === -1) {
          // Price is not in the cart, add it to the prices array
          existingItem.prices.push({ ...price, count: 1 });
        } else {
          // Price is already in the cart, update the count
          existingItem.prices[priceIndex].count += 1;
        }
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
