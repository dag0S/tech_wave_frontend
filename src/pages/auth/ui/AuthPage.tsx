import { FC } from "react";
import { Button, Container, Input } from "@/shared/ui";

import styles from "./AuthPage.module.scss";

export const AuthPage: FC = () => {
  return (
    <div className={styles["auth"]}>
      <Container className={styles["auth__inner"]}>
        <div className={styles["auth__empty"]} />
        <div className={styles["auth__form-wrap"]}>
          <div>
            <h2 className={styles["auth__title"]}>Регистрация</h2>
            <form className={styles["form"]} action="#">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Введите email"
                label="Email"
              />
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Введите имя"
                label="Имя"
              />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Введите пароль"
                label="Пароль"
              />
              <Button>Зарегистрироваться</Button>
            </form>
          </div>
          <div className={styles["auth__to-login"]}>
            У вас уже есть учетная запись? <span>Войти</span>
          </div>
        </div>
      </Container>
      <img className={styles["auth__logo"]} src="/svg/logo.svg" alt="logo" />
    </div>
  );
};
