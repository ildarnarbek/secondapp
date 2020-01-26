import React, { Component } from "react";
import fireb from "./configforfirebase/Fire";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fireb.auth().signOut();
  }
}
export default Home;
