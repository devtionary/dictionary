import React, { Component } from 'react';
import CreateEntryForm from './CreateEntryForm';

class CreateEntry extends Component {
  constructor(props) {
    super(props);
}

  render() {
    if (this.props.entryForm) {
      return (
        <div>
          <button onClick={this.props.createEntry}>Create Entry</button>
          <CreateEntryForm 
            term={this.props.term} 
            definition={this.props.definition} 
            handleCreateSubmit={this.props.handleCreateSubmit} 
            handleTermChange={this.props.handleTermChange} 
            handleDefinitionChange={this.props.handleDefinitionChange} 
            entries={this.props.entries} 
            closeCreateEntry={this.props.closeCreateEntry} 
          />
        </div>
      )
    }
    return (
      <div>
        <button onClick={this.props.createEntry}>Create Entry</button>
      </div>
    )
  }
}

export default CreateEntry;