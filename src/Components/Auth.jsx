import React from "react";
// import firebase from "../configforfirebase/Fire";
// import { loginUser } from "../Store/auth/actions";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props в Auth");
    // console.log(props);
    // this.onEmailChange = this.onEmailChange.bind(this);
    // this.onPasswordChange = this.onPasswordChange.bind(this);
    this.getInputValues = this.getInputValues.bind(this);
    this.login = this.login.bind(this);
  }
  state = {
    email: "",
    password: ""
  };
  getInputValues = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onEmailChange(e) {
  //   this.props.setEmailText(e.target.value);
  //   // console.log("props в Auth");
  //   // console.log(this.props);
  // }
  // onPasswordChange(e) {
  //   this.props.setPasswordText(e.target.value);
  // }

  login(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  }
  render() {
    return (
      <div className="col-md-6">
        <form onSubmit={this.login}>
          <div>
            <label htmlFor="exampleInputEmail1">Email:</label>
            <input
              onChange={this.getInputValues}
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
              onChange={this.getInputValues}
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
        <div>{this.props.email}</div>
      </div>
    );
  }
}
