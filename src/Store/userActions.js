import firebase from "../configforfirebase/Fire";
export const FETCH_USER_PROFILE = "FETCH_USER_PROFILE";

export function fetchFirestoreUserProfile() {
  return function(dispatch) {
    // потом изменить идентификатор пользователя
    firebase
      .firestore()
      .collection("users")
      .doc("OxHtSkfrF0TISVgaRQb1DL3kH1g1")
      // .collection("userProfile")
      .get()
      .then(collection => {
        let userProfile = collection.data();
        dispatch({ type: "FETCH_USER_PROFILE", payload: userProfile });
      });
  };
}
