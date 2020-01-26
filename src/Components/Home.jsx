import React, { Component } from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div>Имя пользователя</div>
          <div>Текущий баланс</div>
          <button onClick={this.logout}>Выйти</button>
        </header>

        <div className="table-row">Таблица</div>
      </div>
    );
  }
}
