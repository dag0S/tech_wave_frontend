import { FC } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "./PortalProps";

export const Portal: FC<PortalProps> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element);
};
