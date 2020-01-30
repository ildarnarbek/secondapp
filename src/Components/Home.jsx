import React from "react";
import firebase from "../configforfirebase/Fire";
import CreatePayment from "./CreatePayment";
import PaymentsList from "./PaymentsList";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
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

        <div className="table-row">Таблица</div>
        <CreatePayment />
        <div>
          <PaymentsList />
        </div>
      </div>
    );
  }
}
