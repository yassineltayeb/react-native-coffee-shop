import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderHistoryItemModel } from "models/order-history-item";

const initialState: OrderHistoryItemModel[] = [];

export const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {
    addToHistory(state, action: PayloadAction<OrderHistoryItemModel>) {
      state.push(action.payload);
    },
  },
});

export const { addToHistory } = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
