import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchFirestorePayments } from "../Store/PaymentsListActions";

export default class PaymentsList extends Component {
  // constructor(props) {
  //   super(props);

  // }
  componentDidMount = () => {
    // call the action
    this.props.fetchFirestorePayments();
  };

  render() {
    return (
      <div className="table">
        {this.props.firestorePayments.map(payment => {
          return (
            <div key={payment.id} className="table-row">
              {/* поправить */}
              <span>{payment.data.paymentDescription}</span>
              <span>{payment.data.paymentComment}</span>
              <span>{payment.data.paymentSum}</span>
              <span>{payment.data.paymentReceiver}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   //state.ReducerName.reducerProperty
//   return {
//     firestorePayments: state.fetchFirestorePayments.payments
//   };
// }

// // access using "props.namegiven"
// function matchDispatchToProps(dispatch) {
//   //bind the action to be executed
//   return bindActionCreators(
//     { FetchPayments: fetchFirestorePayments },
//     dispatch
//   );
// }

// export default connect(mapStateToProps, matchDispatchToProps)(PaymentsList); //the name of the component
