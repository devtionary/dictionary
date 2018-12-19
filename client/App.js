import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle, HomeStyled as Home } from './styled/styles';
import TopNav from './containers/TopNav';

function App() {
  return (
    <div>
      <TopNav />
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
