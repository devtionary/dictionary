import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import Thumbs from './Thumbs';
import UserButton from './UserButton';

export const Definition = props => <article>{props.children}</article>;

export const DefinitionTerm = ({ children }) => <h3>{children}</h3>;

export const DefinitionDescription = ({ children }) => <p>{children}</p>;

export const DefinitionFooter = props => (
  <div>
    {props.user && <Avatar user={props.user} />}
    {props.user && <Link to={props.user.userUrl}>props.user.name</Link>}
    {props.user && <span>|</span>}
    {props.user && props.hasDate && <span>{props.definition.createdOn}</span>}
    <div>
      {props.hasComments && props.comments && (
        <UserButton>{props.comments.count}</UserButton>
      )}
      <Thumbs thumbsUp={props.thumbsUp} thumbsDown={props.thumbsDown} />
    </div>
  </div>
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
