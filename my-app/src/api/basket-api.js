import axios from 'axios';
import { store } from './../helpers';
import { getBasketsSuccess, deleteBasketSuccess, addBasketSuccess, putBasketSuccess } from '../actions/basket-actions';


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
  axios({
    method: 'post',
    url: 'http://localhost:3001/baskets/',
    data: {
      id: product.id,
      name: product.name,
      image: product.image,
      text: product.text,
      price: product.price,
      counter: 1
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

export function putBasket(basket) {
  axios({
    method: 'put',
    url: 'http://localhost:3001/baskets/',
    data: {
      id: basket.id,
      name: basket.name,
      image: basket.image,
      text: basket.text,
      price: basket.price,
      counter: basket.counter
    }
  })
}
