// // const CREATE_PAYMENT_ADD_PAYMENT = "CREATE_PAYMENT_ADD_PAYMENT";
// // const CREATE_PAYMENT_CANCEL_PAYMENT = "CREATE_PAYMENT_ADD_PAYMENT";

// //позже положить в папку createpayments/actions
// import firebase from "../configforfirebase/Fire";
// // export const createPayment = payment => {
// //   return dispatch => {
// //     firebase
// //       .firestore()
// //       .collection("payments")
// //       .add({
// //         ...payment,
// //         paymentDate: new Date(),
// //         paymentStatus: "В процессе"
// //       })
// //       .then(() => {
// //         dispatch({ type: "CREATE_PAYMENT_SUCCESS", payment });
// //       })
// //       .catch(err => {
// //         dispatch({ type: "CREATE_PAYMENT_ERROR" }, err);
// //       });
// //   };
// // };

// export function createPayment(paymentObject) {
//   return function(dispatch) {
//     console.log("ADD_FIRESTORE_POST ACTION");

//     firebase
//       .firestore()
//       .collection("payments")
//       .add(paymentObject)
//       .then(payment => {
//         dispatch({ type: "CREATE_PAYMENT_SUCCESS", payload: payment });
//         console.log("post has been added");
//       })
//       .catch(err => {
//         console.log("post was NOT added");
//       });
//   };
// }
