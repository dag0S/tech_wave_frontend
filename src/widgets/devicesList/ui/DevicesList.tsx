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
    const isDevices = data?.devices && data.devices.length > 0;

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
          data.devices.map((device) => (
            <Device
              key={device.id}
              device={device}
              imageUrl="https://c.dns-shop.ru/thumb/st1/fit/0/0/b01f455e0db36429001e817cc9a08484/2258685cc32bbd96de406852bd9b2d94916029658cd6fa120a9f97a4bc0af297.jpg.webp"
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
