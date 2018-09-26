import React, { Component } from 'react';
import { Link } from 'react-router';


import './basket-list.css';

var priceCart = 0;


export default class BasketList extends React.Component {
  constructor(props) {
        super(props);
        // this.state = {
        //    basket: {
        //        id: '',
        //        name: '',
        //        image: '',
        //        text: '',
        //        price: '',
        //        counterBasket: 1
        //    }}
      this.state = {
      counterBasket: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    priceCart = 0;
    var basketsList = this.props.baskets;
    for (var key in basketsList) {
    priceCart += this.state.counterBasket*basketsList[key].price;
    }

    return (
      <div className="basket-list">
      {this.props.baskets.map(basket => {
          return (
                <div key={basket.id} className="basket-list-item">
              <ul>
                <li><h4 className='basket__title'>{basket.name}</h4></li>
                <li><img src={basket.image} alt={basket.name} className='basket__image'/></li>
                <li><div className='basket__tips'>Модель: {basket.text}</div></li>
                <li><div className='basket__tips'>Цена: {basket.price}</div></li>
                <li><div className='basket__tips'>Код товара: {basket.id}</div></li>
                <li><div className='basket__tips__end'>Количество: </div></li>

                <li><input className='input__counter__basket' id={`${basket.id}`} name="counterBasket" type="number" min="1" max="11"
                     value={this.props.counterBasket} onChange={this.props.handleInputChange}/></li>
                   <li><div className='basket__price'>Итого: {basket.price*this.state.counterBasket}</div></li>
                <li><button onClick={this.props.deleteBasket.bind(null, basket.id)} className="delete__button">Удалить из корзины</button></li>

                {/*  <div>
                       {thema.map(({ id, name, test }) => (
                         <div key={id} className='container'>
                         <h1>{name}</h1>
                         <form>
                           {test.map(question => (
                             <div
                               key={question.id}
                               className='question'
                             >
                               <p>{question.name}</p>
                                 <ul>
                                   {question.answer.map(answer => (
                                     <li key={answer.id}>
                                       {answer.text}
                                       <input
                                         type='radio'
                                         name={answer.id_question}
                                       />
                                       <button>Ответить</button>
                                     </li>
                                   ))}
                                </ul>
                             </div>
                           ))}
                         </form>
                       </div>
                       ))}
                     </div>*/}

              </ul>
          </div>);
        })
      }

      <div>Итого по заказу: {priceCart} грн</div>
      <button onClick={this.checkout} className="checkout__button">Оформить заказ</button>
    </div>
   );
  }
}
