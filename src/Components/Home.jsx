import React from "react";
import firebase from "../configforfirebase/Fire";
import CreatePayment from "./CreatePayment";
import PaymentsList from "./PaymentsList";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { fetchFirestorePayments } from "../Store/PaymentsListActions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    // this.fetchFirestorePayments = this.fetchFirestorePayments.bind(this);
  }
  // функция чтобы выйти
  logout() {
    firebase.auth().signOut();
    console.log("выход");
  }

  render() {
    return (
      <div>
        <header>
          <div>Имя пользователя</div>
          <div>Текущий баланс</div>
          {/* когда кликаем на кнопку то выходим  */}
          <button onClick={this.logout}>Выйти</button>
          <button>Создать платеж</button>
        </header>

        <div>Таблица</div>

        <PaymentsList
          firestorePayments={this.props.firestorePayments}
          fetchFirestorePayments={this.props.fetchFirestorePayments}
        />
        <CreatePayment />
      </div>
    );
  }
}
function mapStateToProps(state) {
  //state.ReducerName.reducerProperty
  return {
    firestorePayments: state.fetchFirestorePayments.payments
  };
}

// access using "props.namegiven"
const matchDispatchToProps = {
  fetchFirestorePayments: fetchFirestorePayments
};

export default connect(mapStateToProps, matchDispatchToProps)(Home); //the name of the component
