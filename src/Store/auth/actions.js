export const AUTH_CHANGE_EMAIL_TEXT = "AUTH_CHANGE_EMAIL_TEXT";
export const AUTH_CHANGE_PASSWORD_TEXT = "AUTH_CHANGE_PASSWORD_TEXT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const setEmailText = email => ({
  type: AUTH_CHANGE_EMAIL_TEXT,
  payload: email
});

export const setPasswordText = password => ({
  type: AUTH_CHANGE_PASSWORD_TEXT,
  payload: password
});

export const setLoginError = () => ({
  type: LOGIN_ERROR,
  payload: "Login failed"
});

export const setLoginSuccess = () => ({
  type: LOGIN_SUCCESS,
  payload: null
});
