export const addItemToCart = (shoppingCart, newItem) => {
  const existingItem = shoppingCart.find(
    (cartItem) => cartItem.id === newItem.id
  );

  if (existingItem) {
    console.log('if');
    return shoppingCart.map((cartItem) =>
      cartItem.id === existingItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    console.log('else');
    return [...shoppingCart, { ...newItem, quantity: 1 }];
  }
};

export const removeItemFromCart = (shoppingCart, newItem) => {
  const existingItem = shoppingCart.find(
    (cartItem) => cartItem.id === newItem.id
  );

  if (existingItem) {
    console.log('if');
    return shoppingCart.map((cartItem) =>
      cartItem.id === existingItem.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1 > 0 ? cartItem.quantity - 1 : 0,
          }
        : cartItem
    );
  } else {
    console.log('else');
    return [...shoppingCart];
  }
};
