import { CHANGE_SEARCH_FIELD, REQUEST_USERS_FAIL, REQUEST_USERS_PENDING, REQUEST_USERS_SUCCESS } from './constants';

const initialStateSearch = {
  searchField: '',
};

const initialStateUsers = {
  isPending: false,
  users: [],
  error: '',
}

export const usersReducer = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
}

export const requestUsers = (state = initialStateUsers, action = {}) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_USERS_SUCCESS:
      return { ...state, users: action.payload, isPending: false };
    case REQUEST_USERS_FAIL:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};