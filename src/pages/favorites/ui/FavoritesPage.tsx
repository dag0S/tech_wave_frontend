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
                imageUrl={device.images[0]}
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
