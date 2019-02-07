import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  DefinitionStyled as Definition,
  GlobalStyle,
  HomeStyled as Home,
  ProfileStyled as Profile,
} from './styled/styles';
import TopNav from './containers/TopNav';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <div>
          <TopNav />
          <Switch id="switch">
            <Route exact path="/" component={Home} />
            <Route path="/u/:id" component={Profile} />
            <Route path="/definitions/:term" component={Definition} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
