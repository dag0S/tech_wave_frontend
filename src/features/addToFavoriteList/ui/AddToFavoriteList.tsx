import { FC, memo, useCallback } from "react";
import cn from "classnames";
import { AddToFavoriteListProps } from "./AddToFavoriteListProps";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { toggleFavoriteDevice } from "@/entities/favoriteList";

import styles from "./AddToFavoriteList.module.scss";

export const AddToFavoriteList: FC<AddToFavoriteListProps> = memo(
  ({ device, className }) => {
    const dispatch = useAppDispatch();
    const favoriteList = useAppSelector((state) => state.favoriteList.items);
    const isFavorite = favoriteList.find((item) => item.id === device.id);

    const handlerToggleFavoriteDevice = useCallback(() => {
      dispatch(toggleFavoriteDevice(device));
    }, [dispatch, device]);

    return (
      <button
        className={cn(styles["add-to-favorite"], className)}
        onClick={handlerToggleFavoriteDevice}
      >
        <img
          src={
            isFavorite
              ? "/public/svg/is-favorite.svg"
              : "/public/svg/favorite.svg"
          }
          alt="like"
        />
      </button>
    );
  }
);
