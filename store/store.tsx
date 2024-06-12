import { configureStore } from "@reduxjs/toolkit";
import coffeeSlice from "./coffee-slice";
import beansSlice from "./beans-slice";

export const store = configureStore({
  reducer: {
    coffee: coffeeSlice,
    bean: beansSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
