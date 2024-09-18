import { FC } from "react";
import { Link } from "react-router-dom";
import { LinkItem } from "../DropDownMenuProps";

import styles from "./items.module.scss";

interface ItemLinkProps {
  item: LinkItem;
}

export const ItemLink: FC<ItemLinkProps> = ({ item }) => {
  return (
    <Link className={styles["item"]} to={item.link}>
      {item.name}
      {item.icon && <img className={styles["item__icon"]} src={item.icon} />}
    </Link>
  );
};
