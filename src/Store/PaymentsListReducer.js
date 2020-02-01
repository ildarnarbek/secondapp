import { FETCH_FIRESTORE_PAYMENTS } from "./PaymentsListActions";

const defaultState = {
  payments: []
};
const firestoreReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_FIRESTORE_PAYMENTS:
      return {
        ...state,
        payments: action.payload
      };
    default:
      return state;
  }
};
//   if (action.type === "FETCH_FIRESTORE_PAYMENTS") {
//     state = { ...state, payments: action.payload };
//   }

//   return state;
// };

export default firestoreReducer;
