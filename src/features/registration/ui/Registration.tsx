import { FC, FormEvent, useCallback, useState } from "react";
import { Button, Input } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { registrationActions } from "../model/slice";
import { useRegisterMutation } from "@/entities/user/api/api";
import { useNavigate } from "react-router-dom";
import { paths } from "@/shared/lib/react-router";
import { isErrorWithMessage } from "@/shared/utils";

import styles from "./Registration.module.scss";

export const Registration: FC = () => {
  const dispatch = useAppDispatch();
  const { email, name, password } = useAppSelector(
    (state) => state.registrationSlice
  );
  const [userRegistration, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handlerChangeEmail = useCallback(
    (val: string) => {
      dispatch(registrationActions.setEmail(val));
    },
    [dispatch]
  );

  const handlerChangeName = useCallback(
    (val: string) => {
      dispatch(registrationActions.setName(val));
    },
    [dispatch]
  );

  const handlerChangePassword = useCallback(
    (val: string) => {
      dispatch(registrationActions.setPassword(val));
    },
    [dispatch]
  );

  const handlerSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();

        if (!isLoading) {
          await userRegistration({ email, name, password }).unwrap();
          navigate(paths.home);
        }
      } catch (err) {
        const mayBeError = isErrorWithMessage(err);

        if (mayBeError) {
          setError(err.data.message);
        } else {
          setError("Неизвестная ошибка");
        }
      }
    },
    [email, name, password, userRegistration, isLoading, navigate]
  );

  return (
    <form className={styles["form"]} onSubmit={handlerSubmit}>
      <h2 className={styles["form__title"]}>Регистрация</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Введите email"
        label="Email"
        value={email}
        onChange={handlerChangeEmail}
      />
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Введите имя"
        label="Имя"
        value={name}
        onChange={handlerChangeName}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Введите пароль"
        label="Пароль"
        value={password}
        onChange={handlerChangePassword}
      />
      <Button type="submit" disable={isLoading}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
