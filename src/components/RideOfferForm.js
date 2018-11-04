/* eslint-disable
jsx-a11y/label-has-associated-control,
jsx-a11y/label-has-for,import/prefer-default-export */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import { handleCreatRide } from '../actions/ridesActions';

export class RideOfferForm extends React.Component {
  validate = (values) => {
    const errors = {};
    if (!values.destination) errors.destination = 'Required';

    if (!values.origin) errors.origin = 'Required';

    if (values.price === null) errors.price = 'Required';
    else if (values.price < 0 || values.price > 2 ** 31) errors.price = `Price must be between 0 and ${2 ** 31}`;

    return errors;
  };

  createRideOffer = async (values) => {
    const { createRide } = this.props;
    await createRide(values);
  };

  render() {
    return (
      <div className="modal-content black-text">
        <h4 className="intro-heading">Create a ride offer</h4>
        <Formik
          initialValues={{
            origin: '', destination: '', price: 0,
          }}
          validate={values => this.validate(values)}
          onSubmit={values => this.createRideOffer(values)}
        >
          <Form>
            <div className="input-field">
              <Field id="origin" type="text" name="origin" className="validate" />
              <label htmlFor="origin" className="pink-text text-accent-4">Origin</label>
              <ErrorMessage
                name="origin"
                className="helper-text red-text"
                data-error="wrong"
                component="span"
              />
            </div>
            <div className="input-field">
              <Field id="destination" type="text" name="destination" className="validate" />
              <label htmlFor="destination" className="pink-text text-accent-4 active">Destination</label>
              <ErrorMessage
                name="destination"
                className="helper-text red-text"
                data-error="wrong"
                component="span"
              />
            </div>
            <div className="input-field">
              <Field id="price" type="number" name="price" className="validate" />
              <label htmlFor="price" className="pink-text text-accent-4">Price</label>
              <ErrorMessage
                name="price"
                className="helper-text red-text"
                data-error="wrong"
                component="span"
              />
            </div>
            <button type="submit" className="modal-close btn">Create</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

RideOfferForm.propTypes = {
  createRide: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createRide: rideData => dispatch(handleCreatRide(rideData)),
});

export default connect(null, mapDispatchToProps)(RideOfferForm);
