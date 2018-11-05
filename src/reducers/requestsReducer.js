/* eslint-disable import/prefer-default-export */
import {
  SET_CREATED_RIDE_REQUEST,
  ERROR_CREATING_RIDE_REQUEST,
  SET_RIDE_REQUESTS,
  FETCHING_RIDE_REQUESTS_FAILED,
  LOGOUT,
  REQUEST_RESPONSE,
  ERROR_REQUEST_RESPONSE,
} from '../actions/types';

export const rideRequestsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CREATED_RIDE_REQUEST:
      return {
        ...state, rideRequest: action.payload, errors: undefined,
      };
    case ERROR_CREATING_RIDE_REQUEST:
      return {
        ...state, rideRequest: undefined, errors: action.payload,
      };
    case SET_RIDE_REQUESTS:
      return {
        ...state,
        rideRequests: action.payload.requests.ride_requests,
        errors: undefined,
        rideId: action.payload.rideId,
      };
    case FETCHING_RIDE_REQUESTS_FAILED:
      return {
        ...state, errors: action.payload, rideRequests: undefined,
      };
    case REQUEST_RESPONSE:
      return { ...state, errors: undefined, requestResponse: action.payload };
    case ERROR_REQUEST_RESPONSE:
      return { ...state, errors: action.payload, requestResponse: undefined };
    case LOGOUT:
      return {};
    default:
      return { ...state };
  }
};
