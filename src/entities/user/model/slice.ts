import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/api";

export interface UserState {
  token: { token: string } | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  token: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthenticated = true;
      })
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, action) => {
          state.token = action.payload;
          state.isAuthenticated = true;
        }
      )
      .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthenticated = true;
      });
  },
});

export const { logout } = userSlice.actions;
