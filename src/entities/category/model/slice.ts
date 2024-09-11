import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
  category?: number;
}

const initialState: CategoryState = {
  category: undefined,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetCategory: () => initialState,
    selectCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
  },
});

export const { resetCategory, selectCategory } = categorySlice.actions;
