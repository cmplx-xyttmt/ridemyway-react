/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from './components/Landing';
import RideOffers from './components/Rides';
import Navbar from './components/Navbar';
import { handleFetchingRides } from './actions/ridesActions';

export class App extends Component {
  async componentWillMount() {
    const { determineLoggedInState, history, rides } = this.props;

    await determineLoggedInState();
    if (rides.rides) {
      history.push('/rides');
    } else history.push('/');
  }

  componentDidUpdate(prevProps) {
    const { history, rides, location } = this.props;
    if (rides.rides && rides.rides !== prevProps.rides.rides) {
      if (location.pathname === '/') history.push('/rides');
    }
  }

  render() {
    const { rides } = this.props;
    return (
      <div>
        {rides.rides && <Navbar />}
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
  determineLoggedInState: PropTypes.func.isRequired,
  rides: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  rides: state.rideOffers,
});

const mapDispatchToProps = dispatch => ({
  determineLoggedInState: () => {
    const token = localStorage.getItem('token');
    if (!token || token === '') return;
    dispatch(handleFetchingRides());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
