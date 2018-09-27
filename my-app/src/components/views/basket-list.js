import React, { Component } from 'react';
import { Link } from 'react-router';
import * as basketApi from '../../api/basket-api';

import './basket-list.css';

var priceCart = 0;
var cart ='';
 class BasketItem extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
           basket: {
               id: '',
               name: '',
               image: '',
               text: '',
               price: '',
               counter: ''
     }}
  }
  deleteBasket(e){
    basketApi.deleteBasket(this.props.basket.id);
  }

  handleInputChange(event) {
      var newbasket = this.props.basket;
      newbasket.counter = event.target.value;
      basketApi.putBasket(newbasket.id);

    this.setState({
    counter: event.target.value
  });
  }

  render() {
    var basket = this.props.basket;
      return (<div className='basket-list'>
    <ul>
      <li><h4 className='basket__title'>{this.props.basket.name}</h4></li>
      <li><img src={this.props.basket.image} alt={this.props.basket.name} className='basket__image'/></li>
      <li><div className='basket__tips'>Модель:{this.props.basket.text}</div></li>
      <li><div className='basket__tips'>Цена:{this.props.basket.price}</div></li>
      <li><div className='basket__tips'>Код товара: {this.props.basket.id}</div></li>
      <li><div className='basket__tips__end'>Количество: </div></li>

      <li><input  className='input__counter__basket'  name="counterBasket" type="number" min="1" max="11"
         value={basket.counter} onChange={(e) => this.handleInputChange(e)}/></li>

      <li><div className='basket__price'>Итого: {basket.price*basket.counter} грн</div></li>
      <li><button onClick={(e) => this.deleteBasket(e)} className="delete__button">Удалить из корзины</button></li>
    </ul>
</div>)
  }
}

export default class BasketList extends React.Component {

  checkOut(e){
    priceCart = 0;
    cart = '';
    var basketsList = this.props.baskets;

    cart += "Ваш заказ:"+"\n \n";
    for (var key in basketsList) {
    priceCart += basketsList[key].counter*basketsList[key].price;
    cart += basketsList[key].text+"\n";
    cart += "Цена за единицу: "+basketsList[key].price+" грн \n";
    cart += "Количество: "+basketsList[key].counter+" шт \n";
    cart += "Цена за все: "+basketsList[key].counter*basketsList[key].price+" грн \n \n";
    basketApi.deleteBasket(basketsList[key].id);
    }
    cart += "Итого сумма заказа: "+priceCart+" грн \n \n";
    alert(cart);
  }

  render() {
    const baskets = this.props.baskets;
    const items = baskets.map((basket) => {
    return <BasketItem id='items' key={basket.id}  className="basket-list-item" basket={basket}/>;
    });
    return (
      <div>
      {items}
      <button onClick={(e) => this.checkOut(e)} className="checkout__button">Оформить заказ</button>
      </div>
          );
        }
}
