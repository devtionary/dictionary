import React, { Component } from 'react';
import EntryItem from './EntryItem';

class EntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let entries = this.props.entriesToRender.map((entry, index) => {
      return <EntryItem
        signedIn={this.props.signedIn}
        key={`entry-item-${index}`}
        term={entry.term}
        definition={entry.definition}
        createdBy={entry.createdBy}
        upvotes={entry.upvotes}
        downvotes={entry.downvotes}
        id={entry.id}
        handleUpvote={this.props.handleUpvote}
        handleDownvote={this.props.handleDownvote}
      />

    });

    return (
      <div>
        {entries}
      </div>
    )
  }
}

export default EntryList;