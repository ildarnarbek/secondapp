export const AUTH_CHANGE_EMAIL_TEXT = "AUTH_CHANGE_EMAIL_TEXT";
export const AUTH_CHANGE_PASSWORD_TEXT = "AUTH_CHANGE_PASSWORD_TEXT";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_ERROR = "AUTH_LOGIN_ERROR";

export const setEmailText = email => ({
  type: AUTH_CHANGE_EMAIL_TEXT,
  payload: email
});

export const setPasswordText = password => ({
  type: AUTH_CHANGE_PASSWORD_TEXT,
  payload: password
});

export const setLoginError = () => ({
  type: AUTH_LOGIN_ERROR,
  payload: "Login failed"
});

export const setLoginSuccess = () => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: null
});
