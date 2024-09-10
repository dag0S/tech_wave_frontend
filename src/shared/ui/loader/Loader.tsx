import { FC, memo } from "react";
import cn from "classnames";
import { LoaderProps, LoaderSize } from "./LoaderProps";

import styles from "./Loader.module.scss";

export const Loader: FC<LoaderProps> = memo(({ size = LoaderSize.M }) => {
  return (
    <div className={cn(styles["loader"], styles[size])}>
      <span className={styles["spinner"]} />
    </div>
  );
});
