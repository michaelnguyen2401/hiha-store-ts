export const addItemToCart = (cartItemToAdd, cartItems) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItemToRemove, cartItems) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItemToRemove.id === cartItem.id,
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};

export const clearItemsFromCart = (cartItemToClear, cartItems) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};