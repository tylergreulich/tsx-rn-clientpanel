import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
// import Test from './Test';

import { Provider } from 'react-redux';

import store from './store/store';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('clientpanelv2', () => Root);
