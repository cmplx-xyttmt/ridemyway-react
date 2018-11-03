import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/main_pages_styles.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav">
          <div className="nav-wrapper nav row">
            <div className="brand-logo col offset-s1">
                Ride My Way
              <i className="material-icons left">directions_car</i>
            </div>
            <ul className="nav-content right hide-on-med-and-down">
              <li><a href="#!" className="active">Ride offers</a></li>
              <li><a href="#!">Create Ride Offer</a></li>
              <li><a href="#!">My Ride offers</a></li>
              <li><a href="#!">Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
