import React, { Component } from "react";
import "./App.css";
import AuthContainer from "./Components/AuthContainer";
import Home from "./Components/Home";
import { createStore } from "redux";
import rootReduser from "./Store/reducers";
import { Provider } from "react-redux";
import fireb from "./configforfirebase/Fire";

const store = createStore(rootReduser);

// console.log(store.getState());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fireb.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(this.state);
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.user ? <Home /> : <AuthContainer />}
      </Provider>
    );
  }
}
export default App;
