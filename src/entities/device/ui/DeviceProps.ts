import { ReactNode } from "react";
import { IDevice } from "../model/types";

export interface DeviceProps {
  device: IDevice;
  AddToFavoriteList: ReactNode;
  imageUrl?: string;
}
