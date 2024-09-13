import { baseApi } from "@/shared/api";
import { ICountDevice, ResponseDeviceInCart } from "../model/types";

export const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDevicesInCart: builder.query<ResponseDeviceInCart[], void>({
      query: () => ({
        url: "/basket",
        method: "GET",
      }),
    }),
    addDeviceInCart: builder.mutation<ResponseDeviceInCart, number>({
      query: (deviceId) => ({
        url: "/basket/add",
        method: "POST",
        body: {
          id: deviceId,
        },
      }),
    }),
    deleteDeviceInCart: builder.mutation<void, number>({
      query: (deviceInCartId) => ({
        url: `/basket/remove/${deviceInCartId}`,
        method: "DELETE",
      }),
    }),
    changeCountDeviceInCart: builder.mutation<
      ResponseDeviceInCart,
      ICountDevice
    >({
      query: (count) => ({
        url: "/basket/count",
        method: "PATCH",
        body: count,
      }),
    }),
  }),
});

export const {
  useGetAllDevicesInCartQuery,
  useAddDeviceInCartMutation,
  useDeleteDeviceInCartMutation,
  useChangeCountDeviceInCartMutation,
} = brandApi;
