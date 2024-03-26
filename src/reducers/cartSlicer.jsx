import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    searchResults: [],
  },

  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;

      state.items = state.items.filter((item) => item.id !== itemId);
    },
    deleteAllItems: (state) => {
      state.items = [];
    },
    addItem: (state, action) => {
      const newItem = action.payload;

      state.items.push(newItem);
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
      console.log(state.searchResults);
    },
  },
});

export const {
  setItems,
  addItem,
  deleteItem,
  deleteAllItems,
  updateItemQuantity,
  addSearchResults,
} = cartSlice.actions;
export const selectItems = (state) => state.cart.items;
export const selectSearchResults = (state) => state.cart.searchResults;
export default cartSlice.reducer;
