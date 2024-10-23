import { MouseEvent } from "react";

export interface ButtonHamburgerProps {
  onClick: (e: MouseEvent) => void;
  toggle: boolean;
}
