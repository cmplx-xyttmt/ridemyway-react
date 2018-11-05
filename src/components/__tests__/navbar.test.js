import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../../store';
import Navbar from '../Navbar';

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: false });

describe('navbar container', () => {
  let wrapper;

  beforeEach(() => {
    jest.resetAllMocks();
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
  });

  it('simulates a click on view ride offers without crashing', () => {
    wrapper.find('#ride-offers-button').simulate('click');
  });

  it('simulates a click on view my ride offers without crashing', () => {
    wrapper.find('#my-ride-offers-button').simulate('click');
  });

  it('simulates a click on the logout button', () => {
    wrapper.find('#logout-button').simulate('click');
  });
});
