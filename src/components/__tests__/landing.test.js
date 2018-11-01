/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Landing from '../Landing';
import SignUp from '../auth_components';
import { Spinner } from '../../common';

Enzyme.configure({ adapter: new Adapter() });
const storeFake = state => ({
  default: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: () => state,
});

describe('profile container', () => {
  let wrapper;
  let component;
  let container;

  beforeEach(() => {
    jest.resetAllMocks();
    const store = storeFake({ authentication: { isOnSignUpView: true } });

    wrapper = mount(
      <Provider store={store}>
        <Landing />
      </Provider>,
    );

    container = wrapper.find(Landing);
    component = wrapper.find(SignUp);
  });

  it('should render both the landing page and the sign up form', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('should render the spinner when fetching', () => {
    const otherStore = storeFake({ authentication: { isLoading: true } });
    wrapper = mount(
      <Provider store={otherStore}>
        <Landing />
      </Provider>,
    );

    const spinner = wrapper.find(Spinner);
    expect(spinner.length).toBeTruthy();
  });

  it('simulates clicks on the sign up and login buttons', () => {
    const otherStore = storeFake({ authentication: {} });
    wrapper = mount(
      <Provider store={otherStore}>
        <Landing />
      </Provider>,
    );

    wrapper.find('#login-button').simulate('click');
    wrapper.find('#signup-button').simulate('click');
  });
});
