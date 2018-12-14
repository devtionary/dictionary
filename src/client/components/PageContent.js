import React, { Component } from 'react';
import SearchBar from './SearchBar';

class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }

    this.handleSearchChange = (event) => {
      this.setState({ searchValue: event.target.value });
      console.log("handle change", this.state.searchValue)
    }
    this.handleSearchSubmit = (e) => {

      // let entriesCopy = JSON.parse(JSON.stringify(this.state.entries))
      let entriesCopy = [{ term: "hello" }, { term: "hey there" }, { term: "yoyoyo" }]
      let entriesToRender = entriesCopy.filter((entry) => {
        return entry.term.includes(this.state.searchValue)

      })
      this.setState({ entriesToRender: entriesToRender })
      console.log("handle submit", this.state.entriesToRender)

    }
  }

  // componentWillMount() {
  //   fetch("/http://localhost:8080/search")
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((data) => {
  //       this.setState({ entries: data })
  //     })
  //     .catch(err => console.log("err in fetching entries: ", err))
  // }

  render() {
    return (
      <section>
        <h1>Hello Devs!</h1>
        <SearchBar
          searchValue={this.state.searchValue}
          handleSearchChange={this.handleSearchChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      </section>
    )
  }
}

export default PageContent;