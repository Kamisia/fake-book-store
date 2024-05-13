import { createSlice } from "@reduxjs/toolkit";
const saveItemsToLocalStorage = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};
const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getCartFromLocalStorage() || [],
    searchResults: [],
  },

  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      saveItemsToLocalStorage(action.payload);
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;

      state.items = state.items.filter((item) => item.id !== itemId);
      saveItemsToLocalStorage(state.items);
    },
    deleteAllItems: (state) => {
      state.items = [];
      saveItemsToLocalStorage([]);
    },
    addItem: (state, action) => {
      const newItem = action.payload;

      state.items.push(newItem);
      saveItemsToLocalStorage(state.items);
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        saveItemsToLocalStorage(state.items);
      }
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
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
export const selectItemCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;
