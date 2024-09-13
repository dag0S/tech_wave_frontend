import { CartItem } from "../model/types";

export const saveCartInLS = (items: CartItem[]) => {
  const json = JSON.stringify(items);
  localStorage.setItem("cart", json);
};
