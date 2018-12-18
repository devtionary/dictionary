import React, { Component } from 'react';
import TopNav from './components/TopNav';
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
        <TopNav />
        <SignInModal
          signedIn={this.state.signedIn}
          triggerSignIn={this.triggerSignIn.bind(this)}
          logout={this.logout.bind(this)}
        />
        {/*{this.state.notice &&*/}
        {/*<NoticeMessage noticeMessage={this.state.noticeMessage} />*/}
        {/*}*/}
        {/*<PageContent*/}
        {/*closeSignUpModal={this.closeSignUpModal}*/}
        {/*signUp={this.state.signUp}*/}
        {/*signedIn={this.state.signedIn}*/}
        {/*user={this.state.user}*/}
        {/*/>*/}
      </main>
    );
  }
}

export default App;
