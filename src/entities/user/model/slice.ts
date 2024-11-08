import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/api";

export interface UserState {
  name?: string;
  email?: string;
  role?: "USER" | "ADMIN";
  avatar?: string;
  password?: string;
  id?: number;
  isAuthenticated: boolean;
}

const initialState: UserState = {
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
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.avatar = action.payload.avatar;
        state.role = action.payload.role;
        state.id = action.payload.id;
        state.password = action.payload.password;
        state.isAuthenticated = true;
      })
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, action) => {
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.avatar = action.payload.avatar;
          state.role = action.payload.role;
          state.id = action.payload.id;
          state.password = action.payload.password;
          state.isAuthenticated = true;
        }
      )
      .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.avatar = action.payload.avatar;
        state.role = action.payload.role;
        state.id = action.payload.id;
        state.password = action.payload.password;
        state.isAuthenticated = true;
      });
  },
});

export const { logout } = userSlice.actions;
