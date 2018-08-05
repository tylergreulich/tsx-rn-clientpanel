import { ErrorActionTypes, ErrorState } from './types';
import { Reducer } from 'redux';

const initialState: ErrorState = {};

export const errorReducer: Reducer<ErrorState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ErrorActionTypes.GET_ERRORS:
      return action.payload;

    default:
      return state;
  }
};
