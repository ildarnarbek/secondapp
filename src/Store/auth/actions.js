export const AUTH_LOGIN_BUTTON_PRESS = "AUTH_LOGIN_BUTTON_PRESS";

export const setEmailPasswordText = (email, password) => ({
  type: AUTH_LOGIN_BUTTON_PRESS,
  payload: [email, password]
});
