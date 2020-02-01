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
import { CREATE_PAYMENT_SUCCESS, CREATE_PAYMENT_ERROR } from "./paymentAction";

const defaultState = {
  payments: {}
};

export const addTofirestoreReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_SUCCESS:
      console.log("Платеж создан");
      return {
        ...state,
        payments: action.payload
      };
    case CREATE_PAYMENT_ERROR:
      console.log("Ошибка создания платежа");
      return {
        ...state
      };
    default:
      return state;
  }
};

//   if (action.type === "CREATE_PAYMENT_SUCCESS") {
//     state = { ...state, payments: action.payload };
//   }

//   return state;
// };

export default addTofirestoreReducer;
