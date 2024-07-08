import { FC } from "react";
import { IContainer } from "./ContainerProps";

import styles from "./Container.module.scss";

const Container: FC<IContainer> = ({ children }) => {
  return <div className={styles["container"]}>{children}</div>;
};

export default Container;
