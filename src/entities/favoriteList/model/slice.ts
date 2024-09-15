import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFromLS, saveInLS } from "@/shared/utils";
import { IDevice } from "@/entities/device";

export interface FavoriteListState {
  items: IDevice[];
}

const items = getFromLS<IDevice[]>("favoriteList");

const initialState: FavoriteListState = {
  items,
};

export const favoriteListSlice = createSlice({
  name: "favoriteList",
  initialState,
  reducers: {
    toggleFavoriteDevice: (state, action: PayloadAction<IDevice>) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
      saveInLS<IDevice[]>(state.items, "favoriteList");
    },
    clearFavoriteList: (state) => {
      state.items = [];
      saveInLS<IDevice[]>(state.items, "favoriteList");
    },
  },
});

export const { clearFavoriteList, toggleFavoriteDevice } =
  favoriteListSlice.actions;
