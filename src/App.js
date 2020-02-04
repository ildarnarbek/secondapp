import React, { Component } from "react";
import "./App.css";
import AuthContainer from "./Components/AuthContainer";
import Home from "./Components/Home";
import rootReduser from "./Store/reducers";
import { Provider } from "react-redux";
import firebase from "./configforfirebase/Fire";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
// import { getFirebase } from "react-redux-firebase";
// import config from "./configforfirebase/Fire";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

// const middlewares = [
//   thunk.withExtraArgument(getFirebase)
// ]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReduser,
  composeEnhancers(applyMiddleware(thunk))
);

// const store = createStore(
//   rootReduser,
//   compose(
//     applyMiddleware(thunk)
//   )
// );
const rrfConfig = { userProfile: "users", useFirestoreForProfile: true };
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};
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
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Апп ауслисинер Данные из юзера");
        console.log(user);

        this.setState({ user });
        console.log("состояние  стейта после ауслистнера");
        console.log(this.state);
        // localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          {this.state.user ? <Home /> : <AuthContainer />}
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}
export default App;
