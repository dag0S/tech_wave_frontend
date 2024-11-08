import { FC, memo } from "react";
import cn from "classnames";
import { ButtonProps, ButtonSize, ButtonTheme } from "./ButtonProps";

import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = memo(
  ({
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSize.M,
    disable,
    color = "none",
    ...otherProps
  }) => {
    return (
      <button
        className={cn(
          styles["btn"],
          className,
          styles[size],
          styles[theme],
          styles[color],
          {
            [styles["disable"]]: disable,
          }
        )}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);
