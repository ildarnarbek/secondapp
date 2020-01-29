const initState = {};

const paymentReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PAYMENT_SUCCESS":
      console.log("create payment success");
      return state;
    case "CREATE_PAYMENT_ERROR":
      console.log("create payment error");
      return state;
    default:
      return state;
  }
};

export default paymentReducer;
