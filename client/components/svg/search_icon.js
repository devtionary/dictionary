import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const SearchIconStyled = styled(SearchIcon)`
  margin-left: ${rem('4px')};
  padding: ${rem('10px')} ${rem('14px')} ${rem('8px')};

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #f4f4f4;
  }
`;

function SearchIcon(props) {
  return (
    <span
      className={props.className}
      onClick={() => {
        props.toggleShow();
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 27 27">
        <g>
          <path d="M10,20 C12.401,20 14.604,19.152 16.327,17.742 L25.556,26.971 L26.97,25.557 L17.741,16.328 C19.152,14.604 20,12.401 20,10 C20,4.477 15.523,0 10,0 C4.477,0 0,4.477 0,10 C0,15.523 4.477,20 10,20 Z M10,1 C14.963,1 19,5.037 19,10 C19,14.963 14.963,19 10,19 C5.037,19 1,14.963 1,10 C1,5.037 5.037,1 10,1 Z" />
          <rect width="2" height="2" x="5" y="9" />
          <rect width="2" height="2" x="13" y="9" />
          <rect width="2" height="2" x="9" y="9" />
        </g>
      </svg>
    </span>
  );
}

export default SearchIconStyled;
