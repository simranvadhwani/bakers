export const incNumber = (amount) => {
  return {
    type: "INCREMENT",
    payload: amount,
  };
};
export const decNumber = (amount) => {
  return {
    type: "DECREMENT",
    payload: amount,
  };
};
export const reset = () => ({
  type: "RESET",
});

export const updateCartLength = (length) => ({
  type: "UPDATE_CART_LENGTH",
  payload: length,
});
