import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { rem } from 'polished';
import { searchTerm } from '../actions/actions';
import ModalSearchIcon from '../components/svg/modal_search_icon';
import SearchTermsItem from '../components/SearchTermsItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ModalStyle = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 30;
    color: white;
  }

  .modal-main {
    position: fixed;
    width: 80%;
    height: auto;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  #header {
    background: rgba(0, 0, 0, 0);
  }

  #search-bar {
  }

  #input {
    width: 100%;
    height: 100px;
    font-size: 50px;
    color: white;
    border: none;
    background: rgba(0, 0, 0, 0);
    border-bottom: 4px solid;
  }
`;

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '', lastSearched: '' };
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    window.addEventListener('keydown', this.onKeyPressed);
  }

  onKeyPressed(e) {
    if (e.key === 'Escape') {
      this.props.toggleShow();
    }
  }

  handleOnChange(e) {
    this.setState({ term: e.target.value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.searchTerm(this.state.term);
    this.setState({ lastSearched: this.state.term });
  }

  renderList() {
    return this.props.list.map(definition => {
      console.log(definition);
      return <SearchTermsItem term={definition} />;
    });
  }
  render() {
    const showHideClassName = this.props.show
      ? 'modal display-block'
      : 'modal display-none';

    return ReactDOM.createPortal(
      <ModalStyle>
        <div id="modal" className={showHideClassName}>
          <section className="modal-main">
            <h1 id="header"> Search for developer phrases</h1>
            <div id="search-bar">
              <form onSubmit={this.handleOnSubmit}>
                <input
                  id="input"
                  type="text"
                  value={this.state.term}
                  onChange={this.handleOnChange}
                />
              </form>
              <ModalSearchIcon />
              <ul>{this.renderList()}</ul>
            </div>
          </section>
        </div>
      </ModalStyle>,
      contents
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.searchModal.searchTerms,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchTerm: searchTerm }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchModal);
