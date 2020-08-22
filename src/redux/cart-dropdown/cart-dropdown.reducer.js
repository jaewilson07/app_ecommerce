import { CART } from '../constants';
const INITIAL_STATE = {
  cart_hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cart_hidden: !state.cart_hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
