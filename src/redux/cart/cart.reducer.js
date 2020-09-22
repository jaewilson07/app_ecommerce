import { CART } from '../constants';

import { addItem, subtractItem } from './cart.utils';

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
        cartItems: addItem(state.cartItems, action.payload),
      };
    case CART.ITEM_DROP:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CART.ITEM_SUBTRACT:
      return {
        ...state,
        cartItems: subtractItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
