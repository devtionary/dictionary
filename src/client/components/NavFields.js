import React, { Component } from 'react';

class NavFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameValue: '',
      passwordValue: ''
    };
    this.handleUsernameChange = (event) => {
      this.setState({usernameValue: event.target.value});
    };
    this.handlePasswordChange = (event) => {
      this.setState({passwordValue: event.target.value});
    };
  }
  render() {
    if (this.props.signedIn) {
      return (
        <button id="logoutButton">Logout</button>
      )
    }
    return (
      <nav>
        <nav>
            <input 
            value={this.state.usernameValue} 
            onChange={this.handleUsernameChange}
            id="usernameInput" 
            type="text" 
            name="username" 
            placeholder="Enter username here..." 
          />
            <input 
            value={this.state.passwordValue} 
            onChange={this.handlePasswordChange}
            id="passwordInput" 
            type="password" 
            name="password" 
            placeholder="Password..." 
          />
            <button id="loginButton">Login</button>
            <a href="#" >Sign Up</a>
          </nav>
      </nav>
    )
  }
}

export default NavFields;