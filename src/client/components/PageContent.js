import React, { Component } from 'react';
import SearchBar from './SearchBar';
import EntryList from './EntryList';
import SignUpModal from './SignUpModal';
import CreateEntry from './CreateEntry';

class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      definition: '',
      entryForm: false,
      searchValue: '',
      entries: [{
        term: 'Bugfoot',
        definition: 'A bug that isn’t reproducible and has been sighted by only one person.',
        createdBy: 'Briandaman',
        upvotes: 0,
        downvotes: 0,
        id: 1
      },
      {
        term: 'Spin it Up',
        definition: 'Originally most servers were storage servers with multiple hard disks attached. So when a server was started the OS had to boot as well as the HDD all come up to speed before the server was useful. So the term spin up the server refers to the start time, primarily to spin the hard drives to operating speed so it can boot and they are ready to respond.',
        createdBy: 'Leury',
        upvotes: 3,
        downvotes: 0,
        id: 2
      },
      {
        term: 'Backpack',
        definition: 'A Javascript closure.',
        createdBy: 'Will S.',
        upvotes: 4,
        downvotes: 0,
        id: 3
      },
      {
        term: 'Pokémon Exception Handling',
        definition: 'For when you just Gotta Catch \'Em All.',
        createdBy: 'Ash',
        upvotes: 0,
        downvotes: 0,
        id: 4
      },
      {
        term: 'A Duck',
        definition: 'A feature added for no other reason than to draw management attention and be removed, thus avoiding unnecessary changes in other aspects of the product.',
        createdBy: 'Donald',
        upvotes: 0,
        downvotes: 0,
        id: 5
      },
      {
        term: 'Rubber Ducking',
        definition: 'Sometimes, you just have to talk a problem out.',
        createdBy: 'Rafa',
        upvotes: 0,
        downvotes: 0,
        id: 6
      },
      {
        term: 'Rage Cage',
        definition: 'It\'s not just a game for some of us..',
        createdBy: 'Bry',
        upvotes: 0,
        downvotes: 0,
        id: 6
      }],
      entriesToRender: []
    }
    this.handleSearchChange = (event) => {
      //this.setState({ searchValue: event.target.value });
      let entriesCopy = JSON.parse(JSON.stringify(this.state.entries))

      let entriesToRender = entriesCopy.filter((entry) => {
        return entry.term.toLowerCase().includes(this.state.searchValue.toLowerCase())
      })
      this.setState({
        entriesToRender,
        searchValue: event.target.value
      })

    }
    this.handleAllEntries = (event) => {
      this.setState({ entriesToRender: this.state.entries })
    }
    this.handleTermChange = (event) => {
      this.setState({ term: event.target.value });
    };
    this.handleDefinitionChange = (event) => {
      this.setState({ definition: event.target.value });
    }

    this.handleUpvote = ((event) => {
      let entriesCopy = JSON.parse(JSON.stringify(this.state.entries))
      let index = entriesCopy.findIndex((entry) => {
        return entry.id == parseInt(event.target.id)
      })
      entriesCopy[index].upvotes = entriesCopy[index].upvotes + 1;
      this.setState({
        entries: entriesCopy,
        entriesToRender: entriesCopy
      })
    })

    this.handleDownvote = ((event) => {
      let entriesCopy = JSON.parse(JSON.stringify(this.state.entries))
      let index = entriesCopy.findIndex((entry) => {
        return entry.id == parseInt(event.target.id)
      })
      entriesCopy[index].downvotes = entriesCopy[index].downvotes + 1
      this.setState({
        entries: entriesCopy,
        entriesToRender: entriesCopy
      })
    })

    this.handleCreateSubmit = (event) => {
      event.preventDefault();
      fetch("http://localhost:8080/addentry", {
        method: "POST",
        body: JSON.stringify({
          term: this.state.term,
          definition: this.state.definition,
          createdBy: this.props.user,
          upvotes: 0,
          downvotes: 0,
          tags: [],
          id: this.state.entries.length + 1
        }),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
        .then(res => {
          let arr = JSON.parse(JSON.stringify(this.state.entries))
          let renderArr = JSON.parse(JSON.stringify(this.state.entriesToRender))
          arr.push(res)
          this.setState({
            entries: arr,
            entriesToRender: renderArr,
            term: '',
            definition: '',
            entryForm: false
          })
        })
        .catch(err => console.log("Posting new entry Error: ", err))

    }

    this.createEntry = () => {
      this.setState({ entryForm: true });
    }

    this.handleTermChange = (event) => {
      this.setState({ term: event.target.value });
    };
    this.handleDefinitionChange = (event) => {
      this.setState({ definition: event.target.value });
    }
  }


  render() {
    if (this.props.signUp) {
      return (
        <section>
          <h1>Urban Developtionary</h1>
          <SignUpModal closeSignUpModal={this.props.closeSignUpModal} />
          <SearchBar
            searchValue={this.state.searchValue}
            handleSearchChange={this.handleSearchChange}
            handleAllEntries={this.handleAllEntries}
          />
          <EntryList entriesToRender={this.state.entriesToRender} />
        </section>
      )
    } else if (this.props.signedIn) {
      return (
        <section>
          <h1>Urban Developtionary</h1>
          <SearchBar
            searchValue={this.state.searchValue}
            handleSearchChange={this.handleSearchChange}
            handleAllEntries={this.handleAllEntries}
          />
          <CreateEntry user={this.state.user} term={this.state.term} definition={this.state.definition} createEntry={this.createEntry} entryForm={this.state.entryForm} handleCreateSubmit={this.handleCreateSubmit} handleTermChange={this.handleTermChange} handleDefinitionChange={this.handleDefinitionChange} entryForm={this.state.entryForm} entries={this.state.entries} />
          <EntryList signedIn={this.props.signedIn} entriesToRender={this.state.entriesToRender} handleUpvote={this.handleUpvote} handleDownvote={this.handleDownvote} />
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