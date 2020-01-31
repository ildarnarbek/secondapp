// const initState = {
//   payment: {}
// };

// const paymentReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "CREATE_PAYMENT_SUCCESS":
//       console.log("create payment success");
//       return { ...state, payments: action.payload };
//     case "CREATE_PAYMENT_ERROR":
//       console.log("create payment error");
//       return state;
//     default:
//       return state;
//   }
// };

// export default paymentReducer;

const addTofirestoreReducer = (
  //initial state
  state = {
    payment: {}
  },
  action
) => {
  if (action.type === "CREATE_PAYMENT_SUCCESS") {
    state = { ...state, payments: action.payload };
  }

  return state;
};

export default addTofirestoreReducer;
