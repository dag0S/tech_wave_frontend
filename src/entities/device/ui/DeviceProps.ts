import { ReactNode } from "react";
import { IDevice } from "../model/types";

export interface DeviceProps {
  className?: string;
  device: IDevice;
  AddToFavoriteList: ReactNode;
  imageUrl?: string;
}
