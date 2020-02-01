//позже положить в папку createpayments/actions
import firebase from "../configforfirebase/Fire";
export const CREATE_PAYMENT_SUCCESS = "CREATE_PAYMENT_SUCCESS";
export const CREATE_PAYMENT_ERROR = "CREATE_PAYMENT_ERROR";

export const createPayment = payment => {
  return dispatch => {
    firebase
      .firestore()
      .collection("payments")
      .add({
        ...payment,
        paymentDate: new Date(),
        paymentStatus: "В процессе"
      })
      .then(() => {
        dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: payment });
      })
      .catch(err => {
        dispatch({ type: CREATE_PAYMENT_ERROR }, err);
      });
  };
};

// export function createPayment(paymentObject) {
//   return function(dispatch) {
//     console.log("ADD_FIRESTORE_POST ACTION");

//     firebase
//       .firestore()
//       .collection("payments")
//       .add(paymentObject)
//       .then(payment => {
//         dispatch({
//           type: "CREATE_PAYMENT_SUCCESS",
//           payload: {
//             payment,
//             paymentDate: new Date(),
//             paymentStatus: "В процессе"
//           }
//         });
//         console.log("post has been added");
//       })
//       .catch(err => {
//         console.log("post was NOT added");
//       });
//   };
// }
