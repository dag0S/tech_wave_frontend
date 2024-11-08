import { forwardRef, useCallback } from "react";
import cn from "classnames";
import {
  DropDownItem,
  DropDownItemType,
  DropDownMenuProps,
} from "./DropDownMenuProps";
import { ItemLink } from "./items/ItemLink";
import { ItemButton } from "./items/ItemButton";

import styles from "./DropDownMenu.module.scss";

export const DropDownMenu = forwardRef<HTMLDivElement, DropDownMenuProps>(
  ({ className, list, onClick }, ref) => {
    const renderItem = useCallback((item: DropDownItem, i: number) => {
      switch (item.type) {
        case DropDownItemType.BUTTON:
          return <ItemButton item={item} key={i} />;
        case DropDownItemType.LINK:
          return <ItemLink item={item} key={i} />;
        default:
          return null;
      }
    }, []);

    return (
      <div
        className={cn(styles["drop-down-menu"], className)}
        ref={ref}
        onClick={onClick}
      >
        {list.map(renderItem)}
      </div>
    );
  }
);
