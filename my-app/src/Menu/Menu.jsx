import React from 'react';
import './Menu.css';
//import {ProductBoard} from "../Product/Product";
//import {SearchBar} from "../Product/Product";
//import product from "../Product/Product";
//import products from "../Product/Product";
//import rows from "../Product/Product";

import {ProductList} from '../Product/Product';
import products from '../Product/Product';


export var menuSwith = '';



export  class Menu extends React.Component {
  handleClick = (e) => {
  menuSwith = e.target.getAttribute('id').toLowerCase().substring(0,3);
// document.getElementById('input').innerHTML = menuSwith;

//document.getElementById('inputSearchBar').dispatchEvent(new Event('onChange'));
//  const product = this.props.product;

//  <div className='product-list'><h4 className='product__title'>{this.props.product.name}</h4><img src={this.props.product.image} alt={this.props.product.name} className='product__image'/><div className='product__tips'>Модель:{this.props.product.text}</div><div className='product__tips'>Цена:{this.props.product.price}</div><div className='product__tips'>Код товара: {this.props.product.id}</div><button onClick={(e) => this.addToCart(e)}>Добавить в корзину</button></div>


var x =<div dangerouslySetInnerHTML={<ProductList products={products}/>} />;




   document.getElementById("product__list").innerHTML = x;
//document.getElementById('product__list').innerHTML = <ProductList products={products}/>;


  alert('this is: '+menuSwith);
}
  render() {
    return (

      <ul  class="drop_vert_menu">
	<li><a href="#"><span>Рыболовные снасти</span></a>
    <ul>
     <li><a href="#" id = "Спиннинг" Link>Удилища</a></li>
     <li><a href="#" id = "Катушка" onClick={(e) => this.handleClick(e)}>Катушки</a></li>
     <li><a href="#" id = "Леска" onClick={(e) => this.handleClick(e)}>Лески и шнуры</a></li>
     <li><a href="#" id = "Садок" onClick={(e) => this.handleClick(e)}>Садки, подсаки</a></li>
     <li><a href="#" id = "Сигнализаторы поклевки" onClick={(e) => this.handleClick(e)}>Сигнализаторы поклевки</a></li>
     <li><a href="#" id = "Стойки и подставки" onClick={(e) => this.handleClick(e)}>Стойки и подставки</a></li>
   </ul>
	</li>

	<li><a href="#"><span>Оснащение</span></a>
		<ul>
     <li><a href="#" id = "Крючки" onClick={(e) => this.handleClick(e)}>Крючки</a></li>
     <li><a href="#" id = "Грузила" onClick={(e) => this.handleClick(e)}>Грузила</a></li>
     <li><a href="#" id = "Джиг-головки" onClick={(e) => this.handleClick(e)}>Джиг-головки</a></li>
     <li><a href="#" id = "Кормушки" onClick={(e) => this.handleClick(e)}>Кормушки</a></li>
     <li><a href="#" id = "Поплавки" onClick={(e) => this.handleClick(e)}>Поплавки</a></li>
     <li><a href="#" id = "Карабины" onClick={(e) => this.handleClick(e)}>Карабины</a></li>
     <li><a href="#" id = "Застежки" onClick={(e) => this.handleClick(e)}>Застежки</a></li>
     <li><a href="#" id = "Вертлюжки" onClick={(e) => this.handleClick(e)}>Вертлюжки</a></li>
     <li><a href="#" id = "Заводные кольца" onClick={(e) => this.handleClick(e)}>Заводные кольца</a></li>
     <li><a href="#" id = "Поводки" onClick={(e) => this.handleClick(e)}>Поводки</a></li>
    </ul>
 </li>

 <li><a href="#"><span>Приманки</span></a>
	  <ul>
     <li><a href="#"><span>Блесна</span></a></li>
     <li><a href="#"><span>Мормышки</span></a></li>
     <li><a href="#"><span>Балансиры</span></a></li>
     <li><a href="#"><span>Воблеры</span></a></li>
     <li><a href="#"><span>Силикон</span></a></li>
     <li><a href="#"><span>Насадки</span></a></li>
     <li><a href="#"><span>Прикормка</span></a></li>
     <li><a href="#"><span>Добавки</span></a></li>
     <li><a href="#"><span>Аттрактанты</span></a></li>
     <li><a href="#"><span>Спреи</span></a></li>
  </ul>
</li>

	<li><a href="#"><span>Аксессуары</span></a>
    <ul>
     <li><a href="#"><span>Надувные лодки</span></a></li>
     <li><a href="#"><span>Подвесные двигатели</span></a></li>
     <li><a href="#"><span>Эхолоты</span></a></li>
     <li><a href="#"><span>Карповые кораблики</span></a></li>
     <li><a href="#"><span>Карповые маты и мешки</span></a></li>
     <li><a href="#"><span>Кобры, ракеты</span></a></li>
     <li><a href="#"><span>Рогатки и катапульты</span></a></li>
    </ul>
	</li>

</ul>

    );
  }
}

export default (Menu);
