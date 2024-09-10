import { baseApi } from "@/shared/api";
import { DeviceData, IDevice, ResponseDeviceData } from "../model/types";

export const deviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDevices: builder.query<ResponseDeviceData, void>({
      query: () => ({
        url: "/device",
        method: "GET",
      }),
    }),
    getDeviceById: builder.query<IDevice, string>({
      query: (deviceId) => ({
        url: `/device/${deviceId}`,
        method: "GET",
      }),
    }),
    createDevice: builder.mutation<IDevice, DeviceData>({
      query: (deviceData) => ({
        url: "/device/create",
        method: "POST",
        body: deviceData,
      }),
    }),
  }),
});

export const {
  useGetAllDevicesQuery,
  useGetDeviceByIdQuery,
  useCreateDeviceMutation,
} = deviceApi;
