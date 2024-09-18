export enum DropDownItemType {
  LINK = "link",
  BUTTON = "button",
}

interface Item {
  name: string;
  icon?: string;
}

interface LinkItem extends Item {
  type: DropDownItemType.LINK;
  link: string;
}

interface ButtonItem extends Item {
  type: DropDownItemType.BUTTON;
  onClick?: () => void;
}

export type DropDownItem = ButtonItem | LinkItem;

export interface DropDownMenuProps {
  className?: string;
  list: DropDownItem[];
}
