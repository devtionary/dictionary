import React, { Component } from 'react';
import DevtionaryLogo from './svg/dev_logo';
import SearchIcon from './svg/search_icon';
import SignInModal from './SignInModal';
import Button from './Button';
import styled from 'styled-components';
import { rem } from 'polished';

const TopNavWrapperStyled = styled.section`
  position: fixed;
  max-width: ${rem('1250px')};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${rem('22px')};
  background-color: #ffffff;
`;

const NavActionsStyled = styled.div`
  display: flex;
  align-items: center;
`;

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
  }

  render() {
    return (
      <TopNavWrapperStyled className={this.props.className}>
        <DevtionaryLogo />
        <NavActionsStyled>
          <Button>Sign up</Button>
          <Button isText>Log in</Button>
          <SearchIcon />
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
        </NavActionsStyled>
      </TopNavWrapperStyled>
    );
  }
}

export default TopNav;
