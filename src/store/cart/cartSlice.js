import { createSlice } from "@reduxjs/toolkit";
import { getCountProductsInCart } from "../../helpers/functions";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
};

export const cartSlice = createSlice({
  name: "@cart",
  initialState,
  reducers: {
    getCart(state, action) {
      state.cart = action.payload;
    },
    getCartLength(state, action) {
      state.cart = action.payload;
    },
  },
});

export const { getCart, getCartLength } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
