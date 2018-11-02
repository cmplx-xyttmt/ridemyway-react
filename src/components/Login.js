/* eslint-disable
jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for,react/forbid-prop-types */
import React from 'react';
import '../styles/landing.css';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

export default class LoginForm extends React.Component {
  validate = (values) => {
    const errors = {};

    if (!values.username) errors.username = 'Required';
    else if (values.username.length < 5) errors.username = 'Make sure your username has at least 5 characters';

    if (!values.password) errors.password = 'Required';
    else if (values.password.length < 5) errors.password = 'Make sure your password has at least 5 characters';

    return errors;
  };

  signUpUser = (values) => {
    const { login } = this.props;
    login(values);
  };

  render() {
    return (
      <Formik
        initialValues={{
          username: '', password: '',
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
            <i className="material-icons prefix white-text">lock</i>
            <Field id="password" type="password" name="password" className="white-text" />
            <label htmlFor="password" className="pink-text text-accent-4">Password</label>
            <ErrorMessage name="password" className="helper-text red-text" data-error="wrong" component="span" />
          </div>
          <button type="submit" className="button btn grey">login</button>
        </Form>
      </Formik>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};
