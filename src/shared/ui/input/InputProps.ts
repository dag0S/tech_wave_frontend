import { InputHTMLAttributes } from "react";

type HTMLInput = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

export interface InputProps extends HTMLInput {
  className?: string;
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
}
