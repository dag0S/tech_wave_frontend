import {
  forwardRef,
  MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { NavigationProps } from "./NavigationProps";

import styles from "./Navigation.module.scss";
import { Search } from "@/features/search";
import { DeviceBySearchList } from "@/widgets/deviceBySearchList";

const Navigation = forwardRef<HTMLDivElement, NavigationProps>(
  ({ className, onClick }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const { isAuthenticated, avatar, name } = useAppSelector(
      (state) => state.userSlice
    );
    const dispatch = useAppDispatch();
    const { isLoading } = useCurrentQuery();
    const { t } = useTranslation();
    const navigation = useNavigate();
    const items = useAppSelector((state) => state.cartSlice.items);
    const amountItemsInCart = useMemo(
      () => items.reduce((amount, item) => item.amount + amount, 0),
      [items]
    );
    const [isFavoriteAnimated, setIsFavoriteAnimated] = useState(false);
    const favoriteList = useAppSelector((state) => state.favoriteList.items);
    const ignoreRef = useRef<HTMLButtonElement | null>(null);
    const dropDownRef = useClickOutside((event: MouseEvent | TouchEvent) => {
      if (!ignoreRef?.current?.contains(event?.target as Node)) {
        setIsOpenDropDown(false);
      }
    });

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
      navigation(paths.home);
    }, [dispatch, navigation]);

    const handlerToggleDropDownMenu = useCallback((e: ReactMouseEvent) => {
      e.stopPropagation();
      setIsOpenDropDown((prev) => !prev);
    }, []);

    return (
      <div ref={ref}>
        <ul className={cn(styles["navigation"], className)}>
          <Modal position="top" isOpen={isOpen} onClose={handleClose}>
            <Search isOpen={isOpen} onClose={handleClose} />
            <DeviceBySearchList onClose={handleClose} />
          </Modal>
          <li onClick={onClick}>
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
          <li onClick={onClick}>
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
          <li onClick={onClick}>
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
          <li onClick={onClick}>
            {isLoading ? (
              <div className={styles["navigation__item"]}>
                <Loader size={LoaderSize.S} />
              </div>
            ) : isAuthenticated ? (
              <button
                className={styles["navigation__item"]}
                onClick={handlerToggleDropDownMenu}
                ref={ignoreRef}
              >
                <Avatar
                  src={avatar || "/img/default-user-avatar.png"}
                  alt="user"
                  size={24}
                />
                {name}
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
              onClick={() => setIsOpenDropDown(false)}
              list={[
                {
                  type: DropDownItemType.LINK,
                  link: paths.profile,
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
      </div>
    );
  }
);

export default Navigation;
