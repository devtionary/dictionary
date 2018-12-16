import React, { Component } from 'react';

class CreateEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      definition: '',
    };

  }

  render() {
    return (
      <form onSubmit={this.props.handleCreateSubmit}>
        <button onClick={this.props.closeCreateEntry} type="button">X</button>
        <label>
          Entry term:
          <input type="text" value={this.props.term} onChange={this.props.handleTermChange} />
        </label>
        <label>
          Definition:
          <textarea name="definition" rows="1" cols="50" valugit e={this.props.definition} onChange={this.props.handleDefinitionChange}></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CreateEntryForm;