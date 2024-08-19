import { FC, FormEvent, useCallback, useEffect } from "react";
import { Button, Input } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { useLoginMutation } from "@/entities/user/api/api";
import { setEmail, setPassword } from "../model/slice";
import { useNavigate } from "react-router-dom";
import { paths } from "@/shared/lib/react-router";

import styles from "./Login.module.scss";

export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state) => state.loginSlice);
  const { isAuthenticated } = useAppSelector((state) => state.userSlice);
  const [userLogin, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handlerChangeEmail = useCallback(
    (value: string) => {
      dispatch(setEmail(value));
    },
    [dispatch]
  );

  const handlerChangePassword = useCallback(
    (value: string) => {
      dispatch(setPassword(value));
    },
    [dispatch]
  );

  const handlerSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isLoading) {
        userLogin({ email, password });
      }
    },
    [email, password, userLogin, isLoading]
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate(paths.home);
    }
  }, [isAuthenticated, navigate]);

  return (
    <form className={styles["form"]} onSubmit={handlerSubmit}>
      <h2 className={styles["form__title"]}>Вход</h2>
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
        id="password"
        name="password"
        type="password"
        placeholder="Введите пароль"
        label="Пароль"
        value={password}
        onChange={handlerChangePassword}
      />
      <Button type="submit" disable={isLoading}>
        Войти
      </Button>
    </form>
  );
};
