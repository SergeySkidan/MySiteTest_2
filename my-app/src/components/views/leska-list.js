import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

import * as leskaApi from '../../api/leska-api';

import { loadSearchLayout } from '../../actions/search-layout-actions';
import './leska-list.css';

export default class LeskaList extends React.Component{
deleteLeska=(e)=>{

}

    componentDidMount=()=> {
        this.props.dispatch(leskaApi.getLeskas());
    }

render(){
    const { leska, leskas } = this.props;
  return (

    <div className="data-list">
    {leskas.map(leska => {
        return (
          <div key={leska.id} className="data-list-item">

            <div className='product-list'>
              <h4 className='product__title'>{leska.name}</h4>
              <img src={leska.image} alt={leska.name} className='product__image'/>
              <div className='product__tips'>Модель:{leska.text}</div>
              <div className='product__tips'>Цена:{leska.price}</div>
              <div className='product__tips'>Код товара: {leska.id}</div>

              <button onClick='addToCart(e)'>Добавить в корзину</button>
              <button onClick={this.props.deleteLeska.bind(null, leska.id)} className="delete">Delete</button>
            </div>
        </div>);
      })
    }
  </div>
 );
}}
