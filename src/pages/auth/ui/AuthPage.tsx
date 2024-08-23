import { FC, memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Card } from "@/shared/ui";
import { Login } from "@/features/login";
import { Registration } from "@/features/registration";

import styles from "./AuthPage.module.scss";

const AuthPage: FC = memo(() => {
  const [isLogin, setIsLogin] = useState(true);
  const { t } = useTranslation("auth");

  const handlerToggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className={styles["auth"]}>
      <Container className={styles["auth__inner"]}>
        <div className={styles["auth__empty"]} />
        <Card className={styles["auth__form-wrap"]}>
          {isLogin ? <Login /> : <Registration />}
          <div className={styles["auth__to-login"]}>
            {isLogin
              ? t("У вас нет учетной записи?")
              : "У вас уже есть учетная запись?"}{" "}
            <span onClick={handlerToggleLogin}>
              {isLogin ? "Зарегистрироваться" : "Войти"}
            </span>
          </div>
        </Card>
      </Container>
      <img className={styles["auth__logo"]} src="/svg/logo.svg" alt="logo" />
    </div>
  );
});

export default AuthPage;
