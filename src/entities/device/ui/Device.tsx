import { FC, memo, useCallback } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { paths } from "@/shared/lib/react-router";
import { Button } from "@/shared/ui";
import { DeviceProps } from "./DeviceProps";
import { addItem, CartItem } from "@/entities/cart";
import { useAppDispatch } from "@/shared/model";
import { addNotification } from "@/shared/lib/notification";

import styles from "./Device.module.scss";

export const Device: FC<DeviceProps> = memo(
  ({ className, device, imageUrl, AddToFavoriteList }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const handlerAddToCart = useCallback(() => {
      const cartItem: CartItem = {
        ...device,
        amount: 0,
      };

      addNotification({
        title: t("Отлично!"),
        message: `${t("Товар")} ${device.name} ${t("добавлен в корзину")}`,
        type: "success",
      });

      dispatch(addItem(cartItem));
    }, [dispatch, device]);

    return (
      <div className={cn(styles["device"], className)}>
        <Link to={`${paths.product}/${device.id}`}>
          <img
            className={styles["device__image"]}
            src={imageUrl}
            alt={device.name}
          />
        </Link>
        <Link to={`${paths.product}/${device.id}`}>
          <h6 className={styles["device__title"]}>{device.name}</h6>
        </Link>
        <div className={styles["device__price"]}>
          <span>{device.price} ₽</span>
        </div>
        <Button className={styles["device__btn"]} onClick={handlerAddToCart}>
          <img src="/svg/cart.svg" alt="cart" />
          <span>{t("В корзину")}</span>
        </Button>
        {AddToFavoriteList}
      </div>
    );
  }
);
