export const incrementItem = (itemId) => ({
  type: "INCREMENT_ITEM",
  payload: { id: itemId },
});

export const decrementItem = (itemId) => ({
  type: "DECREMENT_ITEM",
  payload: { id: itemId },
});

export const updateCart = (items, totalPrice) => ({
  type: "UPDATE_CART",
  payload: { items, totalPrice },
});

export const updateCartLength = (length) => ({
  type: "UPDATE_CART_LENGTH",
  payload: length,
});
