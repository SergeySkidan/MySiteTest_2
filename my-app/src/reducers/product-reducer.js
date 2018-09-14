import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  products: [],
filterProducts: ''
};

const productReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { products: action.products });

  
    case types.DELETE_PRODUCT_SUCCESS:
      const newProducts = _.filter(state.products, product => product.id != action.productId);
      return Object.assign({}, state, { products: newProducts });

  }

  return state;

}

export default productReducer;
