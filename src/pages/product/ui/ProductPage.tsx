import { FC, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetDeviceByIdQuery } from "@/entities/device";
import { useGetAllCategoriesQuery } from "@/entities/category";
import { Button, Card, Container, Skeleton } from "@/shared/ui";
import { useGetAllBrandsQuery } from "@/entities/brand";
import { useAppDispatch } from "@/shared/model";
import { addItem, CartItem } from "@/entities/cart";
import { addNotification } from "@/shared/lib/notification";

import styles from "./ProductPage.module.scss";

const ProductPage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { data: device, isLoading: isLoadingDevice } = useGetDeviceByIdQuery(
    id || ""
  );
  const { data: categories, isLoading: isLoadingCategories } =
    useGetAllCategoriesQuery();
  const category = categories?.find((item) => item.id === device?.categoryId);
  const { data: brands, isLoading: isLoadingBrands } = useGetAllBrandsQuery();
  const brand = brands?.find((item) => item.id === device?.brandId);

  const handlerAddToCart = useCallback(() => {
    if (!device) {
      return;
    }

    const cartItem: CartItem = {
      ...device,
      amount: 0,
    };

    addNotification({
      title: t("Отлично!"),
      message: `${t("Товар")} ${device.name} ${t("добавлен в корзину")}`,
      type: "success",
    });

    dispatch(addItem(cartItem));
  }, [dispatch, device]);

  if (isLoadingDevice) {
    return (
      <div className={styles["product-page"]}>
        <Container>
          <div className={styles["product-page__grid"]}>
            <Skeleton width={469} height={495} />
            <div className={styles["info"]}>
              <Card className={styles["info__wrap"]}>
                <Skeleton width="100%" height={32} />
                <Skeleton width="40%" height={16} />
                <Skeleton width="30%" height={24} />
                <Skeleton width="40%" height={16} />
                <Skeleton width="50%" height={30} />
              </Card>
              <Card>
                <Skeleton width="100%" height={60} />
              </Card>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className={styles["product-page"]}>
      <Container>
        <div className={styles["product-page__grid"]}>
          <div className={styles["product-page__images"]}>
            <img
              src="https://c.dns-shop.ru/thumb/st1/fit/0/0/b01f455e0db36429001e817cc9a08484/2258685cc32bbd96de406852bd9b2d94916029658cd6fa120a9f97a4bc0af297.jpg.webp"
              alt={device?.name}
            />
          </div>
          <div className={styles["info"]}>
            <Card className={styles["info__wrap"]}>
              <h2 className={styles["info__title"]}>{device?.name}</h2>
              <div className={styles["info__row"]}>
                <div className={styles["info__item"]}>
                  {isLoadingBrands ? "..." : brand?.name}
                </div>
                <div className={styles["info__item"]}>
                  {isLoadingCategories ? "..." : category?.name}
                </div>
              </div>
              <div className={styles["info__price"]}>{device?.price} ₽</div>
              <div className={styles["info__row"]}>
                <div>оценка</div>
                <div>просмотры</div>
              </div>
              <Button
                className={styles["info__btn-add-to-cart"]}
                onClick={handlerAddToCart}
              >
                <img src="/public/svg/cart.svg" alt="cart" />
                {t("В корзину")}
              </Button>
            </Card>
            <Card>
              <h2>{device?.description}</h2>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
