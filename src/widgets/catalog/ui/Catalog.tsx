import { FC } from "react";
import cn from "classnames";
import { CatalogProps } from "./CatalogProps";
import { Loader } from "@/shared/ui";

import styles from "./Catalog.module.scss";

export const Catalog: FC<CatalogProps> = ({
  className,
  data,
  isLoading,
  selected,
  onSelect,
}) => {
  const handlerChooseItem = (id: number) => {
    onSelect(id);
  };

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
