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
