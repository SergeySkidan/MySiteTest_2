import * as types from '../actions/action-types';

export function getProductsSuccess(products) {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    products
  };
}

export function deleteProductSuccess(productId) {
  return {
    type: types.DELETE_PRODUCT_SUCCESS,
    productId
  };
}
