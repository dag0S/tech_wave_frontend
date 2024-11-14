import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { paths } from "@/shared/lib/react-router";

import styles from "./Logo.module.scss";

const Logo: FC = memo(() => {
  return (
    <Link to={paths.home}>
      <img className={styles["logo"]} src="/svg/logo.svg" alt="logo" />
    </Link>
  );
});

export default Logo;
