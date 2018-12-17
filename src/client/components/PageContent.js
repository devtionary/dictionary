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
      entries: [],
      entriesToRender: []
    }
    this.handleSearchChange = (event) => {
      console.log(this.state.entries);
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

    this.handleUpvote = (event) => {
      let entriesCopy = JSON.parse(JSON.stringify(this.state.entries))
      let index = entriesCopy.findIndex((entry) => {
        console.log(entry);
        return entry._id == event.target.id;
      })
      entriesCopy[index].upvotes = entriesCopy[index].upvotes + 1;
      this.setState({
        entries: entriesCopy,
        entriesToRender: entriesCopy
      })
    }

    this.handleDownvote = (event) => {
      let entriesCopy = JSON.parse(JSON.stringify(this.state.entries))
      let index = entriesCopy.findIndex((entry) => {
        console.log('IDs', entry._id, event.target.id);
        return entry._id == event.target.id;
      })
      console.log('Index', index);
      console.log('Downvotes', entriesCopy[index].downvotes);
      entriesCopy[index].downvotes = entriesCopy[index].downvotes + 1;
      this.setState({
        entries: entriesCopy,
        entriesToRender: entriesCopy
      })
    }

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
          tags: []
        }),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
        .then(res => {
          let arr = JSON.parse(JSON.stringify(this.state.entries))
          // let renderArr = JSON.parse(JSON.stringify(this.state.entriesToRender))
          arr.push(res)
          this.setState({
            entries: arr,
            term: '',
            definition: '',
            entryForm: false
          })
          this.closeCreateEntry;
        })
        .catch(err => console.log("Posting new entry Error: ", err))

    }

    this.createEntry = () => {
      this.setState({ entryForm: true });
    };
    this.closeCreateEntry = () => {
      this.setState({ entryForm: false });
    }
    this.handleTermChange = (event) => {
      this.setState({ term: event.target.value });
    };
    this.handleDefinitionChange = (event) => {
      this.setState({ definition: event.target.value });
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/")
    .then(res => {
      return res.json();
    })
    .then(res => {
      if(res) {
        this.setState({
          entries: res
        });
      }
    }).catch(err => {
      console.log("Fetch error. Could not get entries.", err);
    });
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
          <CreateEntry user={this.state.user} 
            term={this.state.term} 
            definition={this.state.definition} 
            createEntry={this.createEntry}
            closeCreateEntry={this.closeCreateEntry} 
            entryForm={this.state.entryForm} 
            handleCreateSubmit={this.handleCreateSubmit} 
            handleTermChange={this.handleTermChange} 
            handleDefinitionChange={this.handleDefinitionChange} 
            entryForm={this.state.entryForm} 
            entries={this.state.entries} 
          />
          <EntryList 
            signedIn={this.props.signedIn} 
            entriesToRender={this.state.entriesToRender} 
            handleUpvote={this.handleUpvote} 
            handleDownvote={this.handleDownvote} 
          />
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