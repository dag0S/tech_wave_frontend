import { ReactNode } from "react";
import { CartItem } from "../model/types";

export interface DeviceInCartProps {
  className?: string;
  data: CartItem;
  AddToFavoriteList: ReactNode;
}
