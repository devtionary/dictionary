import React, { Component } from 'react';
import DevtionaryLogo from './svg/dev_logo';
import SearchIcon from './svg/search_icon';
import SignInModal from "./SignInModal";

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.triggerSignIn = this.triggerSignIn.bind(this);
  }

  //     fetch("http://localhost:8080/signin", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         username: this.state.usernameValue,
  //         password: this.state.passwordValue
  //       }),
  //       headers: {
  //         "Content-type": "application/json"
  //       }
  //     })

  triggerSignIn() {
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

  render() {
    return (
      <section>
        <DevtionaryLogo />
        <button>Sign up</button>
        <button>Log in</button>
        <SignInModal
          signedIn={this.state.signedIn}
          triggerSignIn={this.triggerSignIn.bind(this)}
          logout={this.logout.bind(this)}
        />
        <SearchIcon />
        {/*{this.state.notice &&*/}
        {/*<NoticeMessage noticeMessage={this.state.noticeMessage} />*/}
        {/*}*/}
        {/*<PageContent*/}
        {/*closeSignUpModal={this.closeSignUpModal}*/}
        {/*signUp={this.state.signUp}*/}
        {/*signedIn={this.state.signedIn}*/}
        {/*user={this.state.user}*/}
        {/*/>*/}
      </section>
    );
  }
}

export default TopNav;
