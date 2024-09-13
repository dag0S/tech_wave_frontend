import { CartItem } from "../model/types";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, item) => item.price * item.amount + sum, 0);
};
