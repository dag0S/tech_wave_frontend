export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserRegistrationData {
  email: string;
  name: string;
  password: string;
}

export interface ResponseUserData {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
  avatar: string;
}
