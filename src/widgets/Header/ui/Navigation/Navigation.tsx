import {
  FC,
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { paths } from "@/shared/lib/react-router";
import {
  Loader,
  Modal,
  LoaderSize,
  Avatar,
  DropDownMenu,
  DropDownItemType,
} from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { logout } from "@/entities/user/model/slice";
import { ChangeTheme } from "@/features/changeTheme";
import { ChangeLang } from "@/features/changeLang";
import { useCurrentQuery } from "@/entities/user";
import { useClickOutside } from "@/shared/lib/hooks";

import styles from "./Navigation.module.scss";

const Navigation: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const { isAuthenticated } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const { isLoading } = useCurrentQuery();
  const { t } = useTranslation();
  const items = useAppSelector((state) => state.cartSlice.items);
  const amountItemsInCart = useMemo(
    () => items.reduce((amount, item) => item.amount + amount, 0),
    [items]
  );
  const [isFavoriteAnimated, setIsFavoriteAnimated] = useState(false);
  const favoriteList = useAppSelector((state) => state.favoriteList.items);
  const dropDownRef = useClickOutside(() => setIsOpenDropDown(false));

  useEffect(() => {
    setIsFavoriteAnimated(true);
    const timer = setTimeout(() => {
      setIsFavoriteAnimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [favoriteList]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handlerLogout = useCallback(() => {
    setIsOpenDropDown(false);
    dispatch(logout());
    localStorage.removeItem(import.meta.env.VITE_TOKEN);
  }, [dispatch]);

  const handlerToggleDropDownMenu = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    setIsOpenDropDown((prev) => !prev);
  }, []);

  return (
    <ul className={styles["navigation"]}>
      <Modal isOpen={isOpen} onClose={handleClose}>
        text
      </Modal>
      <li>
        <button className={styles["navigation__item"]} onClick={handleOpen}>
          <img src="/svg/search.svg" alt="search" />
          {t("Поиск")}
        </button>
      </li>
      <li>
        <ChangeTheme className={styles["navigation__item"]} />
      </li>
      <li>
        <ChangeLang className={styles["navigation__item"]} />
      </li>
      <li>
        <Link to={paths.favorites} className={styles["navigation__item"]}>
          <img
            className={cn({
              [styles["bump"]]: isFavoriteAnimated,
            })}
            src="/svg/favorite.svg"
            alt="favorite"
          />
          {t("Избранное")}
        </Link>
      </li>
      <li>
        <Link to={paths.cart} className={styles["navigation__item"]}>
          {amountItemsInCart > 0 && (
            <span className={styles["navigation__cart-items"]}>
              {amountItemsInCart > 99 ? "99+" : amountItemsInCart}
            </span>
          )}
          <img src="/svg/cart.svg" alt="cart" />
          {t("Корзина")}
        </Link>
      </li>
      <li>
        {isLoading ? (
          <div className={styles["navigation__item"]}>
            <Loader size={LoaderSize.S} />
          </div>
        ) : isAuthenticated ? (
          <button
            className={styles["navigation__item"]}
            onClick={handlerToggleDropDownMenu}
          >
            <Avatar src="/img/default-user-avatar.png" alt="user" size={24} />
            {t("Выйти")}
          </button>
        ) : (
          <Link to={paths.auth} className={styles["navigation__item"]}>
            <img src="/svg/user.svg" alt="user" />
            {t("Войти")}
          </Link>
        )}
      </li>
      {isOpenDropDown && (
        <DropDownMenu
          className={styles["navigation__dropdown-mene"]}
          ref={dropDownRef}
          list={[
            {
              type: DropDownItemType.LINK,
              link: "/",
              name: "Профиль",
              icon: "svg/user.svg",
            },
            {
              type: DropDownItemType.BUTTON,
              name: "Выйти",
              icon: "svg/logout.svg",
              onClick: handlerLogout,
            },
          ]}
        />
      )}
    </ul>
  );
});

export default Navigation;
