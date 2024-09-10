import { FC, memo } from "react";
import { Device, useGetAllDevicesQuery } from "@/entities/device";
import { Loader } from "@/shared/ui";

import styles from "./DevicesList.module.scss";

export const DevicesList: FC = memo(() => {
  const { data, isLoading } = useGetAllDevicesQuery();
  const isDevices = data?.devices && data.devices.length > 0;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles["devices-list"]}>
      {isDevices &&
        data.devices.map((device) => (
          <Device
            key={device.id}
            {...device}
            imageUrl="https://c.dns-shop.ru/thumb/st1/fit/0/0/b01f455e0db36429001e817cc9a08484/2258685cc32bbd96de406852bd9b2d94916029658cd6fa120a9f97a4bc0af297.jpg.webp"
          />
        ))}
    </div>
  );
});
