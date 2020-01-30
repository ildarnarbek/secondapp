const firestoreReducer = (
  //initial state
  state = {
    payments: []
  },
  action
) => {
  if (action.type === "FETCH_FIRESTORE_PAYMENTS") {
    state = { ...state, payments: action.payload };
  }

  return state;
};

export default firestoreReducer;
