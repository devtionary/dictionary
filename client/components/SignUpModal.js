import React, { Component } from 'react';

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameValue: '',
      passwordValue: '',
      notice: false,
      noticeMessage: ''
    };
    this.handleUsernameChange = (event) => {
      this.setState({ usernameValue: event.target.value });
    };
    this.handlePasswordChange = (event) => {
      this.setState({ passwordValue: event.target.value });
    };
    this.handleSignup = (event) => {
      event.preventDefault()
      fetch('http://localhost:8080/signup', {
        method: "POST",
        body: JSON.stringify({
          username: this.state.usernameValue,
          password: this.state.passwordValue
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => res.json())
        .then((res) => {
          if(res.userAlready === true) {
            this.state({
              notice: true,
              noticeMessage: 'User already exists. Try a different username.'
            });
          } else{
            this.setState({
              notice: false,
              noticeMessage: ''
            });
            this.props.closeSignUpModal()
            console.log('success!')
          }
        })
        .catch(err => console.log("error with signUP: ", err))
    }
  }
  render() {
    return (
      <section>
        <button onClick={this.props.closeSignUpModal} >X</button>
        <input
          value={this.state.usernameValue}
          onChange={this.handleUsernameChange}
          id="usernameInput"
          type="text"
          name="username"
          placeholder="Enter desired username..."
        />
        <input
          value={this.state.passwordValue}
          onChange={this.handlePasswordChange}
          id="passwordInput"
          type="password"
          name="password"
          placeholder="Enter password..."
        />
        <button onClick={this.handleSignup} id="signUpButton">Sign Up</button>
        {this.state.notice && 
          <NoticeMessage noticeMessage={this.state.noticeMessage} />
        }
      </section>
    )
  }
}

export default SignUpModal;