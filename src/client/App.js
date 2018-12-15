import React, { Component } from 'react';
import NavFields from './components/NavFields';
import PageContent from './components/PageContent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <NavFields signedIn={this.state.signedIn} />
      <PageContent />
    </main>
    )
  };
}

export default App;
