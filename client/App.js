import React, { Component } from 'react';
import NavFields from './components/NavFields';
import PageContent from './components/PageContent';
import NoticeMessage from './components/NoticeMessage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignInModal from './components/SignInModal';
class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      signUp: false,
      currentUser: null,
      usernameValue: '',
      passwordValue: '',
      notice: false,
      noticeMessage: ''
    };
    this.handleUsernameChange = event => {
      this.setState({ usernameValue: event.target.value });
    };
    this.handlePasswordChange = event => {
      this.setState({ passwordValue: event.target.value });
    };
    this.logout = () => {
      this.setState({ signedIn: false });
    };
    this.closeSignUpModal = () => {
      this.setState({ signUp: false });
    };
    this.triggerSignUp = event => {
      event.preventDefault();
      this.setState({ signUp: true });
    };
    this.triggerSignIn = () => {
      //   fetch('/api/users', {
      //     method: 'POST',
      //     mode: 'cors',
      //     headers: {
      //       'Content-Type': 'application/json; charset=utf-8'
      //     }
      //   })
      //     .then(function(response) {
      //       return response.json();
      //     })
      //     .then(function(myJson) {
      //       this.setState({ currentUser: JSON.stringify(myJson), { signedIn: true } });
      //     });
      // };
      this.setState({ signedIn: true });
    };
  }

  render() {
    return (
      <main>
        <SignInModal
          signedIn={this.state.signedIn}
          triggerSignIn={this.triggerSignIn.bind(this)}
          logout={this.logout.bind(this)}
        />
        {this.state.notice && (
          <NoticeMessage noticeMessage={this.state.noticeMessage} />
        )}
        <PageContent signedIn={this.state.signedIn} user={this.state.user} />
      </main>
    );
  }
}

export default App;
