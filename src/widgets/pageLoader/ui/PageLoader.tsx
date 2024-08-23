import { FC, memo } from "react";
import { Container, Loader } from "@/shared/ui";

import styles from "./PageLoader.module.scss";

export const PageLoader: FC = memo(() => {
  return (
    <div className={styles["page-loader"]}>
      <Container className={styles["page-loader__inner"]}>
        <Loader />
      </Container>
    </div>
  );
});
