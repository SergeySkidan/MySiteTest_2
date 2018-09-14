import * as types from '../actions/action-types';
import _ from 'lodash';


export function leskaReducer(state = {}, action) {
  switch (action.type) {

    case types.GET_LESKAS_SUCCESS:
      return {
      leskas: action.leskas
      };


    case types.DELETE_LESKA_SUCCESS:
      return {
        ...state,
        items: state.leskas.map(leska =>
          leska.id === action.leskaId
            ? { ...leska, deleting: true }
            : leska
          )
          }

        


    default: {return state;}

  }
}

export default leskaReducer;
