import React, { Component } from 'react';

class NavFields extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.signedIn) {
      return (
        <button onClick={this.props.logout} id="logoutButton">Logout</button>
      )
    }
    return (
      <nav>
        <nav>
          <input
            value={this.props.usernameValue}
            onChange={this.props.handleUsernameChange}
            id="usernameInput"
            type="text"
            name="username"
            placeholder="Enter username here..."
          />
          <input
            value={this.props.passwordValue}
            onChange={this.props.handlePasswordChange}
            id="passwordInput"
            type="password"
            name="password"
            placeholder="Password..."
          />
          <button onClick={this.props.triggerSignIn} id="loginButton">Login</button>
          <a onClick={this.props.triggerSignUp} href="#" >Sign Up</a>
        </nav>
      </nav>
    )
  }
}

export default NavFields;