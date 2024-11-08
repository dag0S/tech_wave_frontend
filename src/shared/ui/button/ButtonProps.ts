import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
  OUTLINE = "outline",
  RED = "red",
}

export enum ButtonSize {
  S = "S",
  M = "M",
  L = "L",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disable?: boolean;
  color?: "green" | "grey" | "none";
}
