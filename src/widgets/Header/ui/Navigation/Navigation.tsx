import { FC } from "react";

import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <ul className={styles["navigation"]}>
      <li>
        <button className={styles["navigation__item"]}>
          <img src="/public/svg/search.svg" alt="search" />
          Поиск
        </button>
      </li>
      <li>
        <button className={styles["navigation__item"]}>
          <img src="/public/svg/theme.svg" alt="theme" />
          Тема
        </button>
      </li>
      <li>
        <Link to="/" className={styles["navigation__item"]}>
          <img src="/public/svg/favorite.svg" alt="favorite" />
          Избранное
        </Link>
      </li>
      <li>
        <Link to="/" className={styles["navigation__item"]}>
          <img src="/public/svg/cart.svg" alt="cart" />
          Корзина
        </Link>
      </li>
      <li>
        <Link to="/" className={styles["navigation__item"]}>
          <img src="/public/svg/user.svg" alt="user" />
          Войти
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
