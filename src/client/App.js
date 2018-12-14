import React, { Component } from 'react';
import NavFields from './components/NavFields';
import PageContent from './components/PageContent';


class App extends Component {
  constructor() {
    super();
    this.state = {
        signedIn: false,
        signUp: false
    };
    this.logout = () => {
      this.setState({signedIn: false});
    }
    this.closeSignUpModal = () => {
      this.setState({signUp: false});
    }
    this.triggerSignUp = (event) => {
      event.preventDefault();
      this.setState({signUp: true});
    }
  }

  render() {
    return (
    <main>
      <NavFields signedIn={this.state.signedIn} triggerSignUp={this.triggerSignUp} logout={this.logout} />
      <PageContent closeSignUpModal={this.closeSignUpModal} signUp={this.state.signUp} signedIn={this.state.signedIn} />
    </main>
    )
  };
}

export default App;