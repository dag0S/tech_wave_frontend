import { Container } from "@/shared/ui";
import { FC } from "react";

import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";

const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
