import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  GlobalStyle,
  HomeStyled as Home,
  ProfileStyled as Profile,
} from './styled/styles';
import TopNav from './containers/TopNav';

function App() {
  return (
    <div>
      <TopNav />
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/u/:id" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
