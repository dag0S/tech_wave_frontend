import { FC } from "react";
import { ButtonItem } from "../DropDownMenuProps";

import styles from "./items.module.scss";

interface ItemButtonProps {
  item: ButtonItem;
}

export const ItemButton: FC<ItemButtonProps> = ({ item }) => {
  return (
    <button className={styles["item"]} onClick={item.onClick}>
      {item.name}
      {item.icon && <img className={styles["item__icon"]} src={item.icon} />}
    </button>
  );
};
