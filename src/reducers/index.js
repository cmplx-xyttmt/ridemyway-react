import { combineReducers } from 'redux';
import { authenticationReducer } from './authentication';
import { ridesReducer } from './ridesReducer';

export default combineReducers({
  authentication: authenticationReducer,
  rideOffers: ridesReducer,
});
