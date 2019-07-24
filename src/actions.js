import {
  CHANGE_SEARCH_FIELD,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAIL
} from './constants';

export const changeSearchField = string => ({
  type: CHANGE_SEARCH_FIELD,
  payload: string
});

export const getUsers = () => dispatch => {
  dispatch({ type: REQUEST_USERS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(data =>
      dispatch({
        type: REQUEST_USERS_SUCCESS,
        payload: data
      })
    )
    .catch(err =>
      dispatch({
        type: REQUEST_USERS_FAIL,
        payload: err
      })
    );
};
