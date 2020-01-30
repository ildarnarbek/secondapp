import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//action
import { fetchFirestorePayments } from "../Store/PaymentsListActions";

class PaymentsList extends Component {
  componentDidMount = () => {
    // call the action
    this.props.FetchPayments();
  };

  render() {
    return (
      <div>
        {this.props.firestorePayments.map(payment => {
          return (
            <div key={payment.id}>
              {/* поправить */}
              <h3>{payment.data.title}</h3>
              <p>{payment.data.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  //state.ReducerName.reducerProperty
  return {
    firestorePayments: state.firestoreReducer.payments
  };
}

// access using "props.namegiven"
function matchDispatchToProps(dispatch) {
  //bind the action to be executed
  return bindActionCreators(
    { FetchPayments: fetchFirestorePayments },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(PaymentsList); //the name of the component
