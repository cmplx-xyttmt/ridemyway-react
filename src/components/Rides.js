/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import { handleFetchingRides, toggleNavViewAction } from '../actions/ridesActions';
import { handleSendingRideRequest } from '../actions/rideRequestActions';
import { Spinner } from '../common';

class RideOffers extends React.Component {
  constructor(props) {
    super(props);
    const { rides, fetchRides, toggleNav } = this.props;

    if (!rides.rides) {
      toggleNav(1);
      fetchRides();
    }
  }

  async componentDidUpdate(prevProps) {
    const { rides, fetchRides, requests } = this.props;
    if (rides.createdRide && rides.createdRide !== prevProps.rides.createdRide) {
      M.toast({ html: 'Ride created successfully', classes: 'green' });
      await fetchRides();
    }

    if (rides.errorsCreatingRide
      && rides.errorsCreatingRide !== prevProps.rides.errorsCreatingRide) {
      M.toast({ html: 'Error creating ride, please try again', classes: 'red darken-3' });
    }

    if (rides.isViewingOwnRides && rides.isViewingOwnRides !== prevProps.rides.isViewingOwnRides) {
      await fetchRides(true);
    } else if (rides.isViewingAllRides
      && rides.isViewingAllRides !== prevProps.rides.isViewingAllRides) {
      await fetchRides();
    }

    if (requests.errors
      && (!prevProps.requests.errors
        || requests.errors.message !== prevProps.requests.errors.message)) {
      M.toast({ html: requests.errors.message, classes: 'red darken-3' });
    }

    if (requests.rideRequest
      && (!prevProps.requests.rideRequest
        || requests.rideRequest !== prevProps.requests.rideRequest)) {
      M.toast({ html: 'Successfully requested this ride', classes: 'green' });
    }
  }

  async handleClick(rideId) {
    const { requestRide, rides } = this.props;
    if (rides.isViewingAllRides) {
      await requestRide(rideId);
    }
  }

  render() {
    const { rides } = this.props;
    if (rides.isFetching || !rides.rides) {
      return (
        <div className="valign-wrapper">
          <Spinner />
        </div>
      );
    }
    const rideOffers = rides.rides;
    return (
      <div>
        <div className="container">
          <h1 className="intro-heading">{`${rides.isViewingOwnRides ? 'My Ride Offers' : 'All Ride Offers'}`}</h1>
          <table className="responsive-table highlight">
            <thead>
              <tr>
                <th>Offerer Name</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              { rideOffers.slice(0).reverse().map(rideOffer => (
                <tr key={rideOffer.id}>
                  <td>{rideOffer.name}</td>
                  <td>{rideOffer.origin}</td>
                  <td>{rideOffer.destination}</td>
                  <td>{rideOffer.price}</td>
                  <td>
                    <button
                      type="button"
                      className="btn"
                      id={`ride-click-button${rideOffer.id}`}
                      onClick={() => this.handleClick(rideOffer.id)}
                    >
                      {`${rides.isViewingOwnRides ? 'View Requests' : 'Request Ride'}`}
                    </button>
                  </td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

RideOffers.propTypes = {
  rides: PropTypes.object.isRequired,
  fetchRides: PropTypes.func.isRequired,
  toggleNav: PropTypes.func.isRequired,
  requestRide: PropTypes.func.isRequired,
  requests: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  rides: state.rideOffers,
  requests: state.rideRequests,
});

const mapDispatchToProps = dispatch => ({
  fetchRides: self => dispatch(handleFetchingRides(self)),
  toggleNav: view => dispatch(toggleNavViewAction(view)),
  requestRide: rideId => dispatch(handleSendingRideRequest(rideId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RideOffers);
