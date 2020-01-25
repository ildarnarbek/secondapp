import React, { Component } from 'react';
import fireb from './configforfirebase/Fire';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind (this);
  }

  logout() {
    fireb.auth().signOut();
}
  render() {
    return (
       <div>
        <header>
            <div>Имя пользователя</div>
            <div>Текущий баланс</div>
            <button onClick={this.logout}>Выйти</button>
            </header>

        <div className="table-row">Таблица 2</div>
        
        </div>
    ); 
  }
}
export default Home;