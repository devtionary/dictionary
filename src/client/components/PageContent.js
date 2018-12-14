import React, { Component } from 'react';
import SearchBar from './SearchBar';
import EntryList from './EntryList';
import SignUpModal from './SignUpModal';
import CreateEntry from './CreateEntry';

class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      entries: [{
        term: 'Hola Dude',
        definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdBy: 'Briandaman',
        upvotes: 3,
        downvotes: 0
      },
      {
        term: 'Spin it Up',
        definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdBy: 'Briandaman',
        upvotes: 3,
        downvotes: 0
      },
      {
        term: 'Backpack',
        definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdBy: 'Briandaman',
        upvotes: 3,
        downvotes: 0
      }],
      entriesToRender: []
    }
    this.handleSearchChange = (event) => {
      this.setState({ searchValue: event.target.value });
      console.log("handle change", this.state.searchValue)


      let entriesCopy = JSON.parse(JSON.stringify(this.state.entries))

      let entriesToRender = entriesCopy.filter((entry) => {

        return entry.term.toLowerCase().includes(this.state.searchValue.toLowerCase())
      })
      this.setState({ entriesToRender })
      console.log("handle submit", this.state.entriesToRender)
    }
    this.handleAllEntries = (event) => {
      this.setState({ entriesToRender: this.state.entries })
    }
  }

  componentDidUpdate() {
    console.log("did update", this.state.entries)
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
    if (this.props.signUp) {
      return (
        <section>
        <h1>Hello Devs!</h1>
        <SignUpModal closeSignUpModal={this.props.closeSignUpModal} />
        <SearchBar
          searchValue={this.state.searchValue}
          handleSearchChange={this.handleSearchChange}
          handleAllEntries={this.handleAllEntries}
        />
        <EntryList entriesToRender={this.state.entriesToRender}/>
      </section>
      )
    } else if(this.props.signedIn) {
      return (
        <section>
          <h1>Hello Devs!</h1>
          <SearchBar
            searchValue={this.state.searchValue}
            handleSearchChange={this.handleSearchChange}
            handleAllEntries={this.handleAllEntries}
          />
          <CreateEntry />
          <EntryList entriesToRender={this.state.entriesToRender}/>
        </section>
      )
    }
    return (
      <section>
        <h1>Urban Developtionary</h1>
        <SearchBar
          searchValue={this.state.searchValue}
          handleSearchChange={this.handleSearchChange}
          handleAllEntries={this.handleAllEntries}
        />
        <EntryList entriesToRender={this.state.entriesToRender} />
      </section>
    )
  }
}

export default PageContent;