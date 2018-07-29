import { combineReducers } from 'redux';
import testReducer from './testReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  test: testReducer,
  errors: errorReducer,
  auth: authReducer
});
