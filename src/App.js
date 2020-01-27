import React, { Component } from "react";
import "./App.css";
import AuthContainer from "./Components/AuthContainer";
import { createStore } from "redux";
import rootReduser from "./Store/reducers";
import { Provider } from "react-redux";

const store = createStore(rootReduser);

// console.log(store.getState());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthContainer />
      </Provider>
    );
  }
}
export default App;
