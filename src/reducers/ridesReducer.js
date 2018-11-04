/* eslint-disable import/prefer-default-export,no-case-declarations */
import {
  SET_RIDES,
  FETCHING,
  FETCHING_RIDES_FAILED,
  SET_CREATED_RIDE,
  ERROR_CREATING_RIDE,
} from '../actions/types';

export const ridesReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_RIDES:
      return {
        ...state, rides: action.payload.rides, errors: action.payload, isFetching: false,
      };
    case FETCHING:
      let { createdRide, errorsCreatingRide } = state;

      if (action.payload) {
        createdRide = undefined;
        errorsCreatingRide = undefined;
      }
      return {
        ...state, isFetching: action.payload, createdRide, errorsCreatingRide,
      };
    case FETCHING_RIDES_FAILED:
      return { ...state, errors: action.payload, isFetching: false };
    case SET_CREATED_RIDE:
      return {
        ...state, createdRide: action.payload, isFetching: false, errorsCreatingRide: undefined,
      };
    case ERROR_CREATING_RIDE:
      return { ...state, errorsCreatingRide: action.payload, isFetching: false };
    default:
      return { ...state };
  }
};
