import { getUsers } from '../lib/XMLHttpRequest';

export const LOAD_USERS = 'LOAD_USERS';

export const loadUsers = () => {
  return function(dispatch){
    return getUsers()
    .then(users => {
      dispatch({
        type: LOAD_USERS,
        users: users
      });
    });
  }
}