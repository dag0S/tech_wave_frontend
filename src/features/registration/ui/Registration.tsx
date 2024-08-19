import { FC, FormEvent, useCallback, useEffect } from "react";
import { Button, Input } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { registrationActions } from "../model/slice";
import { useRegisterMutation } from "@/entities/user/api/api";
import { useNavigate } from "react-router-dom";
import { paths } from "@/shared/lib/react-router";

import styles from "./Registration.module.scss";

interface MyError {
  data: {
    message?: string;
  };
  status: number;
}

export const Registration: FC = () => {
  const dispatch = useAppDispatch();
  const { email, name, password } = useAppSelector(
    (state) => state.registrationSlice
  );
  const { isAuthenticated } = useAppSelector((state) => state.userSlice);
  const [userRegistration, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

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
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isLoading) {
        userRegistration({ email, name, password });
      }
    },
    [email, name, password, userRegistration, isLoading]
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate(paths.home);
    }
  }, [isAuthenticated, navigate]);

  const myErr = error as MyError;

  return (
    <form className={styles["form"]} onSubmit={handlerSubmit}>
      <h2 className={styles["form__title"]}>Регистрация</h2>
      {myErr && (
        <div style={{ color: "red" }}>
          {myErr.data?.message || "Неизвестная ошибка"}
        </div>
      )}
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
