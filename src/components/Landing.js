/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/landing.css';
import M from 'materialize-css';
import { Spinner } from '../common';
import SignUp from './Signup';
import Login from './Login';
import { toggleAuthViewAction, handleSignUp, handleLogin } from '../actions/authenticationActions';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.signUpSuccessToasts = 0;
    this.logInSuccessToasts = 0;
  }

  componentDidUpdate(prevProps) {
    const { auth, history } = this.props;
    if (auth.errors !== prevProps.errors) {
      if (auth.errors) M.toast({ html: auth.errors, classes: 'red darken-3' });
    }

    if (auth.signUpSuccess && this.signUpSuccessToasts === 0) {
      M.toast({ html: "You've signed up successfully. Please login to confirm your account", classes: 'green' });
      this.signUpSuccessToasts += 1;
    }

    if (auth.loginSuccess && this.logInSuccessToasts === 0) {
      M.toast({ html: "You've logged in successfully", classes: 'green' });
      this.logInSuccessToasts += 1;
      history.push('/rides');
    }
  }

  render() {
    const {
      auth, toggleAuthView, signUp, login,
    } = this.props;
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
                <SignUp signUp={signUp} />
                <p className="message orange-text flow-text col s12" style={{ fontSize: 'small' }}>
                  Already registered?
                  <span
                    className="red-text darken-4 login-prompt"
                    role="button"
                    tabIndex="0"
                    onClick={() => toggleAuthView(3)}
                    style={{ cursor: 'pointer' }}
                  >
                    login
                  </span>
                </p>
              </div>
            )}
            {isOnLoginView && (
              <div className="center-block row">
                <Login login={login} />
                <p className="message orange-text flow-text col s12" style={{ fontSize: 'small' }}>
                  Not yet registered?
                  <span
                    className="red-text darken-4 sign-up-prompt"
                    role="button"
                    tabIndex="0"
                    onClick={() => toggleAuthView(2)}
                    style={{ cursor: 'pointer' }}
                  >
                    sign up
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
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.authentication,
});

const mapDispatchToProps = dispatch => ({
  toggleAuthView: numericFilter => dispatch(toggleAuthViewAction(numericFilter)),
  signUp: userData => dispatch(handleSignUp(userData)),
  login: async userData => dispatch(handleLogin(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
