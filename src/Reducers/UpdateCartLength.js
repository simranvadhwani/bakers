const initialState = {
  cartLength: 0,
};
const UpdateLength = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CART_LENGTH":
      return {
        ...state,
        cartLength: action.payload,
      };
    default:
      return state;
  }
};

export default UpdateLength;
