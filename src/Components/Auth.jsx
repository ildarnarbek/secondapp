import React from "react";
import firebase from "../configforfirebase/Fire";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.login = this.login.bind(this);
  }
  onEmailChange(event) {
    this.props.setEmailText(event.target.value);
  }
  onPasswordChange(event) {
    this.props.setPasswordText(event.target.value);
  }

  login(event) {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.props.email, this.props.password)
      .then(user => {
        console.log("Аус логин данные из юзера");
        console.log(user);

        this.props.setLoginSuccess();
        // console.log(this.state);
      })
      .catch(err => {
        console.log(err);
        this.props.setLoginError(err);
      });
  }

  render() {
    return (
      <div className="col-md-6">
        <form>
          <div>
            <label htmlFor="exampleInputEmail1">Email:</label>
            <input
              value={this.props.email}
              onChange={this.onEmailChange}
              type="email"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите Email"
            />
          </div>
          <div>
            <label htmlFor="exampleInputPassword1">Пароль:</label>
            <input
              value={this.props.password}
              onChange={this.onPasswordChange}
              type="password"
              name="password"
              id="exampleInputPassword1"
              placeholder="Введите пароль"
            />
          </div>
          <button type="submit" onClick={this.login}>
            Войти
          </button>
          {/* <div>{this.props.authError ? <p>не верный пароль</p> : null}</div> */}
        </form>
      </div>
    );
  }
}
