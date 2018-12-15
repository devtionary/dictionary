import React, { Component } from 'react';

class CreateEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      definition: '',
    };
    this.handleSubmit = (event) => {
      event.preventDefault();
      fetch('http://localhost:8080', {
        method: 'POST',
        body: JSON.stringify({
          term: this.state.term,
          definition: this.state.definition
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      this.setState({
        term: '',
        definition: ''
      });
      this.props.closeCreateEntry();
    }
    this.handleTermChange = (event) => {
      this.setState({ term: event.target.value });
    };
    this.handleDefinitionChange = (event) => {
      this.setState({ definition: event.target.value });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button onClick={this.props.closeCreateEntry} type="button">X</button>
        <label>
          Entry term:
          <input type="text" value={this.state.term} onChange={this.handleTermChange} />
        </label>
        <label>
          Definition:
          <textarea name="definition" rows="10" cols="50" valugit e={this.state.definition} onChange={this.handleDefinitionChange}></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CreateEntryForm;