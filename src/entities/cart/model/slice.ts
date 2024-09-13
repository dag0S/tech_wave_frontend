import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./types";
import { calcTotalPrice } from "../lib/calcTotalPrice";
import { saveCartInLS } from "../lib/saveCartInLS";
import { getCartFromLS } from "../lib/getCartFromLS";

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const { items, totalPrice } = getCartFromLS();

const initialState: CartState = {
  items,
  totalPrice,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.amount++;
      } else {
        state.items.push({
          ...action.payload,
          amount: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
      saveCartInLS(state.items);
    },
    minusItem: (state, action: PayloadAction<number>) => {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem) {
        findItem.amount--;
        if (findItem.amount <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }

      state.totalPrice = calcTotalPrice(state.items);
      saveCartInLS(state.items);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
      saveCartInLS(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      saveCartInLS(state.items);
    },
  },
});

export const { addItem, clearCart, minusItem, removeItem } = cartSlice.actions;
