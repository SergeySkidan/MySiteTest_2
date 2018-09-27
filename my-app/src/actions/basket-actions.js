import * as types from '../actions/action-types';

export function getBasketsSuccess(baskets) {
  return {
    type: types.GET_BASKETS_SUCCESS,
    baskets
  };
}

export function deleteBasketSuccess(basketId) {
  return {
    type: types.DELETE_BASKET_SUCCESS,
    basketId
  };
}

export function addBasketSuccess(product) {
  return {
    type: types.ADD_BASKET_SUCCESS,
    product
  };
}

export function putBasketSuccess(basketId) {
  return {
    type: types.PUT_BASKET_SUCCESS,
    basketId
  };
}
