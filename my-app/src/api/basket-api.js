import axios from 'axios';
import { store } from './../helpers';
import { getBasketsSuccess, deleteBasketSuccess, addBasketSuccess } from '../actions/basket-actions';


export function getBaskets() {
 return axios.get('http://localhost:3001/baskets')
  .then(response => {
    store.dispatch(getBasketsSuccess(response.data));
    return response;
  });
}

export function deleteBasket(basketId) {

  var productAddToCart = JSON.parse(localStorage.getItem("BasketList")||"[]")
  productAddToCart = +productAddToCart - 1;
  localStorage.setItem('BasketList', JSON.stringify(productAddToCart));
  document.getElementById('cauntAddToCart').innerHTML = productAddToCart;

  return axios.delete('http://localhost:3001/baskets/' + basketId)
    .then(response => {
      store.dispatch(deleteBasketSuccess(basketId));
      return response;
    });
}

export function addBasket(product) {

var a = 0;
  axios({
    method: 'post',
    url: 'http://localhost:3001/baskets/',
    data: {
      id: product.id,
      name: product.name,
      image: product.image,
      text: product.text,
      price: product.price
    }
  }).then(function(response) {
        console.log(response);
        var productAddToCart = JSON.parse(localStorage.getItem("BasketList")||"[]")
        productAddToCart = +productAddToCart+1 ;
        localStorage.setItem('BasketList', JSON.stringify(productAddToCart));
        document.getElementById('cauntAddToCart').innerHTML = productAddToCart;
      }).catch(function(error) {
        console.log(error);
      })




}
