import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import DashboardScreen from './src/screens/Dashboard/Dashboard';
import AddClientScreen from './src/screens/AddClient/AddClient';

import { Provider } from 'react-redux';
import store from './store/store';

import jwt_decode from 'jwt-decode';
import { AsyncStorage } from 'react-native';
// import setAuthToken from './utilities/setAuthToken';
import { setCurrentUser, logoutUser } from './store/actions/authActions';

// if (AsyncStorage.getItem(jwtToken)) {
//   setAuthToken(AsyncStorage.jwtToken);
//   const decoded = jwt_decode(AsyncStorage.jwtToken);
//   store.dispatch(setCurrentUser(decoded));
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     store.dispatch(logoutUser());
//     window.location.href = '/login';
//   }
// }

Navigation.registerComponent(
  'clientpanel.AuthScreen',
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'clientpanel.DashboardScreen',
  () => DashboardScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'clientpanel.AddClientScreen',
  () => AddClientScreen,
  store,
  Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'clientpanel.AuthScreen',
    title: 'Client Panel'
  }
});
