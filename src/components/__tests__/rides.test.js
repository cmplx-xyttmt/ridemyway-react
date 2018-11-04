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

  it('show failure toast when ride creation fails', () => {
    store.dispatch(errorCreatingRideAction({ errors: 'Error' }));
  });

  it('shows my ride offers', () => {
    store.dispatch(toggleNavViewAction(2));
  });
});
