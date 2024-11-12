import { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { DeviceItemProps } from "./DeviceItem.props";
import { paths } from "@/shared/lib/react-router";
import { Button } from "@/shared/ui";
import {
  AddToFavoriteList,
  AddToFavoriteListTheme,
} from "@/features/addToFavoriteList";

import styles from "./DeviceItem.module.scss";

export const DeviceItem: FC<DeviceItemProps> = ({ device }) => {
  return (
    <div className={styles["device"]}>
      <div className={styles["left-wrap"]}>
        <Link to={`${paths.product}/${device.id}`}>
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
            <div>Brand</div>
            <div>Category</div>
          </div>
          <div className={styles["row"]}>
            <h3 className={styles["title"]}>{device.name}</h3>
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
