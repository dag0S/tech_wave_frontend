import { IDevice } from "@/entities/device";

export enum AddToFavoriteListTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
}

export interface AddToFavoriteListProps {
  className?: string;
  theme?: AddToFavoriteListTheme;
  device: IDevice;
}
