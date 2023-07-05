import { createSlice } from "@reduxjs/toolkit";
import { getOneProduct } from "./productsActions";

const initialState = {
  products: [],
  productDetails: {},
  search: "",
};

export const productsSlice = createSlice({
  name: "@products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });
  },
});

export const { setProducts, setSearch } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
