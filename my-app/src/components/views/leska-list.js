import React from 'react';
import {Link} from 'react-router';

import './leska-list.css';

export default function(props) {

  function addToCart(e) {

  }

  return (
    <div className="data-list">
    {props.leskas.map(leska => {
        return (
          <div key={leska.id} className="data-list-item">

            <div className='product-list'>
              <h4 className='product__title'>{leska.name}</h4>
              <img src={leska.image} alt={leska.name} className='product__image'/>
              <div className='product__tips'>Модель:{leska.text}</div>
              <div className='product__tips'>Цена:{leska.price}</div>
              <div className='product__tips'>Код товара: {leska.id}</div>

              <button onClick='addToCart(e)'>Добавить в корзину</button>
              <button onClick={props.deleteLeska.bind(null, leska.id)} className="delete">Delete</button>
            </div>
        </div>);
      })
    }
  </div>
 );
}
