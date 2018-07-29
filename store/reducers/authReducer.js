import { AUTH_SET_TOKEN } from '../actions/actionTypes';
import isEmpty from '../../utilities/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
