import firebase from "../../configforfirebase/Fire";
// export const AUTH_CHANGE_EMAIL_TEXT = "AUTH_CHANGE_EMAIL_TEXT";
// export const AUTH_CHANGE_PASSWORD_TEXT = "AUTH_CHANGE_PASSWORD_TEXT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
// export const LOGIN_USER = "LOGIN_USER";
// export const setEmailText = email => ({
//   type: AUTH_CHANGE_EMAIL_TEXT,
//   payload: email
// });

// export const setPasswordText = password => ({
//   type: AUTH_CHANGE_PASSWORD_TEXT,
//   payload: password
// });
export function loginUser(userObject) {
  return function(dispatch) {
    let user = {
      email: userObject["email"],
      password: userObject["password"]
    };

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(user => {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        console.log("даные юзера");
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export const setLoginError = () => ({
  type: LOGIN_ERROR,
  payload: "Login failed"
});

// export const setLoginSuccess = () => ({
//   type: LOGIN_SUCCESS,
//   payload: null
// });
