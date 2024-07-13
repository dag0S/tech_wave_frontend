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
  token: string;
}
