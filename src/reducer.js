const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    let id = action.payload;
    let cartUpdate = state.cart.filter((item) => id !== item.id);
    return { ...state, cart: cartUpdate };
  }

  if (action.type === "INCREASE_AMOUNT") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE_AMOUNT") {
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTAL") {
    const newTotal = state.cart.reduce((acc, item) => {
      return acc + item.amount * item.price;
    }, 0);

    return { ...state, total: newTotal };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }

  return state;
};

export default reducer;
