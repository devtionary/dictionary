import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const AnchorStyled = styled.a`
  font-family: 'Hk Grotesk', sans-serif;
  border: ${props =>
    !props.isText ? '#495460 1px solid' : 'rgba(0,0,0,0) 1px solid'};
  font-weight: ${props => (props.size === 'small' ? '300' : 'bold')};
  background-color: rgba(0, 0, 0, 0);
  font-size: ${props => (props.size === 'small' ? rem(12) : rem(14))};
  padding-top: ${props => (props.size === 'small' ? rem(8) : rem(14))};
  padding-right: ${props => (props.size === 'small' ? rem(27) : rem(20))};
  padding-bottom: ${props => (props.size === 'small' ? rem(8) : rem(12))};
  padding-left: ${props => (props.size === 'small' ? rem(28) : rem(21))};
  color: #495460;
  text-transform: uppercase;
  transition: 0.1s ease-in;

  &:hover {
    background-color: #495460;
    border: #495460 1px solid;
    color: #fff;
    cursor: pointer;
  }

  & + & {
    margin-left: ${rem('10px')};
  }
`;

const ButtonStyled = styled.button`
  font-family: 'Hk Grotesk', sans-serif;
  border: ${props =>
    !props.isText ? '#495460 1px solid' : 'rgba(0,0,0,0) 1px solid'};
  font-weight: ${props => (props.size === 'small' ? '300' : 'bold')};
  background-color: rgba(0, 0, 0, 0);
  font-size: ${props => (props.size === 'small' ? rem(12) : rem(14))};
  padding-top: ${props => (props.size === 'small' ? rem(8) : rem(14))};
  padding-right: ${props => (props.size === 'small' ? rem(27) : rem(20))};
  padding-bottom: ${props => (props.size === 'small' ? rem(8) : rem(12))};
  padding-left: ${props => (props.size === 'small' ? rem(28) : rem(21))};
  color: #495460;
  text-transform: uppercase;
  transition: 0.1s ease-in;

  &:hover {
    background-color: #495460;
    border: #495460 1px solid;
    color: #fff;
    cursor: pointer;
  }

  & + & {
    margin-left: ${rem('10px')};
  }
`;

function Button(props) {
  const { anchor, children, isText, onClick } = props;
  if (anchor) {
    return (
      <AnchorStyled onClick={onClick} href="">
        {children}
      </AnchorStyled>
    );
  }

  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

export default ButtonStyled;
