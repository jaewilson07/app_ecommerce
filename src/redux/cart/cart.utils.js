export const addItem = (shoppingCart, itemToAdd) => {
  const existingItem = shoppingCart.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingItem) {
    return shoppingCart.map((cartItem) =>
      cartItem.id === existingItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...shoppingCart, { ...itemToAdd, quantity: 1 }];
  }
};

export const subtractItem = (shoppingCart, itemToRemove) => {
  const existingItem = shoppingCart.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  // remove item if quantity is 1
  if (existingItem.quantity === 1) {
    return shoppingCart.filter((cartItem) => cartItem.id === itemToRemove.id);
  }

  // decrement quantity
  return shoppingCart.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
