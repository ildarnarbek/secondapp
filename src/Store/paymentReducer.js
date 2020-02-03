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

export default addTofirestoreReducer;
