/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleFetchingRides } from '../actions/ridesActions';
import { Spinner } from '../common';

class RideOffers extends React.Component {
  constructor(props) {
    super(props);
    const { rides, fetchRides } = this.props;

    if (!rides.rides) fetchRides();
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
          <h1 className="intro-heading">Ride Offers</h1>
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
                  <td><button type="button" className="btn">Request Ride</button></td>
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
};

const mapStateToProps = state => ({
  rides: state.rideOffers,
});

const mapDispatchToProps = dispatch => ({
  fetchRides: () => dispatch(handleFetchingRides()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RideOffers);
