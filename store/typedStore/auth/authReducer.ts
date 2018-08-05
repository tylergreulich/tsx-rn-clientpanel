import isEmpty from '../../utilities/isEmpty';

import { Reducer } from 'redux';
import { AuthState, AuthActionTypes } from './types';

const initialState: AuthState = {
  isAuthenticated: false,
  user: {}
};

export const authReducer: Reducer<AuthState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_SET_TOKEN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    default:
      return state;
  }
};
