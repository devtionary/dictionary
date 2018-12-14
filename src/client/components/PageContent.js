import React, { Component } from 'react';
import SearchBar from './SearchBar';

class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }

    this.handleSearchChange = (event) => {
      this.setState({searchValue: event.target.value});
    }  
  }

  render() {
    return (
      <section>
        <h1>Hello Devs!</h1>
        <SearchBar 
          searchValue={this.state.searchValue} 
          handleSearchChange={this.handleSearchChange} 
        />
      </section>
    )
  }
}

export default PageContent;