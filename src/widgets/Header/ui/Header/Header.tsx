import { Container } from "@/shared/ui";
import { FC } from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <Container>
        <div className={styles["header__inner"]}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
