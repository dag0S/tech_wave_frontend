import { FC } from "react";
import { Button, Input } from "@/shared/ui";

import styles from "./Login.module.scss";

export const Login: FC = () => {
  return (
    <form className={styles["form"]} action="#">
      <h2 className={styles["form__title"]}>Вход</h2>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Введите email"
        label="Email"
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Введите пароль"
        label="Пароль"
      />
      <Button>Войти</Button>
    </form>
  );
};
