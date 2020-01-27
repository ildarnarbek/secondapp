/* eslint-disable default-case */
import { AUTH_LOGIN_BUTTON_PRESS } from "./actions";

const defaultState = {
  email: "",
  password: ""
};

export const authReduser = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_BUTTON_PRESS:
      return {
        ...state,
        email: action.payload[0],
        password: action.payload[1]
      };
  }
  return state;
};
