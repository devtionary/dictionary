import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import keys from '../config/keys';

class SignInModal extends Component {
  constructor(props) {
    super(props);
  }

  onSuccessHandler(response) {
    console.log('Logged In as', response);
    this.props.triggerSignIn();
  }

  onFailureHandler(response) {
    console.log(response);
  }

  render() {
    if (this.props.signedIn === false) {
      return (
        <GoogleLogin
          clientId={keys.client_id}
          buttonText="Login"
          onSuccess={this.onSuccessHandler.bind(this)}
          onFailure={this.onFailureHandler.bind(this)}
        />
      );
    } else {
      return (
        <GoogleLogout buttonText="Logout" onLogoutSuccess={this.props.logout} />
      );
    }
  }
}

export default SignInModal;
