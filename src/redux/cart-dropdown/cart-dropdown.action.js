import { CART } from '../constants';

export const toggleCartHidden = (cart_hidden) => ({
  type: CART.TOGGLE_CART_HIDDEN,
  payload: cart_hidden,
});
