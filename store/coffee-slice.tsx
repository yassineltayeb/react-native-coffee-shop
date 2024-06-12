import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CoffeeData from "data/CoffeeData";

const initialState = CoffeeData;

export const coffeeSlice = createSlice({
    name: "coffee",
    initialState,
    reducers: {}
}
);

export default coffeeSlice.reducer;