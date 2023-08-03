import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/product/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
