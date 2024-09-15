import { IDevice } from "@/entities/device";

export interface CartItem extends IDevice {
  amount: number
}