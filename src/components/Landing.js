/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/landing.css';
import M from 'materialize-css';
import { Spinner } from '../common';
import SignUp from './auth_components';
import { toggleAuthViewAction, handleSignUp } from '../actions/authenticationActions';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.successToasts = 0;
  }

  componentDidUpdate(prevProps) {
    const { auth } = this.props;
    if (auth.errors !== prevProps.errors) {
      if (auth.errors) M.toast({ html: auth.errors, classes: 'red darken-3' });
    }

    if (auth.user && this.successToasts === 0) {
      M.toast({ html: "You've signed up successfully. Please login to confirm your account", classes: 'green' });
      this.successToasts += 1;
    }
  }

  render() {
    const { auth, toggleAuthView, signUp } = this.props;
    const { isLoading, isOnSignUpView, isOnLoginView } = auth;

    return (
      <div className="intro-container">
        <div className="intro">
          <div className="intro-heading">
            <h1>RIDE MY WAY</h1>
          </div>
          {!isLoading && !isOnSignUpView && !isOnLoginView && (
            <div>
              <p className="intro-info" id="info">
                  Looking for a ride?
                <br />
                  Or looking for someone to ride with?
                <br />
                  Sign up today.
              </p>
              <p>
                <button id="login-button" type="button" className="button btn grey" onClick={() => toggleAuthView(3)}>login</button>
                <button id="signup-button" type="button" className="button btn grey" onClick={() => toggleAuthView(2)}>Sign Up</button>
              </p>
            </div>
          )}
          <div>
            {isLoading && <Spinner />}
            {isOnSignUpView && (
              <div className="center-block row">
                <SignUp signUp={signUp} auth={auth} />
                <p className="message orange-text flow-text col s12" style={{ fontSize: 'small' }}>
                  Already registered?
                  <span
                    className="red-text darken-4"
                    role="button"
                    tabIndex="0"
                    onClick={() => 'help'}
                    style={{ cursor: 'pointer' }}
                  >
                    login
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  auth: PropTypes.object.isRequired,
  toggleAuthView: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.authentication,
});

const mapDispatchToProps = dispatch => ({
  toggleAuthView: numericFilter => dispatch(toggleAuthViewAction(numericFilter)),
  signUp: userData => dispatch(handleSignUp(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
