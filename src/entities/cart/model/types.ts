import { IDevice } from "@/entities/device";

export interface ResponseDeviceInCart {
  id: number;
  count: number;
  basketId: number;
  deviceId: number;
}

export interface ICountDevice {
  id: number;
  count: number;
}

export interface CartItem extends IDevice {
  amount: number
}