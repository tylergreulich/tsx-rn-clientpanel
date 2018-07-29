import axios from 'axios';
import { GET_TEST_DATA, GET_ERRORS } from './actionTypes';

export const getTestData = () => dispatch => {
  axios
    .get('http://192.168.0.6:5000/api/users/test')
    .then(res => dispatch({ type: GET_TEST_DATA, payload: res.data }))
    .catch(err => alert(err));
};
