/* eslint-disable import/prefer-default-export */
import {
  SET_CREATED_RIDE_REQUEST,
  ERROR_CREATING_RIDE_REQUEST,
  SET_RIDE_REQUESTS,
  FETCHING_RIDE_REQUESTS_FAILED,
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
        ...state, rideRequests: action.payload.ride_requests, errors: undefined,
      };
    case FETCHING_RIDE_REQUESTS_FAILED:
      return {
        ...state, errors: action.payload, rideRequests: undefined,
      };
    default:
      return { ...state };
  }
};
