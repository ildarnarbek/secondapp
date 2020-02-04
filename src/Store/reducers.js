import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { homeFindReducer } from "./home/reducers";
import { firebaseReducer } from "react-redux-firebase";
import firestoreReducer from "../Store/PaymentsListReducer";
import addToFirestoreReducer from "../Store/paymentReducer";
import userProfileReducer from "../Store/userReduscer";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeFindReducer,
  firebase: firebaseReducer,
  fetchFirestorePayments: firestoreReducer,
  createPayment: addToFirestoreReducer,
  userProfile: userProfileReducer
});

export default rootReducer;
