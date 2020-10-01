import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  getCartItemsCount,
  getCartTotal,
} from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
  toggleHidden: () => {},
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));

    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const clearItem = (item) => setCartItems(clearItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItem,
        cartItemsCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
