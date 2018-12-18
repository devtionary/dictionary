import React, { Component } from 'react';
import TopNav from '../components/TopNav';
import PhraseOfTheDay from '../components/PhraseOfTheDay';
import {
  Definition,
  DefinitionTerm,
  DefinitionDescription,
  DefinitionFooter,
} from '../components/Definition';
import styled from 'styled-components';
import { rem } from 'polished';

const ContentContainerStyled = styled.div`
  padding-top: ${rem('100px')};
  display: grid;
  grid-template-columns: 1.5fr 4fr 0.33fr 2fr;
`;

const PhrasesContainerStyled = styled.div`
  grid-column: 2;
`;

const RecentPhrasesContainerStyled = styled.aside`
  grid-column: 4;
`;

class Home extends Component {
  constructor(props) {
    super(props);

    // TODO: Move into reducer
    this.state = {
      phrases: [
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
          date: '12/16',
          term: 'Callback hell',
          description:
            'A dark place only explored by those who refuse to adopt promises and async/await.',
          thumbsUp: 2,
          thumbsDown: 9,
          termURL: '/',
        },
      ],
      recentPhrases: [
        {
          id: 1,
          term: 'Console.log it',
          description:
            "The mean of logging every single line of code until you've debugged an issue or thrown in the towel due to exasperation.",
          user: {
            avatarUrl: '',
            name: 'genethebene',
            userUrl: '/',
          },
          thumbsUp: 10,
          thumbsDown: 2,
        },
      ],
    };
  }

  render() {
    return (
      <main className={this.props.className}>
        <ContentContainerStyled>
          <PhrasesContainerStyled>
            {this.state.phrases.map((phrase, idx) => (
              <PhraseOfTheDay key={idx} phrase={phrase} />
            ))}
          </PhrasesContainerStyled>
          <RecentPhrasesContainerStyled>
            <h2>Recently created phrases</h2>
            {this.state.recentPhrases.map((definition, idx) => {
              if (idx < 2) {
                return (
                  <Definition key={idx}>
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
              }
            })}
          </RecentPhrasesContainerStyled>
        </ContentContainerStyled>
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

export default Home;
