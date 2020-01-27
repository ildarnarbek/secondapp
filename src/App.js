import React, { Component } from "react";
import "./App.css";
import AuthContainer from "./Components/AuthContainer";
import { createStore } from "redux";
import rootReduser from "./Store/reducers";
import { Provider } from "react-redux";

const store = createStore(rootReduser);

console.log(store.getState());

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: {}
  //   };
  // }

  // какая то функция про жизненный цикл
  // componentDidMount() {
  //   this.authListener();
  // }

  // // возможно функция смотрит зарегены мы или нет
  // authListener() {
  //   fireb.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({ user });
  //       localStorage.setItem("user", user.uid);
  //     } else {
  //       this.setState({ user: null });
  //       localStorage.removeItem("user");
  //     }
  //   });
  // }

  render() {
    return (
      <Provider store={store}>
        <AuthContainer />
      </Provider>
    );
  }
}
export default App;
