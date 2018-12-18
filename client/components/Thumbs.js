import React from 'react';

function Thumbs({ thumbsUp, thumbsDown }) {
  return (
    <div>
      <button>{thumbsUp}</button>
      <button>{thumbsDown}</button>
    </div>
  );
}

export default Thumbs;
