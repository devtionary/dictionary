import React from 'react';
import styled from 'styled-components';

const ResultStyle = styled.div`
  .container {
    margin-top: 110px;
  }
`;

const CreateRequestDef = ({ term }) => (
  <ResultStyle>
    <div className="container">{`No phrase currently exists for "${term}"`}</div>
  </ResultStyle>
);
export default CreateRequestDef;
