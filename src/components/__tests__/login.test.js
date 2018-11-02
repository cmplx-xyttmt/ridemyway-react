import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from '../Login';


Enzyme.configure({ adapter: new Adapter() });

describe('sign up component', () => {
  it('renders sign up form without crashing', () => {
    shallow(<LoginForm login={jest.fn()} />);
  });

  it('simulates submitting the form', () => {
    const login = jest.fn();
    const wrapper = shallow(<LoginForm login={login} />);
    wrapper.find('Formik').simulate('submit');
    expect(login).toHaveBeenCalled();
  });

  it('validates the data', () => {
    const wrapper = shallow(<LoginForm login={jest.fn()} />);
    const values1 = {
      username: '',
      password: '',
    };
    let errors = wrapper.instance().validate(values1);
    expect(errors.username).toBeTruthy();
    expect(errors.password).toBeTruthy();

    const values2 = {
      username: 'test',
      password: 'test',
    };

    errors = wrapper.instance().validate(values2);
    expect(errors.username).toBeTruthy();
    expect(errors.password).toBeTruthy();
  });
});
