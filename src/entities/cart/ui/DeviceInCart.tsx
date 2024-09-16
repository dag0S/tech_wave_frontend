import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { Link } from "react-router-dom";
import { DeviceInCartProps } from "./DeviceInCartProps";
import { useAppDispatch } from "@/shared/model";
import { addItem, minusItem, removeItem } from "../model/slice";
import { CartItem } from "../model/types";
import { paths } from "@/shared/lib/react-router";

import styles from "./DeviceInCart.module.scss";

export const DeviceInCart: FC<DeviceInCartProps> = memo(
  ({ className, data, AddToFavoriteList }) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation("cart");

    const handlerAddItem = useCallback(() => {
      dispatch(addItem({ id: data.id } as CartItem));
    }, [dispatch, data.id]);

    const handlerMinusItem = useCallback(() => {
      dispatch(minusItem(data.id));
    }, [dispatch, data.id]);

    const handlerRemoveItem = useCallback(() => {
      dispatch(removeItem(data.id));
    }, [dispatch, data.id]);

    return (
      <div className={cn(styles["device"], className)}>
        <Link
          className={styles["device__left-wrap"]}
          to={`${paths.product}/${data.id}`}
        >
          <img
            src="https://c.dns-shop.ru/thumb/st1/fit/0/0/b01f455e0db36429001e817cc9a08484/2258685cc32bbd96de406852bd9b2d94916029658cd6fa120a9f97a4bc0af297.jpg.webp"
            alt="device image"
          />
        </Link>
        <div className={styles["device__right-wrap"]}>
          <div className={styles["device__categories"]}>
            <div>Brand</div>
            <div>Category</div>
          </div>
          <Link
            className={styles["device__name"]}
            to={`${paths.product}/${data.id}`}
          >
            {data.name}
          </Link>
          <div className={styles["device__price"]}>{data.price} ₽</div>
          <div className={styles["device__total-price"]}>
            <span>{t("Общая стоймость")}: </span> {data.price * data.amount} ₽
          </div>
          <div className={styles["device__btn-change-count"]}>
            <button onClick={handlerAddItem}>+</button>
            <div>{data.amount}</div>
            <button onClick={handlerMinusItem}>-</button>
          </div>
        </div>
        <div className={styles["device__icons"]}>
          {AddToFavoriteList}
          <button
            className={styles["device__trash"]}
            onClick={handlerRemoveItem}
          >
            <img src="/public/svg/trash.svg" alt="trash" />
          </button>
        </div>
      </div>
    );
  }
);
