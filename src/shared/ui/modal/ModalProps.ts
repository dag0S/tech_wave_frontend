import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  position?: "center" | "top";
  onClose?: () => void;
}
