import React, { Component } from 'react';
import { Link } from 'react-router';

import './basket-list.css';

export default class BasketList extends React.Component {
  constructor(props) {
        super(props);
        this.state = {baskets: false};
    }

  render() {

    return (
      <div className="data-list">
      {this.props.baskets.map(basket => {
          return (
            <div key={basket.id} className="data-list-item">

              <div className='product-list'>
                <h4 className='product__title'>{basket.name}</h4>
                <img src={basket.image} alt={basket.name} className='product__image'/>
                <div className='product__tips'>Модель:{basket.text}</div>
                <div className='product__tips'>Цена:{basket.price}</div>
                <div className='product__tips'>Код товара: {basket.id}</div>

                <button onClick={this.props.deleteBasket.bind(null, basket.id)} className="delete">Удалить из корзины</button>

              </div>
          </div>);
        })
      }
    </div>
   );
  }
}
