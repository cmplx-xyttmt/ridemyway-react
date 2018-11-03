/* eslint-disable import/prefer-default-export */
import {
  SET_RIDES,
  FETCHING,
  FETCHING_RIDES_FAILED,
} from '../actions/types';

export const ridesReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_RIDES:
      return {
        ...state, rides: action.payload.rides, errors: action.payload, isFetching: false,
      };
    case FETCHING:
      return { ...state, isFetching: action.payload };
    case FETCHING_RIDES_FAILED:
      return { ...state, errors: action.payload, isFetching: false };
    default:
      return { ...state };
  }
};
