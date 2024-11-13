import { FC, memo } from "react";
import cn from "classnames";
import { Device } from "@/entities/device";
import { DevicesListProps } from "./DevicesListProps";
import { AddToFavoriteList } from "@/features/addToFavoriteList";

import styles from "./DevicesList.module.scss";

export const DevicesList: FC<DevicesListProps> = memo(
  ({ className, data }) => {
    const isDevices = Array.isArray(data) && data.length > 0;

    return (
      <div className={cn(styles["devices-list"], className)}>
        {isDevices &&
          data.map((device) => (
            <Device
              key={device.id}
              device={device}
              imageUrl={device.images[0]}
              AddToFavoriteList={
                <AddToFavoriteList
                  className={styles["devices-list__add-to-favorite-list"]}
                  device={device}
                />
              }
            />
          ))}
      </div>
    );
  }
);
