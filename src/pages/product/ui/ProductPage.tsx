import { FC } from "react";

import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import { useGetDeviceByIdQuery } from "@/entities/device";
import { Card, Container } from "@/shared/ui";

const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetDeviceByIdQuery(id || "");

  return (
    <div className={styles["product-page"]}>
      <Container>
        <div className={styles["product-page__grid"]}>
          <div className={styles["product-page__images"]}>
            <img
              src="https://c.dns-shop.ru/thumb/st1/fit/0/0/b01f455e0db36429001e817cc9a08484/2258685cc32bbd96de406852bd9b2d94916029658cd6fa120a9f97a4bc0af297.jpg.webp"
              alt={data?.name}
            />
          </div>
          <div className={styles["product-page__info"]}>
            <Card>
              <h2 className={styles["product-page__title"]}>{data?.name}</h2>
              <div className={styles["product-page__categories"]}>
                <div className={styles["product-page__categories-item"]}>
                  Apple
                </div>
                <div className={styles["product-page__categories-item"]}>
                  Смартфоны
                </div>
              </div>
              <div className={styles["product-page__price"]}>
                {data?.price} ₽
              </div>
              <div>
                <div>оценка</div>
                <div>просмотры</div>
              </div>
            </Card>
            <Card>
              <h2>{data?.description}</h2>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
