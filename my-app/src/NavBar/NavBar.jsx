import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './NavBar.css';
import * as productApi from '../api/product-api';

var  queryProducts='';
function OnClickFilter(){
queryProducts = this.id;
productApi.searchProducts(queryProducts);
queryProducts='';
}
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
                        <li><Link to="/fishingGear/spinning" className ="Links" id = "спиннинг" onClick={OnClickFilter}>Удилища и аксессуары</Link></li>
                        <li><Link to="/fishingGear/coil" className ="Links" id = "катушка" onClick={OnClickFilter}>Катушки и зип</Link></li>
                        <li><Link to="/fishingGear/line" className ="Links" id = "леска" onClick={OnClickFilter}>Лески, шнуры</Link></li>
                        <li><Link to="/fishingGear/cage" className ="Links" id = "садок" onClick={OnClickFilter}>Садки, подсаки</Link></li>
                        <li><Link to="/fishingGear/bickStrikeAlarms" className ="Links" id = "сигнализатор" onClick={OnClickFilter}>Сигнализаторы поклевки</Link></li>
                        <li><Link to="/fishingGear/racksAndStands" className ="Links" id = "стойка" onClick={OnClickFilter}>Стойки и подставки</Link></li>
             					</ul>
             				</li>

             				<li><a href="#">Оснащение</a>
                      <ul>
                        <li><Link to="/equipment/hooks" className ="Links" id = "крючок" onClick={OnClickFilter}>Крючки</Link></li>
                        <li><Link to="/equipment/sinker" className ="Links" id = "грузило" onClick={OnClickFilter}>Грузила</Link></li>
                        <li><Link to="/equipment/jigHeads" className ="Links" id = "джиг" onClick={OnClickFilter}>Джиг-головки</Link></li>
                        <li><Link to="/equipment/feeders" className ="Links" id = "кормушка" onClick={OnClickFilter}>Кормушки</Link></li>
                        <li><Link to="/equipment/floats" className ="Links" id = "поплавок" onClick={OnClickFilter}>Поплавки</Link></li>
                        <li><Link to="/equipment/carbines" className ="Links" id = "карабин" onClick={OnClickFilter}>Карабины</Link></li>
                        <li><Link to="/equipment/fasteners" className ="Links" id = "застежка" onClick={OnClickFilter}>Застежки</Link></li>
                        <li><Link to="/equipment/swivels" className ="Links" id = "вертлюжок" onClick={OnClickFilter}>Вертлюжки</Link></li>
                        <li><Link to="/equipment/clockworkRings" className ="Links" id = "кольцо" onClick={OnClickFilter}>Кольца</Link></li>
                        <li><Link to="/equipment/leads" className ="Links" id = "поводок" onClick={OnClickFilter}>Поводки</Link></li>
                      </ul>
                  </li>

             				<li><a href="#">Приманки и прикормки</a>
                      <ul>
                        <li><Link to="/baits/spoon" className ="Links" id = "блесна" onClick={OnClickFilter}>Блесна</Link></li>
                        <li><Link to="/baits/mormyshki" className ="Links" id = "мормышка" onClick={OnClickFilter}>Мормышки</Link></li>
                        <li><Link to="/baits/balancer" className ="Links" id = "балансир" onClick={OnClickFilter}>Балансиры</Link></li>
                        <li><Link to="/baits/wobblers" className ="Links" id = "воблер" onClick={OnClickFilter}>Воблеры</Link></li>
                        <li><Link to="/baits/silicone" className ="Links" id = "силикон" onClick={OnClickFilter}>Силикон</Link></li>
                        <li><Link to="/baits/nozzles" className ="Links" id = "насадка" onClick={OnClickFilter}>Насадки</Link></li>
                        <li><Link to="/baits/lure" className ="Links" id = "прикормка" onClick={OnClickFilter}>Прикормка</Link></li>
                        <li><Link to="/baits/additives" className ="Links" id = "добавка" onClick={OnClickFilter}>Добавки</Link></li>
                        <li><Link to="/baits/attractants" className ="Links" id = "аттрактант" onClick={OnClickFilter}>Аттрактанты</Link></li>
                        <li><Link to="/baits/sprays" className ="Links" id = "спрей" onClick={OnClickFilter}>Спреи</Link></li>

                      </ul>
                  </li>

             				<li><a href="#">Рыболовные аксессуары</a>
             					<ul>
                        <li><Link to="/accessories/inflatableBoat" className ="Links" id = "лодка" onClick={OnClickFilter}>Надувные лодки</Link></li>
                        <li><Link to="/accessories/pendantMotors" className ="Links" id = "двигатель" onClick={OnClickFilter}>Подвесные двигатели</Link></li>
                        <li><Link to="/accessories/echoSounders" className ="Links" id = "эхолот" onClick={OnClickFilter}>Эхолоты, навигаторы</Link></li>
                        <li><Link to="/accessories/carpBoats" className ="Links" id = "кораблик" onClick={OnClickFilter}>Карповые кораблики</Link></li>
                        <li><Link to="/accessories/carpMats" className ="Links" id = "мат" onClick={OnClickFilter}>Карповые маты</Link></li>
                        <li><Link to="/accessories/cobras" className ="Links" id = "кобра" onClick={OnClickFilter}>Кобры, ракеты</Link></li>
                        <li><Link to="/accessories/slingshots" className ="Links" id = "рогатка" onClick={OnClickFilter}>Рогатки и катапульты</Link></li>
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
