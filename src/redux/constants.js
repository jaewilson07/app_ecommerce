<<<<<<< HEAD
export const PERSIST_CONFIG = (storage) => ({
  key: 'root',
  storage,
  whitelist: ['cart'], //define what to persist
});

=======
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e
export const USER = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const CART = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ITEM_ADD: 'ITEM_ADD',
<<<<<<< HEAD
  ITEM_SUBTRACT: 'ITEM_SUBTRACT',
  ITEM_DROP: 'ITEM_DROP',
};

export const DIRECTORY = {
  SET_DIRECTORY: 'SET_DIRECTORY',
=======
  ITEM_REMOVE: 'ITEM_REMOVE',
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e
};
