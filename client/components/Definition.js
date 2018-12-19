import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import Thumbs from './Thumbs';
import UserButton from './UserButton';
import styled from 'styled-components';
import { rem } from 'polished';

const DefinitionBase = ({ children, className, margins }) => (
  <article className={className} margins={margins}>
    {children}
  </article>
);

export const Definition = styled(DefinitionBase)`
  border-bottom: 4px solid #495460;
  & + & {
    margin-top: ${props => rem(props.margins.top)};
    margin-right: ${props => rem(props.margins.right)};
    margin-bottom: ${props => rem(props.margins.bottom)};
    margin-left: ${props => rem(props.margins.left)};
  }
`;

const DefinitionFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > :first-child {
    display: flex;
    align-items: center;
  }
`;

const UsernameStyled = styled(Link)`
  font-family: 'Cutive Mono', sans-serif;
  color: #495460;
  font-size: ${rem('14px')};
  letter-spacing: ${rem('0.37px')};
  line-height: 1.4;
  text-decoration: none;
  margin-left: ${rem('16px')};

  &:hover {
    text-decoration: underline;
  }
`;

export const DefinitionFooter = props => (
  <DefinitionFooterContainer>
    <div>
      {props.user && <Avatar user={props.user} />}
      {props.user && (
        <UsernameStyled to={props.user.userUrl}>
          {props.user.name}
        </UsernameStyled>
      )}
      {props.user && props.hasDate && <span>|</span>}
      {props.user && props.hasDate && <span>{props.definition.createdOn}</span>}
    </div>
    <div>
      {props.hasComments && props.comments && (
        <UserButton>{props.comments.count}</UserButton>
      )}
      <Thumbs
        size="small"
        thumbsUp={props.thumbsUp}
        thumbsDown={props.thumbsDown}
      />
    </div>
  </DefinitionFooterContainer>
);

export const DefinitionComment = ({ user, createdOn }) => (
  <li>
    <Avatar user={user} />
    <div>
      <Link to={user.userUrl}>{user.name}</Link>
      <span>{createdOn}</span>
    </div>
  </li>
);

export const DefinitionComments = props => (
  <div>
    <ul>
      {props.comments.map(comment => (
        <DefinitionComment
          key={comment.id}
          user={comment.user}
          created_on={comment.createdOn}>
          {comment.text}
        </DefinitionComment>
      ))}
    </ul>
  </div>
);

const DefinitionDescriptionBase = ({ children, className }) => (
  <p className={className}>{children}</p>
);

export const DefinitionDescription = styled(DefinitionDescriptionBase)`
  max-width: ${rem('214px')};
  margin-top: ${rem('20px')};
  font-family: 'HK Grotesk', sans-serif;
  font-size: ${rem('14px')};
  font-weight: 500;
  letter-spacing: ${rem('0.37px')};
  line-height: 1.3;
  color: #495460;
`;

const DefinitionTermBase = ({ children, className }) => (
  <h3 className={className}>{children}</h3>
);

export const DefinitionTerm = styled(DefinitionTermBase)`
  color: #495460;
  font-family: 'HK Grotesk', sans-serif;
  font-size: ${rem('14px')};
  font-weight: bold;
  letter-spacing: ${rem('0.37px')};
  line-height: 1.3;

  &::before {
    content: '“';
  }

  &::after {
    content: '”';
  }
`;

export const DefinitionTermLg = styled(DefinitionTermBase)`
  font-family: 'HK Grotesk';
  color: #495460;
  font-size: ${rem('20px')};
  font-weight: 500;
  letter-spacing: ${rem('0.53px')};
  line-height: 1.6;
`;
