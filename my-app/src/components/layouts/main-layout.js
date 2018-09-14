import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

import './main-layout.css';

import TitleDialog from '../../TitleDialog/TitleDialog';
import NavBar from '../../NavBar/NavBar';
import product from '../views/product-list'
import products from '../views/product-list'
let filterProducts ='';



export default function(props) {
  function onClickLink () {

    }

  return (
    <div className="app">

      <header className="primary-header">
        <NavBar/>
        <TitleDialog/>
      </header>

      <main id="content" class="main-content">
        <ul>
            <ul  class="drop_vert_menu">
            <li><a href="#"><span>Рыболовные снасти</span></a>
              <ul>
              <li><Link to="/products" activeClassName="Спиннинг" onClick ={onClickLink}>Спиннинг</Link></li>
              <li><Link to="/products" activeClassName="Катушки" onClick ={onClickLink}>Катушки</Link></li>
              <li><Link to="/leskas" activeClassName="active">Лески и шнуры</Link></li>
              <li><Link to="/products" activeClassName="active">Садки, подсаки</Link></li>
              <li><Link to="/Сигнализаторы" activeClassName="active">Сигнализаторы поклевки</Link></li>
              <li><Link to="/Стойки" activeClassName="active">Стойки и подставки</Link></li>
              </ul>
            </li>

            <li><a href="#"><span>Оснащение</span></a>
              <ul>
              <li><Link to="/Крючки" activeClassName="active">Крючки</Link></li>
              <li><Link to="/Грузила" activeClassName="active">Грузила</Link></li>
              <li><Link to="/ДжигГоловки" activeClassName="active">Джиг-головки</Link></li>
              <li><Link to="/Кормушки" activeClassName="active">Кормушки</Link></li>
              <li><Link to="/Поплавки" activeClassName="active">Поплавки</Link></li>
              <li><Link to="/Карабины" activeClassName="active">Карабины</Link></li>
              <li><Link to="/Застежки" activeClassName="active">Застежки</Link></li>
              <li><Link to="/Вертлюжки" activeClassName="active">Вертлюжки</Link></li>
              <li><Link to="/ЗаводныеКольца" activeClassName="active">Заводные кольца</Link></li>
              <li><Link to="/Поводки" activeClassName="active">Поводки</Link></li>
              </ul>
           </li>

            <li><a href="#"><span>Приманки</span></a>
              <ul>
                <li><Link to="/Блесна" activeClassName="active">Блесна</Link></li>
                <li><Link to="/Мормышки" activeClassName="active">Мормышки</Link></li>
                <li><Link to="/Балансиры" activeClassName="active">Балансиры</Link></li>
                <li><Link to="/Воблеры" activeClassName="active">Воблеры</Link></li>
                <li><Link to="/Силикон" activeClassName="active">Силикон</Link></li>
                <li><Link to="/Насадки" activeClassName="active">Насадки</Link></li>
                <li><Link to="/Прикормка" activeClassName="active">Прикормка</Link></li>
                <li><Link to="/Добавки" activeClassName="active">Добавки</Link></li>
                <li><Link to="/Аттрактанты" activeClassName="active">Аттрактанты</Link></li>
                <li><Link to="/Спреи" activeClassName="active">Спреи</Link></li>
              </ul>
            </li>

            <li><a href="#"><span>Аксессуары</span></a>
              <ul>
                <li><Link to="/НадувныеЛодки" activeClassName="active">Надувные лодки</Link></li>
                <li><Link to="/ПодвесныеДвигатели" activeClassName="active">Подвесные двигатели</Link></li>
                <li><Link to="/Эхолоты" activeClassName="active">Эхолоты</Link></li>
                <li><Link to="/КарповыеКораблики" activeClassName="active">Карповые кораблики</Link></li>
                <li><Link to="/КарповыеМаты" activeClassName="active">Карповые маты и мешки</Link></li>
                <li><Link to="/Кобры" activeClassName="active">Кобры, ракеты</Link></li>
                <li><Link to="/Рогатки" activeClassName="active">Рогатки и катапульты</Link></li>
              </ul>
            </li>
         </ul>
       </ul>

       <h4 className="h6-animation">НА ХВОСТЕ Юрия Скользнева. Ловля фидером с лодки. Сорокошичи.</h4>
       <iframe width="350" height="200" src="https://www.youtube.com/embed/my0GAYs0XmY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
       <h4 className="h6-animation">Обзор бюджетного шнура Select Basic</h4>
       <iframe width="350" height="200" src="https://www.youtube.com/embed/qG4KoljRhWI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
       <h4 className="h6-animation">Как использовать флюорокарбон?</h4>
       <iframe width="350" height="200" src="https://www.youtube.com/embed/pvd89UZ8Mdg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
       <p><img src='https://ibis.net.ua/images/promo/2726_ru.jpg?v=1534506205' width="350" height="200" alt="Пример"/></p>
       <p><img src='https://ibis.net.ua/images/promo/2729_ru.jpg?v=1534757420' width="350" height="200" alt="Пример"/></p>
       <p><img src='https://ibis.net.ua/images/promo/2713_ru.jpg?v=1533129106' width="350" height="200" alt="Пример"/></p>
       <p><img src='https://ibis.net.ua/images/promo/2703_ru.jpg?v=1531407503' width="350" height="200" alt="Пример"/></p>


       <h4 className="h6-animation">Чемпионат Украины по ловле хищной рыбы спиннингом с берега 2018</h4>
       <p><a href="http://fsfu.org.ua/novyny/147-chempionat-ukrainy-po-lovle-khishchnoj-ryby-spinningom-s-berega-2018">
          <img src="http://fsfu.org.ua/images/stories/Bereg/Chemp2018/_DSC0530.jpg" width="350" height="200" alt="Пример"/></a></p>
       <h4 className="h6-animation">Чемпіонат світу з берегового спінінгу 2018</h4>
       <p><a href="http://fsfu.org.ua/index.php">
          <img src="http://fsfu.org.ua/images/stories/Bereg/WC2018/32381170_1856124181104262_8597369107374931968_n.jpg" width="350" height="200" alt="Пример"/></a></p>
       <h4 className="h6-animation">Рыбалка.Охота.Туризм 26 - 29 сентября 2018 года</h4>
       <p><a href="http://fishexpo.com.ua/">
          <img src="http://fishexpo.com.ua/wp-content/uploads/2018/03/главное-фото-1000.jpg" width="350" height="200" alt="Пример"/></a></p>

      </main>

      <aside className="primary-aside">
        {props.children}
      </aside>

      <aside class="twin">

      </aside>

      <aside class="twin">

      </aside>

      <footer class="colophon grid">
      &copy; Скидан Сергей
      </footer>

    </div>
    );
}
