import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RangePriceState {
  priceFrom: number;
  priceTo: number;
}

const initialState: RangePriceState = {
  priceFrom: 0,
  priceTo: 100000,
};

export const rangePriceSlice = createSlice({
  name: "rangePrice",
  initialState,
  reducers: {
    resetRangePrice: () => initialState,
    changePriceFrom: (state, action: PayloadAction<number>) => {
      state.priceFrom = action.payload;
    },
    changePriceTo: (state, action: PayloadAction<number>) => {
      state.priceTo = action.payload;
    },
  },
});

export const { resetRangePrice, changePriceFrom, changePriceTo } =
  rangePriceSlice.actions;
