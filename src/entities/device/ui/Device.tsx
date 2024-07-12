import { FC } from "react";
import { Link } from "react-router-dom";
import { paths } from "@/shared/lib/react-router";
import { IDevice } from "./DeviceProps";

import styles from "./Device.module.scss";

const Device: FC<IDevice> = ({ id, name, price, imageUrl }) => {
  return (
    <div className={styles["device"]}>
      <Link to={`${paths}/:${id}`}>
        <img className={styles["device__image"]} src={imageUrl} alt={name} />
      </Link>
      <Link to={`${paths}/:${id}`}>
        <h6 className={styles["device__title"]}>{name}</h6>
      </Link>
      <div className={styles["device__price"]}>
        <span>{price} ₽</span>
      </div>
      <button className={styles["device__add-to-cart"]}>
        <img src="/svg/cart.svg" alt="cart" />В корзину
      </button>
    </div>
  );
};

export default Device;
