import axios from 'axios';
import { store } from './../helpers';
import { getLeskasSuccess, deleteLeskaSuccess } from '../actions/leska-actions';

export function getLeskas() {
  return axios.get('http://localhost:3001/leskas')
    .then(response => {
      store.dispatch(getLeskasSuccess(response.data));
      return response;
    });
}

export function searchLeskas(query = '') {
  return axios.get('http://localhost:3001/leskas?q='+ query)
    .then(response => {
      store.dispatch(getLeskasSuccess(response.data));
      return response;
    });
}

export function deleteLeska(leskaId) {
  return axios.delete('http://localhost:3001/leskas/' + leskaId)
    .then(response => {
      store.dispatch(deleteLeskaSuccess(leskaId));
      return response;
    });
}
