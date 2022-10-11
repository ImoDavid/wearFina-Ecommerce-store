import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const found = state.cartItems.find((item) => item.id === newItem.id);
      (found == undefined  &&  state.cartItems.push(newItem));
      
    },
    increase: (state, { payload }) => {
      //console.log(payload)
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
//console.log(cartSlice);
export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  addItem,
} = cartSlice.actions;
export default cartSlice.reducer;
