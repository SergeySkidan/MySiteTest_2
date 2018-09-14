import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './NavBar.css';

class NavBar extends React.Component {
  render() {

    return (

      <nav>
             	<ul>

             		<li><Link to="/" activeClassName="active">Главная</Link></li>

             		<li><a href="#">Каталог товаров</a>
             			<ul>

             				<li><a href="#">Рыболовные снасти</a>
             					<ul>
                        <li><Link to="/" activeClassName="active">Удилища</Link></li>
                        <li><Link to="/users" activeClassName="active">Катушки</Link></li>
                        <li><Link to="/leskas" activeClassName="active">Лески и шнуры</Link></li>
                        <li><Link to="/Садок" activeClassName="active">Садки, подсаки</Link></li>
                        <li><Link to="/Сигнализаторы" activeClassName="active">Сигнализаторы поклевки</Link></li>
                        <li><Link to="/Стойки" activeClassName="active">Стойки и подставки</Link></li>
             					</ul>
             				</li>

             				<li><a href="#">Оснащение</a>
                      <ul>
                        <li><a href="#">Крючки</a></li>
                        <li><a href="#">Грузила</a></li>
                        <li><a href="#">Джиг-головки</a></li>
                        <li><a href="#">Кормушки</a></li>
                        <li><a href="#">Поплавки</a></li>
                        <li><a href="#">Карабины</a></li>
                        <li><a href="#">Застежки</a></li>
                        <li><a href="#">Вертлюжки</a></li>
                        <li><a href="#">Заводные кольца</a></li>
                        <li><a href="#">Поводки</a></li>
                      </ul>
                  </li>

             				<li><a href="#">Приманки и прикормки</a>
                      <ul>
                        <li><a href="#">Блесна</a></li>
                        <li><a href="#">Мормышки</a></li>
                        <li><a href="#">Балансиры</a></li>
                        <li><a href="#">Воблеры</a></li>
                        <li><a href="#">Силикон</a></li>
                        <li><a href="#">Насадки</a></li>
                        <li><a href="#">Прикормка</a></li>
                        <li><a href="#">Добавки</a></li>
                        <li><a href="#">Аттрактанты</a></li>
                        <li><a href="#">Спреи</a></li>
                      </ul>
                  </li>

             				<li><a href="#">Рыболовные аксессуары</a>
             					<ul>
                      	<li><a href="#">Надувные лодки</a></li>
             						<li><a href="#">Подвесные двигатели</a></li>
             						<li><a href="#">Эхолоты</a></li>
             						<li><a href="#">Карповые кораблики</a></li>
             						<li><a href="#">Карповые маты и мешки</a></li>
             						<li><a href="#">Кобры, ракеты</a></li>
             						<li><a href="#">Рогатки и катапульты</a></li>
             					</ul>
             			</li>

             			</ul>
             		</li>

             		<li><a href="#">Отчеты</a>
             			<ul>
             				<li><Link to="/report_18_08_18" activeClassName="active">Отчет 18.08.2018</Link></li>
             			</ul>
             		</li>

             		<li><Link to="/articles" activeClassName="active">Статьи</Link></li>

             		<li><a href="#">Мероприятия</a>
                  <ul>
                    <li><a href="http://trofey.net/rybalka/rybalka-meropriyatiya">Календарь рыболовных событий</a></li>
                    <li><a href="http://fsfu.org.ua/novyny/147-chempionat-ukrainy-po-lovle-khishchnoj-ryby-spinningom-s-berega-2018">Чемпионат Украины по ловле рыбы спинингом с берега</a></li>
                    <li><a href="http://fsfu.org.ua/">Федерация рыболовного спорта Украины</a></li>
                    <li><a href="http://fishexpo.com.ua/">Выставка: Рыбалка.Охота.Туризм 26 - 29 сентября 2018 года</a></li>
                  </ul>
               </li>

             		<li><Link to="/aboutUs" activeClassName="active">О Нас</Link></li>

             		<li><Link to="/login" activeClassName="active">Войти</Link></li>

             		<li><Link to="/register" activeClassName="active">Регистрация</Link></li>

                <li><Link to="/basket" activeClassName="active">Корзина:<div id='cauntAddToCart'>0</div></Link></li>

       	</ul>
        {this.props.children}
     </nav>
    );
  }
}


export default NavBar;
