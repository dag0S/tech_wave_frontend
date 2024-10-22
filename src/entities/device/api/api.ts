import { baseApi } from "@/shared/api";
import { DeviceData, IDevice, IParams } from "../model/types";

export const deviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDevices: builder.query<IDevice[], IParams>({
      query: (params) => {
        const { brandId, categoryId, priceFrom, priceTo } = params;
        const queryParams: string[] = [];

        if (brandId) queryParams.push(`brandId=${brandId}`);
        if (categoryId) queryParams.push(`categoryId=${categoryId}`);
        if (priceFrom) queryParams.push(`price_gte=${priceFrom}`);
        if (priceTo) queryParams.push(`price_lte=${priceTo}`);

        return {
          url: `/devices?${queryParams.join("&")}`,
          method: "GET",
        };
      },
    }),
    getDeviceById: builder.query<IDevice, string>({
      query: (deviceId) => ({
        url: `/devices/${deviceId}`,
        method: "GET",
      }),
    }),
    createDevice: builder.mutation<IDevice, DeviceData>({
      query: (deviceData) => ({
        url: "/devices",
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
