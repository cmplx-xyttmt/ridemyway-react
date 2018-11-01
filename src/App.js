import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
