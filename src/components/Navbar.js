/* eslint-disable import/no-named-as-default,react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/main_pages_styles.css';
import M from 'materialize-css';
import RideOfferForm from './RideOfferForm';
import { toggleNavViewAction } from '../actions/ridesActions';

class Navbar extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
  }

  render() {
    // noinspection HtmlUnknownAnchorTarget
    const { rides, toggleNavView } = this.props;
    return (
      <div className="navbar-fixed">
        <nav className="nav">
          <div className="nav-wrapper nav row">
            <div className="brand-logo col offset-s1">
                Ride My Way
              <i className="material-icons left">directions_car</i>
            </div>
            <ul className="nav-content right hide-on-med-and-down">
              <li>
                <a
                  href="#!"
                  id="ride-offers-button"
                  onClick={() => toggleNavView(1)}
                  className={`${rides.isViewingAllRides ? 'active' : ''}`}
                >
                  Ride offers
                </a>
              </li>
              <li>
                <a href="#modal1" className="modal-trigger">Create Ride Offer</a>
              </li>
              <li>
                <a
                  href="#!"
                  id="my-ride-offers-button"
                  onClick={() => toggleNavView(2)}
                  className={`${rides.isViewingOwnRides ? 'active' : ''}`}
                >
                  My Ride offers
                </a>
              </li>
              <li><a href="#!">Logout</a></li>
            </ul>
          </div>
        </nav>
        <div className="modal" id="modal1">
          <RideOfferForm />
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  rides: PropTypes.object.isRequired,
  toggleNavView: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  rides: state.rideOffers,
});

const mapDispatchToProps = dispatch => ({
  toggleNavView: view => dispatch(toggleNavViewAction(view)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
