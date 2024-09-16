import { FC, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ButtonTheme, Container, Title } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { AddToFavoriteList } from "@/features/addToFavoriteList";
import { Device } from "@/entities/device";
import { clearFavoriteList } from "@/entities/favoriteList";

import styles from "./FavoritesPage.module.scss";

const FavoritesPage: FC = memo(() => {
  const { t } = useTranslation("favorites");
  const dispatch = useAppDispatch();
  const devicesInFavorite = useAppSelector((state) => state.favoriteList.items);
  const amountDeviceInFavorite = useMemo(() => {
    return devicesInFavorite.length;
  }, [devicesInFavorite]);

  const handlerClearFavoriteList = useCallback(() => {
    dispatch(clearFavoriteList());
  }, [dispatch]);

  return (
    <div className={styles["favorites-page"]}>
      <Container>
        <div className={styles["favorites-page__header"]}>
          <Title>
            <span>{t("Избранное")} </span>
            {devicesInFavorite.length > 0 && `(${amountDeviceInFavorite})`}
          </Title>
          {devicesInFavorite.length > 0 && (
            <Button
              theme={ButtonTheme.RED}
              size={ButtonSize.S}
              onClick={handlerClearFavoriteList}
            >
              {t("Очистить список")}
            </Button>
          )}
        </div>
        <div className={styles["favorites-page__device-list"]}>
          {devicesInFavorite.length > 0 ? (
            devicesInFavorite.map((device) => (
              <Device
                className={styles["favorites-page__device"]}
                device={device}
                imageUrl="https://c.dns-shop.ru/thumb/st1/fit/0/0/b01f455e0db36429001e817cc9a08484/2258685cc32bbd96de406852bd9b2d94916029658cd6fa120a9f97a4bc0af297.jpg.webp"
                AddToFavoriteList={
                  <AddToFavoriteList
                    className={styles["favorites-page__add-to-favorite-list"]}
                    device={device}
                  />
                }
                key={device.id}
              />
            ))
          ) : (
            <div>{t("Список избранного пуст")}</div>
          )}
        </div>
      </Container>
    </div>
  );
});

export default FavoritesPage;
