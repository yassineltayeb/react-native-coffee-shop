import { configureStore } from "@reduxjs/toolkit";
import coffeeSlice from "./coffee-slice";
import beansSlice from "./beans-slice";
import favoriteSlice from "./favorite-slice";
import cartSlice from "./cart-slice";

export const store = configureStore({
  reducer: {
    bean: beansSlice,
    cart:cartSlice,
    coffee: coffeeSlice,
    favorite: favoriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
