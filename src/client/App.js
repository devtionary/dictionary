import React, { Component } from 'react';
import NavFields from './components/NavFields';
import PageContent from './components/PageContent';


class App extends Component {
  constructor() {
    super();
    this.state = {
        signedIn: false
    };
  }

  render() {
    return (
    <main>
      <NavFields />
      <PageContent />
    </main>
    )
  };
}

export default App;