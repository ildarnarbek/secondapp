//позже положить в папку createpayments/actions

export const createPayment = payment => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
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
