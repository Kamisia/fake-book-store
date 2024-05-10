import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducers/cartSlicer.jsx";
import { Provider } from "react-redux";
import { AppProvider } from "./Context.jsx";
const queryClient = new QueryClient();
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AppProvider>
    </Provider>
  </React.StrictMode>
);
