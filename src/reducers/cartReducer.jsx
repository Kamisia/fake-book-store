import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    setItems: (state, action) => {
      return action.payload;
    },
  },
});

export const { setItems } = cartSlice.actions;
export const selectItems = (state) => state.items;
export default cartSlice.reducer;
