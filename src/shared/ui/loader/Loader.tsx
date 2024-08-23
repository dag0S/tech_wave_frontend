import { FC, memo } from "react";

import styles from "./Loader.module.scss";

export const Loader: FC = memo(() => {
  return (
    <div className={styles["loader"]}>
      <span className={styles["spinner"]} />
    </div>
  );
});
