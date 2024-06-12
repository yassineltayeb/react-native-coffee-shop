import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BeansData from "data/BeansData";

const initialState = BeansData;

export const beansSlice = createSlice({
    name: "bean",
    initialState,
    reducers: {}
}
);

export default beansSlice.reducer;
