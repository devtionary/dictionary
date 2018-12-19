import React, { Component } from 'react';

import Avatar from '../components/Avatar';
import {
  Definition,
  DefinitionDescription,
  DefinitionFooter,
  DefinitionTerm,
} from '../components/Definition';
import styled from 'styled-components';
import { rem } from 'polished';

const UsernameHeaderStyled = styled.h1`
  font-family: 'HK Grotesk', sans-serif;
  font-size: ${rem('36px')};
  font-weight: 300;
  letter-spacing: ${rem('0.95px')};
  line-height: 1;
  color: #495460;
  text-transform: capitalize;
  margin-bottom: ${rem('10px')};
`;

const UserHeaderContainerStyled = styled.div`
  display: flex;
  position: sticky;
  height: 70px;
  top: 97px;
  background-color: #fff;
  z-index: 10;
  transform: translateY(-5px);

  > div {
    margin-left: ${rem('18px')};
  }
`;

const SubheaderStyled = styled.h3`
  font-family: 'Cutive Mono', sans-serif;
  font-size: ${rem('14px')};
  margin-left: ${rem('2px')};
  -webkit-font-smoothing: antialiased;
`;

const CredibilityContainerStyled = styled.div`
  grid-column: 3;
  max-height: ${rem('194px')};
  background-color: #ccaebb;
  padding: ${rem('50px')};

  > span {
    font-family: 'HK Grotesk', sans-serif;
    font-size: ${rem('64px')};
    font-weight: 300;
    letter-spacing: ${rem('1.7px')};
    line-height: 1.9;
    color: #495460;
  }
`;

const PhrasesHeader = styled.h2`
  font-family: 'HK Grotesk', sans-serif;
  font-size: ${rem('24px')};
  font-weight: bold;
  letter-spacing: ${rem('0.64px')};
  line-height: 1.5;
  color: #495460;
  margin-top: ${rem('100px')};
  margin-bottom: ${rem('60px')};
`;

const PhrasesWrapper = styled.div`
  padding-left: ${rem('60px')};
  margin-bottom: ${rem('60px')};
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curUser: {
        name: 'genethebene',
        userUrl: '/genethebene',
        definitions: [
          {
            id: 1,
            date: '12/18',
            term: 'Spin up a server',
            description: `Originally most servers were storage servers with multiple hard disks attached.
            
            So when a server was started the OS had to boot as well as the HDD all come up to speed before the server was useful. So the term spin up the server refers to the start time, primarily to spin the hard drives to operating speed so it can boot and they are ready to respond.`,
            thumbsUp: 10,
            thumbsDown: 2,
            termURL: '/',
          },
          {
            id: 2,
            date: '12/17',
            term: 'Rubber ducking',
            description:
              'In software engineering, rubber duck debugging is a method of debugging code. The name is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck.',
            thumbsUp: 22,
            thumbsDown: 3,
            termURL: '/',
          },
          {
            id: 3,
            date: '12/16',
            term: 'Callback hell',
            description:
              'A dark place only explored by those who refuse to adopt promises and async/await.',
            thumbsUp: 2,
            thumbsDown: 9,
            termURL: '/',
          },
        ],
        upVotes: 34,
        downVotes: 14,
      },
    };
  }

  render() {
    return (
      <section className={this.props.className}>
        <div>
          <UserHeaderContainerStyled>
            <Avatar size="lg" user={this.state.curUser} />
            <div>
              <UsernameHeaderStyled>
                {this.state.curUser.name}
              </UsernameHeaderStyled>
              <SubheaderStyled>
                {this.state.curUser.definitions.length} definitions submitted
              </SubheaderStyled>
            </div>
          </UserHeaderContainerStyled>
          <PhrasesWrapper>
            <PhrasesHeader>Submitted phrases</PhrasesHeader>
            {this.state.curUser &&
              this.state.curUser.definitions.map(definition => {
                return (
                  <Definition
                    key={definition.id}
                    margins={{
                      top: `30px`,
                    }}>
                    <DefinitionTerm>{definition.term}</DefinitionTerm>
                    <DefinitionDescription>
                      {definition.description}
                    </DefinitionDescription>
                    <DefinitionFooter
                      user={definition.user}
                      thumbsUp={definition.thumbsUp}
                      thumbsDown={definition.thumbsDown}
                      hasComments
                    />
                  </Definition>
                );
              })}
          </PhrasesWrapper>
        </div>
        <CredibilityContainerStyled>
          <SubheaderStyled>Credibility</SubheaderStyled>
          <span>
            {(
              ((this.state.curUser.upVotes +
                this.state.curUser.downVotes * -1) /
                this.state.curUser.definitions.length) *
              10
            ).toFixed(2)}{' '}
            %
          </span>
        </CredibilityContainerStyled>
      </section>
    );
  }
}

export default Profile;
