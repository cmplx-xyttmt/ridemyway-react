import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUpForm from '../auth_components';


Enzyme.configure({ adapter: new Adapter() });

describe('sign up component', () => {
  it('renders sign up form without crashing', () => {
    shallow(<SignUpForm signUp={jest.fn()} />);
  });

  it('simulates submitting the form', () => {
    const signUp = jest.fn();
    const wrapper = shallow(<SignUpForm signUp={signUp} />);
    wrapper.find('Formik').simulate('submit');
    expect(signUp).toHaveBeenCalled();
  });

  it('validates the data', () => {
    const wrapper = shallow(<SignUpForm signUp={jest.fn()} />);
    const values1 = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    let errors = wrapper.instance().validate(values1);
    expect(errors.email).toBeTruthy();

    const values2 = {
      username: 'test',
      email: 'test',
      password: 'test',
      confirmPassword: 'tst',
    };

    errors = wrapper.instance().validate(values2);
    expect(errors.confirmPassword).toBeTruthy();
  });
});
