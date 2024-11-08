import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  name?: string;
  email?: string;
  avatar?: string;
  isEdit: boolean;
}

const initialState: ProfileState = {
  isEdit: false,
};

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setIsEdit: (state) => {
      state.isEdit = !state.isEdit;
    },
  },
});

export const { setAvatar, setEmail, setName, setIsEdit } =
  profileSlice.actions;
