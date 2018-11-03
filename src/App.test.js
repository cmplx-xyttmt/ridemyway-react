import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  mount(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
});
