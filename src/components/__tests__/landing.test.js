/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Landing from '../Landing';
import SignUp from '../Signup';
import Login from '../Login';
import { Spinner } from '../../common';
import store from '../../store';
import {
  toggleAuthViewAction,
  signUpFailureAction,
  signUpAction,
  loginAction,
} from '../../actions/authenticationActions';

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: false });
const storeFake = state => ({
  default: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: () => state,
});

describe('landing container', () => {
  let wrapper;
  let component;
  let container;
  const history = { push: jest.fn() };

  beforeEach(() => {
    jest.resetAllMocks();
    // const store = storeFake({ authentication: { isOnSignUpView: true } });
    store.dispatch(toggleAuthViewAction(2));
    wrapper = mount(
      <Provider store={store}>
        <Landing history={history} />
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
        <Landing history={history} />
      </Provider>,
    );

    const spinner = wrapper.find(Spinner);
    expect(spinner.length).toBeTruthy();
  });

  it('simulates clicks on the sign up and login buttons', () => {
    const otherStore = storeFake({ authentication: {} });
    wrapper = mount(
      <Provider store={otherStore}>
        <Landing history={history} />
      </Provider>,
    );

    wrapper.find('#login-button').simulate('click');
    wrapper.find('#signup-button').simulate('click');
  });

  it('should render the login page', () => {
    const otherStore = storeFake({ authentication: { isOnLoginView: true } });
    wrapper = mount(
      <Provider store={otherStore}>
        <Landing history={history} />
      </Provider>,
    );

    const loginForm = wrapper.find(Login);
    expect(loginForm.length).toBeTruthy();
  });

  it('simulates clicks on prompts', () => {
    wrapper.find('.login-prompt').simulate('click');

    const otherStore = storeFake({ authentication: { isOnLoginView: true } });
    wrapper = mount(
      <Provider store={otherStore}>
        <Landing history={history} />
      </Provider>,
    );

    wrapper.find('.sign-up-prompt').simulate('click');
  });

  it('shows error toast in componentDidUpdate when error state changes', () => {
    store.dispatch(signUpFailureAction('There was an error'));
  });

  it('shows successful login toast in componentDidUpdate when login state changes', () => {
    store.dispatch(loginAction({ message: 'test' }));
  });

  it('shows successful sign up toast in componentDidUpdate when sign up state changes', () => {
    store.dispatch(signUpAction({ message: 'test' }));
  });
});
