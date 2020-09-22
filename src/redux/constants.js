export const PERSIST_CONFIG = (storage) => ({
  key: 'root',
  storage,
  whitelist: ['cart'], //define what to persist
});

export const USER = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const CART = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ITEM_ADD: 'ITEM_ADD',
  ITEM_SUBTRACT: 'ITEM_SUBTRACT',
  ITEM_DROP: 'ITEM_DROP',
};

export const DIRECTORY = {
  SET_DIRECTORY: 'SET_DIRECTORY',
};
