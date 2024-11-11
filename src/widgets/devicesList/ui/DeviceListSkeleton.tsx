import { FC } from "react";
import { Skeleton } from "@/shared/ui";

import styles from "./DevicesList.module.scss";

export const DeviceListSkeleton: FC = () => {
  return (
    <div className={styles["devices-list"]}>
      {[...Array(6)].map((_, i) => (
        <Skeleton height={379} border={2} key={i} />
      ))}
    </div>
  );
};
