const initialState = {
  items: [],
  totalPrice: 0,
};

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_ITEM":
      // Increment quantity of item in cart
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_ITEM":
      // Decrement quantity of item in cart
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "UPDATE_CART":
      // Update entire cart with new items and total price
      return {
        ...state,
        items: action.payload.items,
        totalPrice: action.payload.totalPrice,
      };

    default:
      return state;
  }
};

export default changeTheNumber;
