import * as types from '../actions/action-types';

export function getLeskasSuccess(leskas) {
  return {
    type: types.GET_LESKAS_SUCCESS,
    leskas
  };
}

export function deleteLeskaSuccess(leskaId) {
  return {
    type: types.DELETE_LESKA_SUCCESS,
    leskaId
  };
}
