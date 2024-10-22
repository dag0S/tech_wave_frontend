import { FC, memo } from "react";
import cn from "classnames";
import { Device, useGetAllDevicesQuery } from "@/entities/device";
import { Skeleton } from "@/shared/ui";
import { DevicesListProps } from "./DevicesListProps";
import { AddToFavoriteList } from "@/features/addToFavoriteList";

import styles from "./DevicesList.module.scss";

export const DevicesList: FC<DevicesListProps> = memo(
  ({ className, params }) => {
    const { data, isLoading } = useGetAllDevicesQuery(params);
    const isDevices = Array.isArray(data) && data.length > 0;

    if (isLoading) {
      return (
        <div className={cn(styles["devices-list"], className)}>
          {[...Array(6)].map((_, i) => (
            <Skeleton height={379} border={2} key={i} />
          ))}
        </div>
      );
    }

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
