import { CART } from '../constants';

export const toggleCartHidden = (cart_hidden) => ({
  type: CART.TOGGLE_CART_HIDDEN,
  payload: cart_hidden,
});

export const addItemCart = (item) => ({
  type: CART.ITEM_ADD,
  payload: item,
});

export const subtractItemCart = (item) => ({
  type: CART.ITEM_SUBTRACT,
  payload: item,
});

export const dropItemCart = (item) => ({
  type: CART.ITEM_DROP,
  payload: item,
});
