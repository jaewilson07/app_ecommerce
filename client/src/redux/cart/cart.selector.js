import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.cart_hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accum, item) => {
        accum.quantity = accum.quantity + item.quantity;
        accum.total = accum.total + item.quantity * item.price;
        return accum;
      },
      { quantity: 0, total: 0 }
    )
);
