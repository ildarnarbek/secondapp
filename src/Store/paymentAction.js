//позже положить в папку createpayments/actions
import firebase from "../configforfirebase/Fire";
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
        dispatch({ type: "CREATE_PAYMENT_SUCCESS", payment });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PAYMENT_ERROR" }, err);
      });
  };
};
