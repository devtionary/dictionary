import React, { Component } from 'react';
import EntryItem from './EntryItem';

class EntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          term: 'Loren Ipsom',
          definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          createdBy: 'Briandaman',
          upvotes: 3,
          downvotes: 0
        }
      ]
    }
  }

  render() {
    let entries = this.props.entriesToRender.map((entry, index) => {
      return <EntryItem
        key={`entry-item-${index}`}
        term={entry.term}
        definition={entry.definition}
        createdBy={entry.createdBy}
        upvotes={entry.upvotes}
        downvotes={entry.downvotes}
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