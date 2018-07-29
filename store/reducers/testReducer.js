import { GET_TEST_DATA } from '../actions/actionTypes';

const initialState = {
  data: []
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEST_DATA:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};

export default testReducer;
