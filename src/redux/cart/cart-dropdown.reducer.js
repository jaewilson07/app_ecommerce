import { CART } from '../constants';

import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  cart_hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cart_hidden: !state.cart_hidden,
      };
    case CART.ITEM_ADD:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CART.ITEM_REMOVE:
    default:
      return state;
  }
};

export default cartReducer;
