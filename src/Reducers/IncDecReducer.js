const initialState = {
  number: 1,
  price: 0,
};

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("State before increment:", state);
      const newStateAfterIncrement = {
        number: state.number + 1,
        price: state.price + action.payload,
      };
      console.log("State after increment:", newStateAfterIncrement);
      return newStateAfterIncrement;
    case "DECREMENT":
      console.log("State before decrement:", state);
      const newStateAfterDecrement = {
        number: state.number === 0 ? state.number : state.number - 1,
        price: state.number === 0 ? state.price : state.price - action.payload,
      };
      console.log("State after decrement:", newStateAfterDecrement);
      return newStateAfterDecrement;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default changeTheNumber;
