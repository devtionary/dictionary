import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import ThumbsDownIcon from './svg/thumbsDown';
import ThumbsUpIcon from './svg/thumbsUp';

const ThumbsBtn = styled.button`
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  padding: ${props =>
    props.size === 'small'
      ? `${rem('2px')} ${rem('4px')}`
      : `${rem('16px')} ${rem('10px')}`};
  max-width: ${props => (props.size === 'small' ? 'none' : rem('97px'))};
  width: 100%;
  font-family: 'HK Grotesk', sans-serif;
  font-size: ${props => (props.size === 'small' ? rem('12px') : rem('18px'))};
  font-weight: 300;
  letter-spacing: 0.48px;
  line-height: 21px;

  border: 1px solid #979797;

  svg {
    width: ${props => (props.size === 'small' ? rem('12px') : 'auto')};
  }

  &:hover {
    cursor: pointer;
  }
`;

const ThumbsBtnUp = styled(ThumbsBtn)`
  background-color: ${props => (props.toggleUp ? '#495460' : 'rgba(0,0,0,0)')};
  color: ${props => (props.toggleUp ? '#ffffff' : '#495460')};

  path {
    fill: ${props => (props.toggleUp ? '#ffffff' : '#495460')};
  }

  &:hover {
    background-color: ${props =>
      props.toggleUp ? 'rgba(0,0,0,0)' : '#495460'};
    color: ${props => (props.toggleUp ? '#495460' : '#ffffff')};

    path {
      fill: ${props => (props.toggleUp ? '#495460' : '#ffffff')};
    }
  }
`;

const ThumbsBtnDown = styled(ThumbsBtn)`
  background-color: ${props =>
    props.toggleDown ? '#495460' : 'rgba(0,0,0,0)'};
  color: ${props => (props.toggleDown ? '#ffffff' : '#495460')};
  margin-left: ${props => (props.size === 'small' ? rem('10px') : rem('18px'))};

  path {
    fill: ${props => (props.toggleDown ? '#ffffff' : '#495460')};
  }

  &:hover {
    background-color: ${props =>
      props.toggleDown ? 'rgba(0,0,0,0)' : '#495460'};
    color: ${props => (props.toggleDown ? '#495460' : '#ffffff')};

    path {
      fill: ${props => (props.toggleDown ? '#495460' : '#ffffff')};
    }
  }
`;

const ThumbBtnContainer = styled.div`
  display: ${props => (props.size === 'small' ? 'flex' : 'auto')};
  width: ${props => (props.size === 'small' ? rem('110px') : 'auto')};
  margin-top: ${props => (props.size === 'small' ? rem('20px') : 'auto')};
  margin-bottom: ${props => (props.size === 'small' ? rem('20px') : 'auto')};
`;

function Thumbs({ onClick, size, thumbsUp, thumbsDown, toggleUp, toggleDown }) {
  return (
    <ThumbBtnContainer size={size}>
      <ThumbsBtnUp size={size} onClick={onClick} toggleUp={toggleDown}>
        <ThumbsUpIcon />
        <span>{thumbsUp}</span>
      </ThumbsBtnUp>
      <ThumbsBtnDown size={size} onClick={onClick} toggleDown={toggleDown}>
        <ThumbsDownIcon />
        <span>{thumbsDown}</span>
      </ThumbsBtnDown>
    </ThumbBtnContainer>
  );
}

export default Thumbs;
