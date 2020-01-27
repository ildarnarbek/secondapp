import React from "react";

export default class Auth extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <form>
          <div>
            <label htmlFor="exampleInputEmail1">Email:</label>
            <input
              //   value={this.state.email}
              onChange={this.handleChange}
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
              //   value={this.state.password}
              onChange={this.handleChange}
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
