import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContainer, { App } from './App';
import store from './store';
import {
  setRidesAction,
} from './actions/ridesActions';

Enzyme.configure({ adapter: new Adapter() });

describe('AppContainer tests', () => {
  let wrapper;
  beforeEach(() => {
    localStorage.setItem('token', 'test');
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <AppContainer />
        </Router>
      </Provider>,
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.find(App)).toBeTruthy();
  });

  it('redirects when there are rides on update', () => {
    store.dispatch(setRidesAction({
      rides: [{
        id: 1,
        name: 'test',
        origin: 'test',
        destination: 'test',
        price: 1000,
      }],
    }));
    wrapper.update();
    // console.log(wrapper.find(App).props());
    expect(wrapper.find(App).props().history.location.pathname).toEqual('/rides');
  });

  it('redirects when there are rides on mount', () => {
    localStorage.removeItem('token');
    store.dispatch(setRidesAction({
      rides: [{
        id: 1,
        name: 'test',
        origin: 'test',
        destination: 'test',
        price: 1000,
      }],
    }));

    const otherWrapper = mount(
      <Provider store={store}>
        <Router>
          <AppContainer />
        </Router>
      </Provider>,
    );

    expect(otherWrapper.find(App).props().history.location.pathname).toEqual('/rides');
  });
});
