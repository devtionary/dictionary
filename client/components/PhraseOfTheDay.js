import React from 'react';
import { Link } from 'react-router-dom';
import Thumbs from './Thumbs';
import styled from 'styled-components';
import { rem } from 'polished';

const ArticleStyled = styled.article`
  margin-bottom: ${rem('30px')};
  padding: ${rem('20px')};
  background-color: #eaf4ff;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

const DateStyled = styled.div`
  font-family: 'HK Grotesk';
  font-size: ${rem('36px')};
  font-weight: 300;
  letter-spacing: ${rem('0.95px')};
  line-height: 1.5;
  color: #b2becb;
`;

const PhraseHeaderStyled = styled.h2`
  font-family: 'HK Grotesk';
  font-size: ${rem('14px')};
  font-weight: bold;
  letter-spacing: ${rem('0.37px')};
  line-height: 1.3;
  text-transform: uppercase;
  color: #495460;
`;

const TermStyled = styled.h3`
  position: relative;
  margin-top: ${rem('60px')}
  font-family: 'HK Grotesk';
  font-size: ${rem('48px')};
  font-weight: bold;
  letter-spacing: ${rem('1.27px')};
  line-height: 1.9;
  color: #495460;
  
  &::before {
    content: '"';
    font-family: "HK Grotesk";
    font-size: ${rem('48px')};
    font-weight: bold;
    letter-spacing: ${rem('1.27px')};
    line-height: 2.1;
    color: #495460;
  }
`;

const Descriptiontyled = styled.p`
  font-family: 'Cutive Mono';
  color: #121418;
  font-size: ${rem('14px')};
  letter-spacing: ${rem('0.37px')};
  line-height: 1.4;
  max-width: ${rem('337px')};
`;

function PhraseOfTheDay({ phrase }) {
  return (
    <ArticleStyled>
      <DateStyled>{phrase.date}</DateStyled>
      <PhraseHeaderStyled>Phrase of the day</PhraseHeaderStyled>
      <TermStyled>{phrase.term}</TermStyled>
      <Descriptiontyled>{phrase.description}</Descriptiontyled>
      <div>
        <Thumbs thumbsUp={phrase.thumbsUp} thumbsDown={phrase.thumbsDown} />
        <Link to={phrase.termURL}>Read more</Link>
      </div>
    </ArticleStyled>
  );
}

export default PhraseOfTheDay;
