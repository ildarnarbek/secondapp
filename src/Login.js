import React, { Component } from 'react';
import fireb from './configforfirebase/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    fireb.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
       <div className="col-md-6">
       <form>
      <div>
       <label htmlFor="exampleInputEmail1">Email:</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите Email" />
       </div>
       <div>
      <label htmlFor="exampleInputPassword1">Пароль:</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Введите пароль" />
      </div>
      <button type="submit" onClick={this.login} >Войти</button>

 </form>
 
 </div>
    );
  }
}
export default Login;