import React from 'react';
import { Link } from 'react-router-dom';

function Avatar({ user }) {
  return (
    <Link to={user.userUrl}>
      <img src={user.avatarUrl} alt={`${user.name}'s avatar`} />
    </Link>
  );
}

export default Avatar;
