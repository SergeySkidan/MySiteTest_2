import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  leskas: []
};

const leskaReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_LESKAS_SUCCESS:
      return Object.assign({}, state, { leskas: action.leskas });

    case types.DELETE_LESKA_SUCCESS:

      // Use lodash to create a new widget array without the widget we want to remove
      const newLeskas = _.filter(state.leskas, leska => leska.id != action.leskaId);
      return Object.assign({}, state, { leskas: newLeskas })

  }

  return state;

}

export default leskaReducer;
