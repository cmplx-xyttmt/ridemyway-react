import { combineReducers } from 'redux';
import { authenticationReducer } from './authentication';
import { ridesReducer } from './ridesReducer';
import { rideRequestsReducer } from './requestsReducer';

export default combineReducers({
  authentication: authenticationReducer,
  rideOffers: ridesReducer,
  rideRequests: rideRequestsReducer,
});
