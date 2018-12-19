import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from 'polished';

const RequestedPhrasesStyled = styled.div`
  position: sticky;
  height: 100vh;
  top: ${rem('60px')};
  background-color: #ccaebb;
  padding: ${rem('40px')} ${rem('20px')} ${rem('20px')} ${rem('20px')};
  max-height: ${rem('364px')};
`;

const HeaderStyled = styled.h2`
  max-width: ${rem('130px')};
  margin-top: ${rem('30px')};
  margin-bottom: ${rem('60px')};
  font-family: 'HK Grotesk', sans-serif;
  font-size: ${rem('14px')};
  font-weight: bold;
  letter-spacing: ${rem('0.37px')};
  line-height: 1.5;
  text-transform: uppercase;
  color: #495460;
`;

const PhraseStyled = styled.li`
  a {
    font-family: 'HK Grotesk', sans-serif;
    color: #495460;
    font-size: ${rem('14px')};
    letter-spacing: ${rem('0.37px')};
    line-height: 1.8;

    &:hover {
      text-decoration: double;
    }
  }
`;

const SeeMoreStyled = styled(Link)`
  display: block;
  margin-top: ${rem('30px')};
  font-family: 'HK Grotesk', sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.37px;
  line-height: 17px;
  text-decoration: none;
  color: #495460;

  &:hover {
    text-decoration: underline;
  }
`;

function RequestedPhrases(props) {
  return (
    <RequestedPhrasesStyled className={props.className}>
      <HeaderStyled>Requested Phrases</HeaderStyled>
      <ul>
        {props.requestedPhrases.map(phrase => (
          <PhraseStyled key={phrase.id}>
            <Link to={phrase.link}>{phrase.term}</Link>
          </PhraseStyled>
        ))}
      </ul>
      <SeeMoreStyled to="/requests">See more</SeeMoreStyled>
    </RequestedPhrasesStyled>
  );
}

export default RequestedPhrases;
