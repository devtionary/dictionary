import React, { Component } from 'react';
import NavFields from './components/NavFields';
import PageContent from './components/PageContent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      signUp: false
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
              signedIn: true
            })
          }
        })
        .catch(err => console.log("Error with signin: ", err))
    }
  }

  render() {
    return (
      <main>
        <NavFields triggerSignIn={this.triggerSignIn} signedIn={this.state.signedIn} triggerSignUp={this.triggerSignUp} logout={this.logout} />
        <PageContent closeSignUpModal={this.closeSignUpModal} signUp={this.state.signUp} signedIn={this.state.signedIn} />
      </main>
    )
  };
}

export default App;
