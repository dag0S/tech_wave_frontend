import { FC, memo } from "react";
import cn from "classnames";
import { TitleProps } from "./TitleProps";

import styles from "./Title.module.scss";

export const Title: FC<TitleProps> = memo(({ className, children }) => {
  return <h4 className={cn(styles["title"], className)}>{children}</h4>;
});
