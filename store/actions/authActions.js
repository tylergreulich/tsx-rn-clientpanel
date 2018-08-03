import { AsyncStorage } from 'react-native';

import axios from 'axios';
// import setAuthToken from '../../utilities/setAuthToken';
import jwt_decode from 'jwt-decode';
import startMainTabs from '../../src/screens/MainTabs/startMainTabs';

import { SET_CURRENT_USER, GET_ERRORS, AUTH_SET_TOKEN } from './actionTypes';

export const registerUser = (userData, navigate) => dispatch => {
  axios
    .post('http://192.168.0.6:5000/api/users/register', userData)
    .then(res => navigate.push('/login'))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const loginUser = userData => dispatch => {
  axios
    .post('http://192.168.0.6:5000/api/users/login', userData)
    .then(res => {
      const decoded = jwt_decode(res.data.token);
      dispatch(authSetToken(decoded));
      AsyncStorage.setItem('jwtToken', decoded);
      startMainTabs();
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const authStoreToken = token => dispatch => {
  // AsyncStorage.setItem('jwtToken', token);
};

export const authSetToken = token => {
  return {
    type: AUTH_SET_TOKEN,
    payload: token
  };
};

export const logoutUser = () => dispatch => {
  AsyncStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

export const getAuthToken = () => (dispatch, getState) => {
  const promise = new Promise((resolve, reject) => {
    const token = getState().auth.token;
    if (!token) {
      AsyncStorage.getItem('jwtToken')
        .catch(err => reject())
        .then(tokenFromStorage => {
          if (!tokenFromStorage) {
            reject();
            return;
          }
          dispatch(authSetToken(tokenFromStorage));
          resolve(tokenFromStorage);
        });
    } else {
      resolve(token);
    }
  });
};

export const authAutoSignIn = () => dispatch => {
  dispatch(getAuthToken())
    .then(token => {
      startMainTabs();
    })
    .catch(err => alert('Failed to fetch token'));
};
