export const addToCart = (product, quantity, size) => (dispatch, getState) => {
  var cartItem = {
    name: product.name,
    _id: product._id,
    image: product.image,
    size: size,
    quantity: Number(quantity),
    prices: product.prices,
    price: product.prices[0][size] * quantity,
  };
  if (cartItem.quantity > 10) {
    alert("You cannot add more than 10 item quantity");
  } else {
    if (cartItem.quantity <1) {
      dispatch({ type: "DELETE_FROM_CART", payload: product });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (product) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: product });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
