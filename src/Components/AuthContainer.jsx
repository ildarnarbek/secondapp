import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";
import {
  setEmailText,
  setPasswordText,
  setLoginError,
  setLoginSuccess
} from "../Store/auth/actions";

class AuthContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Auth
        email={this.props.email}
        password={this.props.password}
        setEmailText={this.props.setEmailText}
        setPasswordText={this.props.setPasswordText}
        setLoginError={this.props.setLoginError}
        setLoginSuccess={this.props.setLoginSuccess}
      />
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    email: state.auth.email,
    password: state.auth.password,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = {
  setEmailText: setEmailText,
  setPasswordText: setPasswordText,
  setLoginError: setLoginError,
  setLoginSuccess: setLoginSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
