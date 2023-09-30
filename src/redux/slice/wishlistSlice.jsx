import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/products";

const initialState = [];

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProductToWishlist: (state, action) => {
      const productToAdd = data.products.find(
        (product) => product.id === action.payload
      );
      if (productToAdd) {
        state.push(productToAdd);
      }
    },
    removeProductFromWishlist: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    increaseWishlistQuantity: (state, action) => {
      const productToIncrease = state.find(
        (product) => product.id === action.payload.id
      );
      if (productToIncrease) {
        productToIncrease.quantity += 1;
      }
    },
  },
});

export const {
  addProductToWishlist,
  removeProductFromWishlist,
  increaseWishlistQuantity,
} = wishlistSlice.actions;

const wishlistReducer = wishlistSlice.reducer;

export default wishlistReducer;
