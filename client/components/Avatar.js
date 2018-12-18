import React from 'react';
import { Link } from 'react-router-dom';
import avatarDefault from '../images/avatar_default.png';
import styled from 'styled-components';
import { rem } from 'polished';

const AvatarContainerStyled = styled.span`
  display: block;
  border-radius: 50%;
  border: 3px solid #495460;
  width: ${rem('27px')};
  height: ${rem('27px')};
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

function Avatar({ user: { avatarUrl, name, userUrl } }) {
  return (
    <Link to={userUrl}>
      <AvatarContainerStyled>
        <img
          src={avatarUrl ? avatarUrl : avatarDefault}
          alt={`${name}'s avatar`}
        />
      </AvatarContainerStyled>
    </Link>
  );
}

export default Avatar;
