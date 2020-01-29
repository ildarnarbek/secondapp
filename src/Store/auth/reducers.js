import {
  AUTH_CHANGE_EMAIL_TEXT,
  AUTH_CHANGE_PASSWORD_TEXT,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from "./actions";

const defaultState = {
  email: "",
  password: "",
  authError: null
};

export const authReducer = (state = defaultState, action) => {
  // console.log(state);
  switch (action.type) {
    case AUTH_CHANGE_EMAIL_TEXT:
      return {
        ...state,
        email: action.payload
      };
    case AUTH_CHANGE_PASSWORD_TEXT:
      return {
        ...state,
        password: action.payload
      };
    case LOGIN_ERROR:
      console.log("login error");
      return {
        ...state,
        authError: action.payload
      };
    case LOGIN_SUCCESS:
      console.log("login success");
      return {
        ...state,
        authError: action.payload
      };
    default:
      return state;
  }
};
