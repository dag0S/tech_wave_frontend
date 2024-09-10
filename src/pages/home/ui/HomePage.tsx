import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme, Catalog, Container } from "@/shared/ui";
import { DevicesList } from "@/widgets/devicesList";
import { useGetAllCategoriesQuery } from "@/entities/category";

import styles from "./HomePage.module.scss";

const HomePage: FC = memo(() => {
  const { t } = useTranslation();
  const { data: categoryData, isLoading: categoryIsLoading } =
    useGetAllCategoriesQuery();

  return (
    <div className={styles["home-page"]}>
      <Container>
        <div className={styles["home-page__grid"]}>
          <div className={styles["home-page__left-wrap"]}>
            <div className={styles["home-page__header"]}>
              <Button theme={ButtonTheme.RED}>
                <span>{t("Сбросить фильтры")}</span>
                <img src="/svg/close.svg" alt="X" />
              </Button>
            </div>
            <DevicesList />
          </div>
          <Catalog
            className={styles["home-page__catalog"]}
            data={categoryData}
            isLoading={categoryIsLoading}
          />
        </div>
      </Container>
    </div>
  );
});

export default HomePage;
