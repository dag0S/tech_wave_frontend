import { createSlice } from "@reduxjs/toolkit";
import { deviceApi } from "../api/api";
import { IDevice } from "./types";

export interface DeviceState {
  devices: IDevice[] | null;
}

const initialState: DeviceState = {
  devices: null,
};

export const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      deviceApi.endpoints.getAllDevices.matchFulfilled,
      (state, action) => {
        state.devices = action.payload;
      }
    );
  },
});
