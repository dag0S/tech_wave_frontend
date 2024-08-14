import { FC } from "react";
import cn from "classnames";
import { IContainer } from "./ContainerProps";

import styles from "./Container.module.scss";

export const Container: FC<IContainer> = ({ children, className = "" }) => {
  return <div className={cn(styles["container"], className)}>{children}</div>;
};
