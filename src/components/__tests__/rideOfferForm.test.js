import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import RideOfferFormContainer, { RideOfferForm } from '../RideOfferForm';
import store from '../../store';

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: false });

describe('ride offer form container', () => {
  let wrapper;
  let component;
  let otherWrapper;
  const createRide = jest.fn();

  const history = { push: jest.fn() };

  beforeEach(() => {
    jest.resetAllMocks();
    wrapper = mount(
      <Provider store={store}>
        <RideOfferFormContainer history={history} />
      </Provider>,
    );
    otherWrapper = shallow(<RideOfferForm createRide={createRide} />);

    component = wrapper.find(RideOfferForm);
  });

  it('renders the form', () => {
    expect(component.length).toBeTruthy();
  });

  it('validates the data', () => {
    const values1 = {
      origin: '',
      destination: '',
      price: null,
    };
    let errors = otherWrapper.instance().validate(values1);

    const values2 = {
      origin: 'test',
      destination: 'test',
      price: -1,
    };

    expect(errors.origin).toBeTruthy();
    expect(errors.destination).toBeTruthy();
    expect(errors.price).toBeTruthy();

    errors = otherWrapper.instance().validate(values2);

    expect(errors.price).toBeTruthy();
  });

  it('simulates submitting the form', () => {
    otherWrapper.find('Formik').simulate('submit');
    expect(createRide).toHaveBeenCalled();
  });

  it('submits the form from container', () => {
    const form = wrapper.find('Formik');
    form.find('#origin').first().simulate('change',
      { target: { id: 'origin', value: 'test' } });
    form.find('#destination').first().simulate('change',
      { target: { id: 'destination', value: 'test' } });
    form.simulate('submit');
  });
});
