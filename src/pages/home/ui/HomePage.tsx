import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { Button, ButtonTheme, Container, Title } from "@/shared/ui";
import { DeviceListSkeleton, DevicesList } from "@/widgets/devicesList";
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
import { IParams, useGetAllDevicesQuery } from "@/entities/device";
import { RangeSlider } from "@/widgets/rangeSlider";
import {
  changePriceFrom,
  changePriceTo,
  resetRangePrice,
} from "@/entities/rangePrice";
import { useDebounce } from "@/shared/lib/hooks";

import styles from "./HomePage.module.scss";

const HomePage: FC = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [isOpenBrands, setIsOpenBrands] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);

  const { data: categoryData, isLoading: categoryIsLoading } =
    useGetAllCategoriesQuery();
  const selectedCategory = useAppSelector(
    (state) => state.categorySlice.category
  );

  const { data: brandData, isLoading: brandIsLoading } = useGetAllBrandsQuery();
  const selectedBrand = useAppSelector((state) => state.brandSlice.brand);

  const { priceFrom, priceTo } = useAppSelector((state) => state.rangePrice);

  const debouncedPriceFrom = useDebounce(priceFrom, 500);
  const debouncedPriceTo = useDebounce(priceTo, 500);

  const params: IParams = {
    brandId: selectedBrand,
    categoryId: selectedCategory,
    priceFrom: debouncedPriceFrom,
    priceTo: debouncedPriceTo,
  };

  const { data: devicesList, isLoading } = useGetAllDevicesQuery(params);

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

  const onChangePriceFrom = useCallback(
    (price: number) => {
      dispatch(changePriceFrom(price));
    },
    [dispatch]
  );

  const onChangePriceTo = useCallback(
    (price: number) => {
      dispatch(changePriceTo(price));
    },
    [dispatch]
  );

  const onResetFilters = useCallback(() => {
    dispatch(resetBrand());
    dispatch(resetCategory());
    dispatch(resetRangePrice());
  }, [dispatch]);

  const handlerToggleCategories = useCallback(() => {
    setIsOpenCategories((prev) => !prev);
  }, []);
  const handlerToggleBrands = useCallback(() => {
    setIsOpenBrands((prev) => !prev);
  }, []);
  const handlerTogglePrice = useCallback(() => {
    setIsOpenPrice((prev) => !prev);
  }, []);

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
            {devicesList ? (
              <DevicesList data={devicesList} />
            ) : (
              <DeviceListSkeleton />
            )}
          </div>
          <div className={styles["home-page__catalogs"]}>
            <div className={styles["home-page__catalogs-row"]}>
              <div className={styles["row-title-catalog"]}>
                <Title>{t("Категории")}</Title>
                {isOpenCategories ? (
                  <button onClick={handlerToggleCategories}>
                    <img src="/svg/close.svg" alt="close" />
                  </button>
                ) : (
                  <button onClick={handlerToggleCategories}>
                    <img src="/svg/hamburger.svg" alt="menu" />
                  </button>
                )}
              </div>
              <Catalog
                className={cn(styles["filter-card"], {
                  [styles["open-filter-card"]]: isOpenCategories,
                })}
                data={categoryData}
                isLoading={categoryIsLoading}
                onSelect={onSelectCategory}
                selected={selectedCategory}
              />
            </div>
            <div className={styles["home-page__catalogs-row"]}>
              <div className={styles["row-title-catalog"]}>
                <Title>{t("Бренды")}</Title>
                {isOpenBrands ? (
                  <button onClick={handlerToggleBrands}>
                    <img src="/svg/close.svg" alt="close" />
                  </button>
                ) : (
                  <button onClick={handlerToggleBrands}>
                    <img src="/svg/hamburger.svg" alt="menu" />
                  </button>
                )}
              </div>
              <Catalog
                className={cn(styles["filter-card"], {
                  [styles["open-filter-card"]]: isOpenBrands,
                })}
                data={brandData}
                isLoading={brandIsLoading}
                onSelect={onSelectBrand}
                selected={selectedBrand}
              />
            </div>
            <div className={styles["home-page__catalogs-row"]}>
              <div className={styles["row-title-catalog"]}>
                <Title>{t("Цена")}</Title>
                {isOpenPrice ? (
                  <button onClick={handlerTogglePrice}>
                    <img src="/svg/close.svg" alt="close" />
                  </button>
                ) : (
                  <button onClick={handlerTogglePrice}>
                    <img src="/svg/hamburger.svg" alt="menu" />
                  </button>
                )}
              </div>
              <RangeSlider
                className={cn(styles["filter-card"], {
                  [styles["open-filter-card"]]: isOpenPrice,
                })}
                min={0}
                max={100000}
                minVal={priceFrom}
                maxVal={priceTo}
                onChangePriceFrom={onChangePriceFrom}
                onChangePriceTo={onChangePriceTo}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
});

export default HomePage;
