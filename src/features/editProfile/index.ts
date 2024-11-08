export {
  setAvatar,
  setEmail,
  setName,
  setIsEdit,
  profileSlice,
} from "./model/slice";
export type { ProfileState } from "./model/slice";
export { editApi, useEditProfileMutation } from "./api/api";
