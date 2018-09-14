import React, { Component } from 'react';
import { Link } from 'react-router';

import './product-list.css';

const productAddToCart = [];
localStorage.setItem('BasketList', JSON.stringify(""));

class ProductItem extends React.Component {

addToCart = (event) => {
//получаем localStorage.BasketList
  localStorage.BasketList
  var StorageList = JSON.parse(localStorage.getItem("BasketList")||"[]")
//добавляем к массиву productAddToCart объекты из StorageList для добавления в localStorage.BasketList
//нового объекта и старых из localStorage.BasketList
  for (var key in StorageList) {
    productAddToCart.push(StorageList[key]);
  }
//получаем продукт
  var tempLocalStorage = this.props.product;
//ложим его в productAddToCart
  productAddToCart.push(tempLocalStorage);
//ложим все в localStorage.BasketList
  localStorage.setItem('BasketList', JSON.stringify(productAddToCart));
//очищаем productAddToCart
  productAddToCart.length = 0;

//счетчик корзины
localStorage.BasketList
var cauntBasket = JSON.parse(localStorage.getItem("BasketList")||"[]");
document.getElementById('cauntAddToCart').innerHTML = cauntBasket.length;
}
  render() {
    const product = this.props.product;
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
