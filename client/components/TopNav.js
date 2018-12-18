import React, { Component } from 'react';
import DevtionaryLogo from './svg/dev_logo';
import SearchIcon from './svg/search_icon';

class TopNav extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <section>
        <DevtionaryLogo />
        <button>Sign up</button>
        <button>Log in</button>
        <SearchIcon />
      </section>
    );
  }
}

export default TopNav;
