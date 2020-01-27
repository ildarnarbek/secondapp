/* eslint-disable default-case */
import { HOME_CHANGE_FIND_FIELD } from "./actions";

const defaultState = {
  userName: "",
  userBalance: "",
  keywordToFind: "",
  userPayments: [
    {
      paymentDescription: "",
      paymentSum: "",
      paymentDate: "",
      paymentStatus: "",
      paymentReceiver: ""
    },
    {
      paymentDescription: "",
      paymentSum: "",
      paymentDate: "",
      paymentStatus: "",
      paymentReceiver: ""
    },
    {
      paymentDescription: "",
      paymentSum: "",
      paymentDate: "",
      paymentStatus: "",
      paymentReceiver: ""
    }
  ]
};

export const homeFindReduser = (state = defaultState, action) => {
  switch (action.type) {
    case HOME_CHANGE_FIND_FIELD:
      return {
        ...state,
        keywordToFind: action.payload
      };
    // default:
  }
  return state;
};
