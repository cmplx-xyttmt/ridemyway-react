import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from './components/Landing';
import RideOffers from './components/Rides';
import Navbar from './components/Navbar';

class App extends Component {
  componentWillMount() {
    const { history } = this.props;
    if (localStorage.getItem('token')) history.push('/rides');
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/rides" component={RideOffers} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   determineLoggedInState: () => {
//     const token = localStorage.getItem('token');
//     if (!token || token === '') return;
//     dispatch(handleFetchingRides());
//   },
// });

export default withRouter(connect(null, null)(App));
