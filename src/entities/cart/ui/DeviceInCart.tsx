import { FC, memo, useCallback } from "react";
import cn from "classnames";
import { DeviceInCartProps } from "./DeviceInCartProps";
import { useAppDispatch } from "@/shared/model";
import { addItem, minusItem, removeItem } from "../model/slice";
import { CartItem } from "../model/types";

import styles from "./DeviceInCart.module.scss";

export const DeviceInCart: FC<DeviceInCartProps> = memo(
  ({ className, data }) => {
    const dispatch = useAppDispatch();

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
        <div className={styles["device__left-wrap"]}>
          <img
            src="https://c.dns-shop.ru/thumb/st1/fit/0/0/b01f455e0db36429001e817cc9a08484/2258685cc32bbd96de406852bd9b2d94916029658cd6fa120a9f97a4bc0af297.jpg.webp"
            alt="device image"
          />
        </div>
        <div className={styles["device__right-wrap"]}>
          <div className={styles["device__categories"]}>
            <div>Brand</div>
            <div>Category</div>
          </div>
          <div className={styles["device__name"]}>{data.name}</div>
          <div className={styles["device__price"]}>{data.price} ₽</div>
          <div className={styles["device__total-price"]}>
            <span>Общая стоймость: </span> {data.price * data.amount} ₽
          </div>
          <div className={styles["device__btn-change-count"]}>
            <button onClick={handlerAddItem}>+</button>
            <div>{data.amount}</div>
            <button onClick={handlerMinusItem}>-</button>
          </div>
        </div>
        <div className={styles["device__icons"]}>
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
