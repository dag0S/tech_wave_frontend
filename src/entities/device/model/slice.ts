import { createSlice } from "@reduxjs/toolkit";
import { deviceApi } from "../api/api";
import { IDevice } from "./types";

export interface DeviceState {
  devices: IDevice[] | null;
  devicesCount: number;
}

const initialState: DeviceState = {
  devices: null,
  devicesCount: 0,
};

export const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      deviceApi.endpoints.getAllDevices.matchFulfilled,
      (state, action) => {
        state.devices = action.payload.devices;
        state.devicesCount = action.payload.devicesCount;
      }
    );
  },
});
