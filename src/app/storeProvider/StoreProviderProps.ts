import { ReactNode } from "react";
import { StateSchema } from "./appStore";
import { DeepPartial } from "@/shared/types";

export interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}
