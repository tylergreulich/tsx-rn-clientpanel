export interface AuthState {
  isAuthenticated: boolean;
  user: {};
}

export const enum AuthActionTypes {
  AUTH_SET_TOKEN = 'AUTH_SET_TOKEN',
  SET_CURRENT_USER = 'SET_CURRENT_USER'
}
