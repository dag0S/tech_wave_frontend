import { baseApi } from "@/shared/api";
import {
  DeviceData,
  IDevice,
  IParams,
  ResponseDeviceData,
} from "../model/types";

export const deviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDevices: builder.query<ResponseDeviceData, IParams>({
      query: (params) => {
        const { brandId, categoryId, priceFrom, priceTo } = params;
        const queryParams: string[] = [];

        if (brandId) queryParams.push(`brandId=${brandId}`);
        if (categoryId) queryParams.push(`categoryId=${categoryId}`);
        if (priceFrom) queryParams.push(`priceFrom=${priceFrom}`);
        if (priceTo) queryParams.push(`priceTo=${priceTo}`);

        return {
          url: `/device?${queryParams.join("&")}`,
          method: "GET",
        };
      },
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
