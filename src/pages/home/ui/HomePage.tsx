import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme, Container } from "@/shared/ui";
import { DevicesList } from "@/widgets/devicesList";
import { Catalog } from "@/widgets/catalog";
import {
  resetCategory,
  selectCategory,
  useGetAllCategoriesQuery,
} from "@/entities/category";
import {
  resetBrand,
  selectBrand,
  useGetAllBrandsQuery,
} from "@/entities/brand";
import { useAppDispatch, useAppSelector } from "@/shared/model";

import styles from "./HomePage.module.scss";

const HomePage: FC = memo(() => {
  const { t } = useTranslation();
  const { data: categoryData, isLoading: categoryIsLoading } =
    useGetAllCategoriesQuery();
  const { data: brandData, isLoading: brandIsLoading } = useGetAllBrandsQuery();
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.categorySlice.category
  );
  const selectedBrand = useAppSelector((state) => state.brandSlice.brand);

  const onSelectCategory = useCallback(
    (id: number) => {
      dispatch(selectCategory(id));
    },
    [dispatch]
  );

  const onSelectBrand = useCallback(
    (id: number) => {
      dispatch(selectBrand(id));
    },
    [dispatch]
  );

  const onResetFilters = useCallback(() => {
    dispatch(resetBrand());
    dispatch(resetCategory());
  }, [dispatch]);

  return (
    <div className={styles["home-page"]}>
      <Container>
        <div className={styles["home-page__grid"]}>
          <div className={styles["home-page__left-wrap"]}>
            <div className={styles["home-page__header"]}>
              <Button theme={ButtonTheme.RED} onClick={onResetFilters}>
                <span>{t("Сбросить фильтры")}</span>
                <img src="/svg/close.svg" alt="X" />
              </Button>
            </div>
            <DevicesList />
          </div>
          <div className={styles["home-page__catalogs"]}>
            <Catalog
              className={styles["home-page__catalog"]}
              data={categoryData}
              isLoading={categoryIsLoading}
              onSelect={onSelectCategory}
              selected={selectedCategory}
            />
            <Catalog
              className={styles["home-page__catalog"]}
              data={brandData}
              isLoading={brandIsLoading}
              onSelect={onSelectBrand}
              selected={selectedBrand}
            />
          </div>
        </div>
      </Container>
    </div>
  );
});

export default HomePage;
