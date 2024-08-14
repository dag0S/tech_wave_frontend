import { FC } from "react";
import { CardProps } from "./CardProps";
import cn from "classnames";

import styles from "./Card.module.scss";

export const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={cn(styles["card"], className)}>{children}</div>;
};
