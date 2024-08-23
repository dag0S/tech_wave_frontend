import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { paths } from "@/shared/lib/react-router";
import { Button } from "@/shared/ui";
import { IDevice } from "./DeviceProps";

import styles from "./Device.module.scss";

const Device: FC<IDevice> = memo(({ id, name, price, imageUrl }) => {
  return (
    <div className={styles["device"]}>
      <Link to={`${paths.product}/:${id}`}>
        <img className={styles["device__image"]} src={imageUrl} alt={name} />
      </Link>
      <Link to={`${paths.product}/:${id}`}>
        <h6 className={styles["device__title"]}>{name}</h6>
      </Link>
      <div className={styles["device__price"]}>
        <span>{price} ₽</span>
      </div>
      <Button className={styles["device__btn"]}>
        <img src="/svg/cart.svg" alt="cart" />
        <span>В корзину</span>
      </Button>
    </div>
  );
});

export default Device;
