import { forwardRef } from "react";
import { ButtonHamburgerProps } from "./ButtonHamburgerProps";
import cn from "classnames";

import styles from "./ButtonHamburger.module.scss";

export const ButtonHamburger = forwardRef<
  HTMLButtonElement,
  ButtonHamburgerProps
>(({ onClick, toggle }, ref) => {
  return (
    <button
      className={cn(styles["btn"], {
        [styles["btn--active"]]: toggle,
      })}
      onClick={onClick}
      ref={ref}
    >
      <span />
      <span />
      <span />
    </button>
  );
});
