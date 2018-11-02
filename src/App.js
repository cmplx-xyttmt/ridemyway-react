import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/Landing';
import RideOffers from './components/Rides';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/rides" component={RideOffers} />
        </Switch>
      </div>
    );
  }
}

export default App;
