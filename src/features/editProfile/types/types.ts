export interface EditableUserData {
  name?: string;
  email?: string;
  avatar?: string;
  id?: number;
  password?: string;
  role?: "ADMIN" | "USER";
}
