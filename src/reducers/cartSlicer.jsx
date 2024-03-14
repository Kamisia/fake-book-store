import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    setItems: (state, action) => {
      return action.payload;
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      console.log("ho");
      return state.filter((item) => item.id !== itemId);
    },
    deleteAllItems: (state, action) => {
      return [];
    },
    addItem: (state, action) => {
      const newItem = action.payload;

      return [...state, newItem];
    },
  },
});

export const { setItems, addItem, deleteItem, deleteAllItems } =
  cartSlice.actions;
export const selectItems = (state) => state.items;
export default cartSlice.reducer;
