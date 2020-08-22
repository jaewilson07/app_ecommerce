import { CART } from '../constants';

export const toggleCartHidden = (cart_hidden) => ({
  type: CART.TOGGLE_CART_HIDDEN,
  payload: cart_hidden,
});

export const addItemCart = (item) => ({
  type: CART.ITEM_ADD,
  payload: item,
});

export const removeItemCart = (item) => ({
  type: CART.ITEM_REMOVE,
  payload: item,
});
