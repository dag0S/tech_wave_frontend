import { FC, memo } from "react";
import cn from "classnames";
import { ButtonProps, ButtonTheme } from "./ButtonProps";

import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = memo(
  ({
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    disable,
    ...otherProps
  }) => {
    return (
      <button
        className={cn(styles["btn"], className, styles[theme], {
          [styles["disable"]]: disable,
        })}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);
