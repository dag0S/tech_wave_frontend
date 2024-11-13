import { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { DeviceItemProps } from "./DeviceItem.props";
import { paths } from "@/shared/lib/react-router";
import { Button } from "@/shared/ui";
import {
  AddToFavoriteList,
  AddToFavoriteListTheme,
} from "@/features/addToFavoriteList";
import { useGetBrandByIdQuery } from "@/entities/brand";
import { useGetCategoryByIdQuery } from "@/entities/category";

import styles from "./DeviceItem.module.scss";

export const DeviceItem: FC<DeviceItemProps> = ({ device, onClose }) => {
  const { data: brand, isLoading: brandIsLoading } = useGetBrandByIdQuery(
    device.brandId
  );
  const { data: category, isLoading: categoryIsLoading } =
    useGetCategoryByIdQuery(device.categoryId);

  const handleCloseModal = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div className={styles["device"]}>
      <div className={styles["left-wrap"]}>
        <Link to={`${paths.product}/${device.id}`} onClick={handleCloseModal}>
          <img
            className={styles["device-img"]}
            src={device.images[0]}
            alt={device.name}
          />
        </Link>
      </div>
      <div className={styles["right-wrap"]}>
        <div className={styles["info"]}>
          <div className={cn(styles["row"], styles["categories"])}>
            <div>{brandIsLoading ? "..." : brand?.name}</div>
            <div>{categoryIsLoading ? "..." : category?.name}</div>
          </div>
          <div className={styles["row"]}>
            <Link
              to={`${paths.product}/${device.id}`}
              onClick={handleCloseModal}
            >
              <h3 className={styles["title"]}>{device.name}</h3>
            </Link>
            <div className={styles["rating"]}>
              <img src="/svg/star.svg" alt="star" />
              <span>{device.rating}</span>
            </div>
          </div>
          <div className={styles["device-price"]}>{device.price} ₽</div>
        </div>
        <Button>
          <img src="/svg/cart.svg" alt="cart" />
          <span>В корзину</span>
        </Button>
      </div>
      <AddToFavoriteList
        className={styles["add-to-favorite"]}
        theme={AddToFavoriteListTheme.CLEAR}
        device={device}
      />
    </div>
  );
};
