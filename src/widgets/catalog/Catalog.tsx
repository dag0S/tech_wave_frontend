import { FC, useState } from "react";
import cn from "classnames";
import { CatalogProps } from "./CatalogProps";
import { Loader } from "@/shared/ui";

import styles from "./Catalog.module.scss";

export const Catalog: FC<CatalogProps> = ({ className, data, isLoading }) => {
  const [selected, setSelected] = useState<number | undefined>();

  if (isLoading) {
    return (
      <div
        className={cn(styles["catalog"], className, {
          [styles["catalog--isLoading"]]: isLoading,
        })}
      >
        <Loader />
      </div>
    );
  }

  const handlerChooseItem = (id: number) => {
    setSelected(id);
  };

  return (
    <div className={cn(styles["catalog"], className)}>
      {data?.length &&
        data.map((item) => (
          <div
            className={cn(styles["catalog__item"], {
              [styles["catalog__item--selected"]]: item.id === selected,
            })}
            key={item.id}
            onClick={() => handlerChooseItem(item.id)}
          >
            {item.name}
          </div>
        ))}
    </div>
  );
};
