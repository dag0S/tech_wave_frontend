import { baseApi } from "@/shared/api";
import { EditableUserData } from "../types/types";

export const editApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editProfile: builder.mutation<void, EditableUserData>({
      query: (userData) => ({
        url: `/users/${userData.id}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useEditProfileMutation } = editApi;
