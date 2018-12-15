import React, { Component } from 'react';

class EntryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <article>
        <h3>{this.props.term}</h3>
        <p>{this.props.definition}</p>
        <ul>
          <li>Created by: {this.props.createdBy}</li>
          <p>Upvote: </p><button onClick={this.props.handleUpvote} id={this.props.id} > {this.props.upvotes}</button>
          <p>Downvote: </p><button onClick={this.props.handleDownvote} id={this.props.id}>{this.props.downvotes}</button>
        </ul>
      </article>
    )
  }
}

export default EntryItem;