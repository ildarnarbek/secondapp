import React from "react";

// import fireb from "../configforfirebase/Fire";

export default class Auth extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.login = this.login.bind(this);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.state = {
  //       email: "",
  //       password: ""
  //     };
  //   }
  //   тут нужно разобраться
  //   login(e) {
  //     e.preventDefault();
  //     fireb
  //       .auth()
  //       .signInWithEmailAndPassword(this.state.email, this.state.password)
  //       .then(u => {})
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // надо понять че это такое
  //   Функция которая вешается на инпут, в процессе ввода значения в инпут перехватывает значение и отрпавляет его в текущий стейт
  //   handleChange(e) {
  //     this.setState({ [e.target.name]: e.target.value });
  //   }
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  onEmailChange(event) {
    this.props.setEmailText(event.target.value);
  }
  onPasswordChange(event) {
    this.props.setPasswordText(event.target.value);
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
        </form>
      </div>
    );
  }
}
