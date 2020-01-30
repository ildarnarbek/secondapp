import firebase from "../configforfirebase/Fire";

export function fetchFirestorePayments() {
  return function(dispatch) {
    firebase
      .firestore()
      .collection("payments")
      .get()
      .then(querySnapshot => {
        let payments = [];
        querySnapshot.forEach(doc => {
          //console.log(doc.id, doc.data());
          let payment = {
            id: doc.id,
            data: doc.data()
          };

          payments.push(payment);
        });
        console.log(payments);
        //dispatch the action with the posts as the payload
        dispatch({ type: "FETCH_FIRESTORE_PAYMENTS", payload: payments });
      });
  };
}
