import firebase from "../configforfirebase/Fire";
export const FETCH_FIRESTORE_PAYMENTS = "FETCH_FIRESTORE_PAYMENTS";

export function fetchFirestorePayments() {
  return function(dispatch) {
    // потом изменить идентификатор пользователя
    firebase
      .firestore()
      .collection("users")
      .doc("OxHtSkfrF0TISVgaRQb1DL3kH1g1")
      .collection("payments")
      .get()
      .then(querySnapshot => {
        let payments = [];
        querySnapshot.forEach(doc => {
          // console.log(doc.id, doc.data());
          let payment = {
            id: doc.id,
            data: doc.data()
          };

          payments.push(payment);
        });
        console.log("Загруженные платежи");
        console.log(payments);

        //dispatch the action with the posts as the payload
        dispatch({ type: "FETCH_FIRESTORE_PAYMENTS", payload: payments });
      });
  };
}
