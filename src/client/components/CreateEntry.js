import React, { Component } from 'react';
import CreateEntryForm from './CreateEntryForm';

class CreateEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryForm: false
    }
    this.createEntry = () => {
      this.setState({entryForm: true});
    }
    this.closeCreateEntry = () => {
      this.setState({entryForm: false});
    }
  }

  render() {
    if(this.state.entryForm) {
      return (
        <div>
          <button>Create Entry</button>
          <CreateEntryForm closeCreateEntry={this.closeCreateEntry} />
        </div>
      )
    }
    return (
      <div>
      <button onClick={this.createEntry}>Create Entry</button>
      </div>
    )
  }
}

export default CreateEntry;