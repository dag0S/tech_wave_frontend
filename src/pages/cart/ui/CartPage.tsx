import { FC, memo, useCallback } from "react";
import { Button, ButtonSize, ButtonTheme, Card, Container } from "@/shared/ui";
import { clearCart, DeviceInCart } from "@/entities/cart";
import { useAppDispatch, useAppSelector } from "@/shared/model";

import styles from "./CartPage.module.scss";

const CartPage: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { items: devicesInCart, totalPrice } = useAppSelector(
    (state) => state.cartSlice
  );

  const handlerRemoveItems = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className={styles["cart"]}>
      <Container>
        <div className={styles["cart__grid"]}>
          <Card className={styles["cart__left-wrap"]}>
            <div className={styles["cart__left-header"]}>
              <h3 className={styles["cart__left-title"]}>Корзина</h3>
              <Button
                theme={ButtonTheme.RED}
                size={ButtonSize.S}
                onClick={handlerRemoveItems}
              >
                Очистить корзину
              </Button>
            </div>
            <div className={styles["cart__devices"]}>
              {devicesInCart.length > 0 ? (
                devicesInCart.map((device) => (
                  <DeviceInCart data={device} key={device.id} />
                ))
              ) : (
                <h3>В корзине пусто</h3>
              )}
            </div>
          </Card>
          <Card className={styles["cart__right-wrap"]}>
            <h3 className={styles["cart__right-title"]}>Краткие сведения</h3>
            <div className={styles["cart__info"]}>
              <div className={styles["cart__info-row"]}>
                <div className={styles["cart__info-title"]}>
                  Промежуточный итог
                </div>
                <div className={styles["cart__info-value"]}>{totalPrice} ₽</div>
              </div>
              <div className={styles["cart__info-row"]}>
                <div className={styles["cart__info-title"]}>Доставка</div>
                <div className={styles["cart__info-value"]}>бесплатно</div>
              </div>
              <div className={styles["cart__info-row"]}>
                <div className={styles["cart__info-title"]}>Налоги</div>
                <div className={styles["cart__info-value"]}>-</div>
              </div>
              <div className={styles["cart__divider"]} />
              <div className={styles["cart__info-row"]}>
                <div className={styles["cart__info-title"]}>Всего</div>
                <div className={styles["cart__info-value"]}>{totalPrice} ₽</div>
              </div>
              <div className={styles["cart__divider"]} />
              <Button theme={ButtonTheme.OUTLINE}>Оформить</Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
});

export default CartPage;
