import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlicer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
