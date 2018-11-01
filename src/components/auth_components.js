/* eslint-disable
jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for,react/forbid-prop-types */
import React from 'react';
import '../styles/landing.css';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

export default class SignUpForm extends React.Component {
  validate = (values) => {
    const errors = {};

    if (!values.username) errors.username = 'Required';
    else if (values.username.length < 5) errors.username = 'Make sure your username has at least 5 characters';

    if (!values.email) errors.email = 'Required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = 'Invalid email address';

    if (!values.password) errors.password = 'Required';
    else if (values.password.length < 5) errors.password = 'Make sure your password has at least 5 characters';

    if (!values.confirmPassword) errors.confirmPassword = 'Required';
    else if (values.confirmPassword !== values.password) {
      errors.password = "Passwords don't match";
      errors.confirmPassword = errors.password;
    }

    return errors;
  };

  signUpUser = (values) => {
    const { signUp } = this.props;
    signUp(values);
  };

  render() {
    return (
      <Formik
        initialValues={{
          username: '', email: '', password: '', confirmPassword: '',
        }}
        validate={values => this.validate(values)}
        onSubmit={values => this.signUpUser(values)}
        className="row"
      >
        <Form className="col s6 offset-s3">
          <div className="input-field">
            <i className="material-icons prefix white-text">person</i>
            <Field id="username" type="text" name="username" className="white-text validate" />
            <label htmlFor="username" className="pink-text text-accent-4">Username</label>
            <ErrorMessage name="username" className="helper-text red-text" data-error="wrong" component="span" />
          </div>
          <div className="input-field">
            <i className="material-icons prefix white-text">email</i>
            <Field id="email" type="email" name="email" className="white-text" />
            <label htmlFor="email" className="pink-text text-accent-4">Email</label>
            <ErrorMessage name="email" className="helper-text red-text" data-error="wrong" component="span" />
          </div>
          <div className="input-field">
            <i className="material-icons prefix white-text">lock</i>
            <Field id="password" type="password" name="password" className="white-text" />
            <label htmlFor="password" className="pink-text text-accent-4">Password</label>
            <ErrorMessage name="password" className="helper-text red-text" data-error="wrong" component="span" />
          </div>
          <div className="input-field">
            <i className="material-icons prefix white-text">lock</i>
            <Field id="confirmPassword" type="password" name="confirmPassword" className="white-text testing" />
            <label htmlFor="confirmPassword" className="pink-text text-accent-4">Confirm Password</label>
            <ErrorMessage name="confirmPassword" className="helper-text red-text" data-error="wrong" component="span" />
          </div>
          <button type="submit" className="button btn grey">sign up</button>
        </Form>
      </Formik>
    );
  }
}

SignUpForm.propTypes = {
  signUp: PropTypes.func.isRequired,
};
