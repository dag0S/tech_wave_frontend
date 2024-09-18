import { forwardRef, useCallback } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import {
  DropDownItem,
  DropDownItemType,
  DropDownMenuProps,
} from "./DropDownMenuProps";

import styles from "./DropDownMenu.module.scss";

export const DropDownMenu = forwardRef<HTMLDivElement, DropDownMenuProps>(
  ({ className, list }, ref) => {
    const renderItem = useCallback((item: DropDownItem, i: number) => {
      switch (item.type) {
        case DropDownItemType.BUTTON:
          return (
            <button
              className={styles["drop-down-menu__item"]}
              onClick={item.onClick}
              key={i}
            >
              {item.name}
              {item.icon && (
                <img
                  className={styles["drop-down-menu__item-icon"]}
                  src={item.icon}
                />
              )}
            </button>
          );
        case DropDownItemType.LINK:
          return (
            <Link
              className={styles["drop-down-menu__item"]}
              to={item.link}
              key={i}
            >
              {item.name}
              {item.icon && (
                <img
                  className={styles["drop-down-menu__item-icon"]}
                  src={item.icon}
                />
              )}
            </Link>
          );
        default:
          return null;
      }
    }, []);

    return (
      <div className={cn(styles["drop-down-menu"], className)} ref={ref}>
        {list.map(renderItem)}
      </div>
    );
  }
);
