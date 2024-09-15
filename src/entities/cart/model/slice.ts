import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./types";
import { calcTotalPrice } from "../lib/calcTotalPrice";
import { getFromLS, saveInLS } from "@/shared/utils";

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const items = getFromLS<CartItem[]>("cart");
const totalPrice = calcTotalPrice(items);

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
      saveInLS<CartItem[]>(state.items, "cart");
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
      saveInLS<CartItem[]>(state.items, "cart");
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
      saveInLS<CartItem[]>(state.items, "cart");
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      saveInLS<CartItem[]>(state.items, "cart");
    },
  },
});

export const { addItem, clearCart, minusItem, removeItem } = cartSlice.actions;
