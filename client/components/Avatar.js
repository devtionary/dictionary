import React from 'react';
import { Link } from 'react-router-dom';
import avatarDefault from '../images/avatar_default.png';
import styled from 'styled-components';
import { rem } from 'polished';

const AvatarContainerStyled = styled.span`
  display: block;
  border-radius: 50%;
  border: 3px solid #495460;
  width: ${props =>
    props.size === 'lg' ? `${rem('40px')}` : `${rem('27px')}`};
  height: ${props =>
    props.size === 'lg' ? `${rem('40px')}` : `${rem('27px')}`};
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

function Avatar({ anchor, size, user: { avatar, username, userUrl } }) {
  if (anchor) {
    return (
      <a href={userUrl}>
        <AvatarContainerStyled size={size}>
          <img
            src={avatar ? avatar : avatarDefault}
            alt={`${username}'s avatar`}
          />
        </AvatarContainerStyled>
      </a>
    );
  } else {
    return (
      <Link to={userUrl}>
        <AvatarContainerStyled size={size}>
          <img
            src={avatar ? avatar : avatarDefault}
            alt={`${username}'s avatar`}
          />
        </AvatarContainerStyled>
      </Link>
    );
  }
}

export default Avatar;
