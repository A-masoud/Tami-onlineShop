import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cartItems");
const initialState = {
  items: storedCart ? JSON.parse(storedCart) : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
