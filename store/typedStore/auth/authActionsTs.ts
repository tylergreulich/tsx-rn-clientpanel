import { AsyncStorage } from 'react-native';

import axios from 'axios';
// import setAuthToken from '../../utilities/setAuthToken';
import jwt_decode from 'jwt-decode';
import startMainTabs from '../../src/screens/MainTabs/startMainTabs';

import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import { AuthActionTypes } from '../types';
import { ErrorActionTypes } from '../errors/types';

export const registerUser = (userData: object, navigate: any) => (
  dispatch: ThunkDispatch<{}, void, Action>
) => {
  axios
    .post('http://192.168.0.6:5000/api/users/register', userData)
    .then(res => navigate.push('/login'))
    .catch(err =>
      dispatch({
        type: ErrorActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginUser = (userData: object) => (
  dispatch: ThunkDispatch<{}, void, Action>
) => {
  axios
    .post('http://192.168.0.6:5000/api/users/login', userData)
    .then(res => {
      const decoded = jwt_decode(res.data.token);
      dispatch(authSetToken(decoded));
      AsyncStorage.setItem('jwtToken', decoded);
      startMainTabs();
    })
    .catch(err =>
      dispatch({
        type: ErrorActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const authStoreToken = (token: string) => (
  dispatch: ThunkDispatch<{}, void, Action>
) => {
  // AsyncStorage.setItem('jwtToken', token);
};

export const authSetToken = (token: string) => ({
  type: AuthActionTypes.AUTH_SET_TOKEN,
  payload: token
});

// export const logoutUser = () => (
//   dispatch: ThunkDispatch<{}, void, Action>
// ) => {
//   AsyncStorage.removeItem('jwtToken');
//   setAuthToken(false);
//   dispatch(setCurrentUser({}));
// };

export const getAuthToken = () => (
  dispatch: ThunkDispatch<{}, void, Action>,
  getState: any
) => {
  const promise = new Promise((resolve, reject) => {
    const token = getState().auth.token;
    if (!token) {
      AsyncStorage.getItem('jwtToken')
        .then(tokenFromStorage => {
          if (!tokenFromStorage) {
            reject();
            return;
          }
          dispatch(authSetToken(tokenFromStorage));
          resolve(tokenFromStorage);
        })
        .catch(err => reject());
    } else {
      resolve(token);
    }
  });
};

export const authAutoSignIn = () => (
  dispatch: ThunkDispatch<{}, void, Action>
) => {
  dispatch(getAuthToken() as any)
    .then((token: string) => {
      startMainTabs();
    })
    .catch((err: object) => alert('Failed to fetch token'));
};
