import { getStatus } from '../lib/XMLHttpRequest';

export const LOAD_STATUS = 'LOAD_STATUS';

export const loadStatus = () => {
  return function(dispatch){
    return getStatus()
    .then(statuses => {
      dispatch({
        type: LOAD_STATUS,
        statuses: statuses
      });
    });
  }
}