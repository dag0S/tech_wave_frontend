import { FC } from "react";
import cn from "classnames";
import { ButtonProps, ButtonTheme } from "./ButtonProps";

import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <button
      className={cn(styles["btn"], className, styles[theme])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
