import React, { Component } from "react";
import "./App.css";
<<<<<<< HEAD
import AuthContainer from "./Components/AuthContainer";
import { createStore } from "redux";
import rootReduser from "./Store/reducers";
import { Provider } from "react-redux";

const store = createStore(rootReduser);

console.log(store.getState());
=======
import fireb from "./configforfirebase/Fire";
import Home from "./Components/Home";
import Auth from "./Components/Auth";
>>>>>>> parent of 9abd11a... testing connect

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
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return <div className="App">{this.state.user ? <Home /> : <Auth />}</div>;
  }
}
export default App;
