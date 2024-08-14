import { FC } from "react";
import { Button, Input } from "@/shared/ui";

import styles from "./Registration.module.scss";

export const Registration: FC = () => {
  return (
    <form className={styles["form"]} action="#">
      <h2 className={styles["form__title"]}>Регистрация</h2>
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
  );
};
