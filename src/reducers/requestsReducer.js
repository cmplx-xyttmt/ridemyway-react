/* eslint-disable import/prefer-default-export */
import { SET_RIDE_REQUEST, ERROR_CREATING_RIDE_REQUEST } from '../actions/types';

export const rideRequestsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_RIDE_REQUEST:
      return {
        ...state, rideRequest: action.payload, errors: undefined,
      };
    case ERROR_CREATING_RIDE_REQUEST:
      return {
        ...state, rideRequest: undefined, errors: action.payload,
      };
    default:
      return { ...state };
  }
};
