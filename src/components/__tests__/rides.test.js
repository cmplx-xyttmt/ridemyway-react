import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Rides from '../Rides';
import { Spinner } from '../../common';
import store from '../../store';
import {
  setRidesAction,
  setCreatedRideAction,
  errorCreatingRideAction,
  toggleNavViewAction,
} from '../../actions/ridesActions';
import {
  setCreatedRideRequestAction,
  errorCreatingRideRequest,
  setRideRequestsAction,
} from '../../actions/rideRequestActions';

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: false });

describe('rides container', () => {
  let wrapper;
  let component;

  const history = { push: jest.fn() };

  beforeEach(() => {
    jest.resetAllMocks();
    wrapper = mount(
      <Provider store={store}>
        <Rides history={history} />
      </Provider>,
    );

    component = wrapper.find(Spinner);
  });

  it('renders the spinner', () => {
    expect(component.length).toBeTruthy();
  });

  it('renders the rest of the page after setting rides', () => {
    store.dispatch(setRidesAction({
      rides: [{
        id: 1,
        name: 'test',
        origin: 'test',
        destination: 'test',
        price: 1000,
      }],
    }));
  });

  it('shows success toast on successful ride creation', () => {
    store.dispatch(setCreatedRideAction({ ride: 'Created ride' }));
  });

  it('shows failure toast when ride creation fails', () => {
    store.dispatch(errorCreatingRideAction({ errors: 'Error' }));
  });

  it('shows my ride offers', () => {
    store.dispatch(toggleNavViewAction(2));
  });

  it('simulates click on request ride button', () => {
    store.dispatch(toggleNavViewAction(1));
    store.dispatch(setRidesAction({
      rides: [{
        id: 6767676,
        name: 'test',
        origin: 'test',
        destination: 'test',
        price: 1000,
      }],
    }));
    wrapper.update();
    wrapper.find('button').simulate('click');
  });

  it('shows success toast when ride request is sent successfully', () => {
    store.dispatch(setCreatedRideRequestAction({ request: 'test' }));
  });

  it('shows failure toast when ride request fails', () => {
    store.dispatch(errorCreatingRideRequest({ errors: 'error' }));
  });

  it('simulates click of view ride requests button', () => {
    store.dispatch(toggleNavViewAction(2));
    store.dispatch(setRidesAction({
      rides: [{
        id: 6767676,
        name: 'test',
        origin: 'test',
        destination: 'test',
        price: 1000,
      }],
    }));
    wrapper.update();
    wrapper.find('button').simulate('click');
  });

  it('shows ride requests', () => {
    store.dispatch(toggleNavViewAction(2));
    store.dispatch(setRidesAction({
      rides: [{
        id: 6767676,
        name: 'test',
        origin: 'test',
        destination: 'test',
        price: 1000,
      }],
    }));
    store.dispatch(setRideRequestsAction({
      ride_requests: [{
        id: 721,
        name: 'test',
        accepted: 't',
        rejected: 'f',
      }],
    }));
    store.dispatch(toggleNavViewAction(3));
    wrapper.update();
  });
});
