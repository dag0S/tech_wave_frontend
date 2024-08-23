import { FC, FormEvent, memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Input } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { useLoginMutation } from "@/entities/user/api/api";
import { setEmail, setPassword } from "../model/slice";
import { paths } from "@/shared/lib/react-router";
import { isErrorWithMessage } from "@/shared/utils";

import styles from "./Login.module.scss";

export const Login: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state) => state.loginSlice);
  const [userLogin, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { t } = useTranslation("auth");

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
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();

        if (!isLoading) {
          await userLogin({ email, password }).unwrap();
          navigate(paths.home);
        }
      } catch (err) {
        const mayBeError = isErrorWithMessage(err);

        if (mayBeError) {
          setError(err.data.message);
        } else {
          setError(t("Неизвестная ошибка"));
        }
      }
    },
    [email, password, userLogin, isLoading, navigate, t]
  );

  return (
    <form className={styles["form"]} onSubmit={handlerSubmit}>
      <h2 className={styles["form__title"]}>{t("Вход")}</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Input
        id="email"
        name="email"
        type="email"
        placeholder={t("Введите email")}
        label={t("Email")}
        value={email}
        onChange={handlerChangeEmail}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder={t("Введите пароль")}
        label={t("Пароль")}
        value={password}
        onChange={handlerChangePassword}
      />
      <Button type="submit" disable={isLoading}>
        {t("Войти")}
      </Button>
    </form>
  );
});
