import React from 'react';

function UserButton(props) {
  return (
    <button>
      {props.icon}
      <span>{props.count}</span>
    </button>
  );
}
