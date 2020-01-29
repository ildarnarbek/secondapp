import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { homeFindReducer } from "./home/reducers";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeFindReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
