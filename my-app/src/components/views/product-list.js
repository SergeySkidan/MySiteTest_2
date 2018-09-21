import React, { Component } from 'react';
import { Link } from 'react-router';
import * as basketApi from '../../api/basket-api';

import './product-list.css';


localStorage.setItem('BasketList', JSON.stringify(""));

class ProductItem extends React.Component {

addToCart = (event) => {
basketApi.addBasket(this.props.product);
var alertMessage = this.props.product;
alert(alertMessage.text + ' -этот товар добавлен в корзину');


}
  render() {
    var product = this.props.product;
      return (<div className='product-list'>
      <h4 className='product__title'>{this.props.product.name}</h4>
      <img src={this.props.product.image} alt={this.props.product.name} className='product__image'/>
      <div className='product__tips'>Модель:{this.props.product.text}</div>
      <div className='product__tips'>Цена:{this.props.product.price}</div>
      <div className='product__tips'>Код товара: {this.props.product.id}</div>
      <button onClick={(e) => this.addToCart(e)}>Добавить в корзину</button>
    </div>)
  }
}

export default class ProductList extends React.Component {
  render() {
    const products = this.props.products;
    const items = products.map((product) => {
    return <ProductItem id='items' key={product.id} product={product}/>;
    });
    return (<ul>{items}</ul>);
  }
}
