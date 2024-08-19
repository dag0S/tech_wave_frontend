import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegistrationState {
  email: string;
  name: string;
  password: string;
}

const initialState: RegistrationState = {
  email: "",
  name: "",
  password: "",
};

export const registrationSlice = createSlice({
  name: "registrationSlice",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducers } = registrationSlice;
