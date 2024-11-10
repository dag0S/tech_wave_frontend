import { FC, useEffect, useState } from "react";
import { IDevice } from "@/entities/device";
import { useAppSelector } from "@/shared/model";
import { useDebounce } from "@/shared/lib/hooks";

export const DeviceBySearchList: FC = () => {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const { searchValue } = useAppSelector((state) => state.searchSlice);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    const getDevices = async () => {
      const data = (await fetch(
        `${import.meta.env.VITE_API_URL}/devices?q=${debouncedSearchValue}`
      ).then((res) => res.json())) as IDevice[];
      setDevices(data);
    };

    if (debouncedSearchValue) {
      getDevices();
    } else {
      setDevices([]);
    }
  }, [debouncedSearchValue]);

  return <div>{devices.length}</div>;
};
