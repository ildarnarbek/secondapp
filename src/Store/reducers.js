import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { homeFindReducer } from "./home/reducers";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  auth: authReducer,
  home: homeFindReducer,
  firebase: firebaseReducer
});
