import { combineReducers } from 'redux';
import { AuthState } from './auth/types';
import { ErrorState } from './errors/types';
import { authReducer } from './auth/authReducer';
import { errorReducer } from './errors/errorReducer';

export interface AppState {
  auth: AuthState;
  errors: ErrorState;
}

export default combineReducers<AppState>({
  auth: authReducer,
  errors: errorReducer
});
