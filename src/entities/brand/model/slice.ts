import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BrandState {
  brand?: number;
}

const initialState: BrandState = {
  brand: undefined,
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    resetBrand: () => initialState,
    selectBrand: (state, action: PayloadAction<number>) => {
      state.brand = action.payload;
    },
  },
});

export const { resetBrand, selectBrand } = brandSlice.actions;
