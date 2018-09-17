import axios from 'axios';
import { store } from './../helpers';
import { getProductsSuccess, deleteProductSuccess, putProductSuccess} from '../actions/product-actions';

export function getProducts() {
  return axios.get('http://localhost:3001/products')
    .then(response => {
      store.dispatch(getProductsSuccess(response.data));
      return response;
    });
}

export function searchProducts(query) {
  return axios.get('http://localhost:3001/products?q='+ query)
    .then(response => {
      store.dispatch(getProductsSuccess(response.data));
      return response;
    });
}

export function deleteProduct(productId) {
  return axios.delete('http://localhost:3001/products/' + productId)
    .then(response => {
      store.dispatch(deleteProductSuccess(productId));
      return response;
    });
}
