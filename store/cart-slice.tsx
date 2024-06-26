import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Price {
  size: string;
  price: string;
  currency: string;
  count: number;
}

interface CartItem {
  id: string;
  type: string;
  prices: Price[];
}

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{
        id: string;
        type: string;
        price: { size: string; price: string; currency: string };
      }>
    ) {
      const { id, type, price } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);

      if (itemIndex === -1) {
        // Item is not in the cart, add it as a new item
        state.push({
          id,
          type,
          prices: [{ ...price, count: 1 }],
        });
      } else {
        // Item is already in the cart, update the prices
        const existingItem = state[itemIndex];
        const priceIndex = existingItem.prices.findIndex(
          (p) =>
            p.size === price.size &&
            p.price === price.price &&
            p.currency === price.currency
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
    removeFromCart(
      state,
      action: PayloadAction<{
        id: string;
        type: string;
        price: { size: string; price: string; currency: string };
      }>
    ) {
      const { id, type, price } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        const existingItem = state[itemIndex];
        const priceIndex = existingItem.prices.findIndex(
          (p) =>
            p.size === price.size &&
            p.price === price.price &&
            p.currency === price.currency
        );

        if (priceIndex !== -1) {
          // Price is in the cart, decrease the count
          if (existingItem.prices[priceIndex].count > 1) {
            existingItem.prices[priceIndex].count -= 1;
          } else {
            // Remove the price if count is 1
            existingItem.prices.splice(priceIndex, 1);
          }

          // Remove the item if no prices are left
          if (existingItem.prices.length === 0) {
            state.splice(itemIndex, 1);
          }
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
