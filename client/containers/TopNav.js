import React, { Component } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import Avatar from '../components/Avatar';
import DevtionaryLogo from '../components/svg/dev_logo';
import SearchIcon from '../components/svg/search_icon';
import SignInModal from '../components/SignInModal';
import SearchModal from '../containers/SearchModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDisplaySearch } from '../actions/actions';

const TopNavWrapperStyled = styled.section`
  position: fixed;
  z-index: 10;
  width: 100%;
  padding-top: ${rem('22px')};
  padding-bottom: ${rem('22px')};
  background-color: #ffffff;
`;

const NavStyled = styled.div`
  max-width: ${rem('1250px')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const NavActionsStyled = styled.div`
  display: flex;
  align-items: center;
`;

const UserStyled = styled.div`
  display: inline-flex;
  max-width: ${rem('170px')};

  > :first-child {
    margin-right: ${`14px`};
  }
accessToken
accessToken
accessToken
accessToken
accessToken
accessToken
accessToken
  > div span:first-of-type {
    width: 100%;
    font-weight: bold;
  }

  > div span:last-of-type {
    font-family: 'Cutive Mono', sans-serif;
  }
`;

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
    };

    this.triggerSignIn = this.triggerSignIn.bind(this);
    this.logout = this.logout.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  logout() {
    this.setState({ signedIn: false });
  }
  triggerSignIn() {
    const obj = {
      accessToken: response.accessToken,
      profileObj: response.profileObj,
    };
    console.log(obj);
    fetch('http://localhost:8080/api/auth', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(obj),
    })
      .then(function(response) {
        console.log('RESPONSE', response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        this.setState({ currentUser: JSON.stringify(myJson), signedIn: true });
      });
  }

  toggleShow() {
    this.props.toggleDisplaySearch();
  }

  render() {
    return (
      <TopNavWrapperStyled className={this.props.className}>
        <NavStyled>
          <a href="/">
            <DevtionaryLogo />
          </a>
          <NavActionsStyled>
            {!this.state.signedIn && (
              <SignInModal
                signedIn={this.state.signedIn}
                triggerSignIn={this.triggerSignIn}
                logout={this.logout}
              />
            )}
            <SearchIcon toggleShow={this.toggleShow} />
            <SearchModal
              show={this.props.displaySearch}
              toggleShow={this.toggleShow}
            />
            {this.state.signedIn && (
              <UserStyled>
                <Avatar user={this.state.curUser} size="lg" anchor />
                <div>
                  <span>Welcome back,</span>
                  <span>{this.state.curUser.name}</span>
                </div>
              </UserStyled>
            )}
          </NavActionsStyled>
        </NavStyled>
      </TopNavWrapperStyled>
    );
  }
}

function mapStateToProps(state) {
  return { displaySearch: state.searchModal.displaySearch };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { toggleDisplaySearch: toggleDisplaySearch },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNav);
