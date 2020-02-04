import { LOGIN_ERROR, LOGIN_SUCCESS } from "./actions";
// const defaultState = {
//   email: "",
//   password: "",
//   authError: null
// };
const defaultState = {
  // user: {},
  // credential: "",
  // additionalUserInfo: {},
  // operationType: ""
};

export const authReducer = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    // case LOGIN_USER:
    //   return {
    //     ...state,
    //     user: action.payload
    //   };
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
        user: action.payload
      };
    default:
      return state;
  }
};
