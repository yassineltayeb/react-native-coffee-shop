import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const favoriteId = action.payload;
      const index = state.indexOf(favoriteId);

      if (index === -1) {
        state.push(favoriteId);
      } else {
        state.splice(index, 1);
      }
    },
  },
});

export default favoriteSlice.reducer;
