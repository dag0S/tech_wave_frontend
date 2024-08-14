import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "@/shared/lib/react-router";
import { ChangeTheme } from "@/features/changeTheme";
import { Modal } from "@/shared/ui";

import styles from "./Navigation.module.scss";

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <ul className={styles["navigation"]}>
      <Modal isOpen={isOpen} onClose={handleClose}>
        text
      </Modal>
      <li>
        <button className={styles["navigation__item"]} onClick={handleOpen}>
          <img src="/svg/search.svg" alt="search" />
          Поиск
        </button>
      </li>
      <li>
        <ChangeTheme className={styles["navigation__item"]} />
      </li>
      <li>
        <Link to={paths.favoriteList} className={styles["navigation__item"]}>
          <img src="/svg/favorite.svg" alt="favorite" />
          Избранное
        </Link>
      </li>
      <li>
        <Link to={paths.cart} className={styles["navigation__item"]}>
          <img src="/svg/cart.svg" alt="cart" />
          Корзина
        </Link>
      </li>
      <li>
        <Link to={paths.auth} className={styles["navigation__item"]}>
          <img src="/svg/user.svg" alt="user" />
          Войти
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
