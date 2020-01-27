import React from "react";
import fireb from "../configforfirebase/Fire";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  // функция чтобы выйти
  logout() {
    fireb.auth().signOut();
  }

  render() {
    return (
      <div>
        <header>
          <div>Имя пользователя</div>
          <div>Текущий баланс</div>
          {/* когда кликаем на кнопку то выходим  */}
          <button onClick={this.logout}>Выйти</button>
        </header>

        <div className="table-row">Таблица</div>
      </div>
    );
  }
}
