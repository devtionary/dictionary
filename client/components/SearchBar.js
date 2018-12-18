import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input
          value={this.props.searchValue}
          onChange={this.props.handleSearchChange}
          type="text"
          placeholder="Search for term..."
        />
        <button type="button" onClick={this.props.handleAllEntries}>See All Entries</button>
      </div>
    )
  }
}

export default SearchBar;