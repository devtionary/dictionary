import React, { Component } from 'react';
import NavFields from './components/NavFields';
import PageContent from './components/PageContent';
import NoticeMessage from './components/NoticeMessage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      signUp: false,
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
    this.logout = () => {
      this.setState({ signedIn: false });
    }
    this.closeSignUpModal = () => {
      this.setState({ signUp: false });
    }
    this.triggerSignUp = (event) => {
      event.preventDefault();
      this.setState({ signUp: true });
    }
    this.triggerSignIn = (event) => {
      event.preventDefault()
      fetch("http://localhost:8080/signin", {
        method: "POST",
        body: JSON.stringify({
          username: this.state.usernameValue,
          password: this.state.passwordValue
        }),
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {

          if (res.isUser === true) {
            this.setState({
              notice: false,
              noticeMessage: '',
              signedIn: true,
              usernameValue: '',
              passwordValue: '',
              user: res.user
            })
          } else {
            this.setState({
              notice:true,
              noticeMessage: 'Incorrect username/password, or user doesn\'t exist. Please try again.'
            })
          }
        })
        .catch(err => console.log("Error with signin: ", err))
    }
  }

  render() {
    return (
      <main>
        <NavFields 
          triggerSignIn={this.triggerSignIn} 
          signedIn={this.state.signedIn} 
          triggerSignUp={this.triggerSignUp} 
          logout={this.logout} 
          usernameValue={this.state.usernameValue}
          handleUsernameChange={this.handleUsernameChange}
          passwordValue={this.state.passswordValue}
          handlePasswordChange={this.handlePasswordChange}
        />
        {this.state.notice && 
          <NoticeMessage noticeMessage={this.state.noticeMessage} />
        }
        <PageContent 
          closeSignUpModal={this.closeSignUpModal} 
          signUp={this.state.signUp} 
          signedIn={this.state.signedIn} 
          user={this.state.user}
        />
      </main>
    )
  };
}

export default App;
