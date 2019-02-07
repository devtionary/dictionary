import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from 'polished';

const TermStyle = styled.div`
  #definition {
    width: 100%;
    font-size: 13px;
    color: white;
    border: none;
    background: rgba(0, 0, 0, 0);
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid;
    display: flex;
  }

  #term-box {
    width: 30%;
    font-size: 25px;
    font-weight: 400;
  }

  #text-box {
    width: 30%;
    font-size: 15px;
    line-height: 15px;
  }

  #link-box {
    width: 40%;
    font-size: 20px;
    text-align: right;
  }
`;

export default class SearchTermsItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TermStyle>
        <div id="definition">
          <div id="term-box">
            <h1>{this.props.term}</h1>
          </div>
          <div id="text-box">
            <h1>{this.props.definition}</h1>
          </div>
          <div id="link-box">
            <Link
              to={{
                pathname: '/api/definitions/',
                search: `?wid=${this.props.wId}`,
              }}>
              Read More
            </Link>
          </div>
        </div>
      </TermStyle>
    );
  }
}
