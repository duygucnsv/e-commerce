import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/products";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const productId = action.payload;
      const productToAdd = data.products.find(
        (product) => product.id === productId
      );

      if (productToAdd) {
        state.push({ ...productToAdd, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    increaseCartQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.find((product) => product.id === productId);

      if (product) {
        product.quantity += 1;
      }
    },
    decreaseCartQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.find((product) => product.id === productId);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
