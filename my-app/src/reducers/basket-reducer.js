import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    baskets: []
  }

const basketReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_BASKETS_SUCCESS:
    return Object.assign({}, state, { baskets: action.baskets });

    case types.ADD_BASKET_SUCCESS:
    return Object.assign({}, state, { baskets: action.baskets });

    case types.DELETE_BASKET_SUCCESS:

    const newBaskets = _.filter(state.baskets, basket => basket.id != action.basketId);
    return Object.assign({}, state, { baskets: newBaskets })

  }
  return state;
}

export default basketReducer;
