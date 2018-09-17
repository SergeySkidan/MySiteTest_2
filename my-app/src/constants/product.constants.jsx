import React from 'react';
import { Router, Route } from 'react-router'
import { connect } from 'react-redux';
import {  Link } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';


export const FishingGear = ({ match }) => (
  <div>
     <ul>
        <li><Link to="/fishingGear/spinning" className ="Links" id = "спиннинг"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18168230_52704554tmb.jpg" width="100" height="100"/>Удочки</Link></li>
        <li><Link to="/fishingGear/coil" className ="Links" id = "катушка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18082171_52595794tmb.jpg" width="100" height="100"/>Катушки</Link></li>
        <li><Link to="/fishingGear/line" className ="Links" id = "леска"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18215930_52746351tmb.jpg" width="100" height="100"/>Леска</Link></li>
        <li><Link to="/fishingGear/cage" className ="Links" id = "садок"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17911881_52597861tmb.jpg" width="100" height="100"/>Садки, подсаки</Link></li>
        <li><Link to="/fishingGear/bickStrikeAlarms" className ="Links" id = "сигнализатор"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18214402_52714277tmb.jpg" width="100" height="100"/>Сигнализаторы поклевки</Link></li>
        <li><Link to="/fishingGear/racksAndStands" className ="Links" id = "стойка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17948621_52597648tmb.jpg" width="100" height="100"/>Стойки и подставки</Link></li>
    </ul>
  </div>
);

export const Equipment = ({ match }) => (
  <div>
     <ul>
        <li><Link to="/equipment/hooks" className ="Links" id = "крючок">Крючки</Link></li>
        <li><Link to="/equipment/sinker" className ="Links" id = "грузило">Грузила</Link></li>
        <li><Link to="/equipment/jigHeads" className ="Links" id = "джиг">Джиг-головки</Link></li>
        <li><Link to="/equipment/feeders" className ="Links" id = "кормушка">Кормушки</Link></li>
        <li><Link to="/equipment/floats" className ="Links" id = "поплавок">Поплавки</Link></li>
        <li><Link to="/equipment/carbines" className ="Links" id = "карабин">Карабины</Link></li>
        <li><Link to="/equipment/fasteners" className ="Links" id = "застежка">Застежки</Link></li>
        <li><Link to="/equipment/swivels" className ="Links" id = "вертлюжок">Вертлюжки</Link></li>
        <li><Link to="/equipment/clockworkRings" className ="Links" id = "кольцо">Заводные кольца</Link></li>
        <li><Link to="/equipment/leads" className ="Links" id = "поводок">Поводки</Link></li>
    </ul>
  </div>
);

export const Baits = ({ match }) => (
  <div>
     <ul>
        <li><Link to="/baits/spoon" className ="Links" id = "блесна">Блесна</Link></li>
        <li><Link to="/baits/mormyshki" className ="Links" id = "мормышка">Мормышки</Link></li>
        <li><Link to="/baits/balancer" className ="Links" id = "балансир">Балансиры</Link></li>
        <li><Link to="/baits/wobblers" className ="Links" id = "воблер">Воблеры</Link></li>
        <li><Link to="/baits/silicone" className ="Links" id = "силикон">Силикон</Link></li>
        <li><Link to="/baits/nozzles" className ="Links" id = "насадка">Насадки</Link></li>
        <li><Link to="/baits/lure" className ="Links" id = "прикормка">Прикормка</Link></li>
        <li><Link to="/baits/additives" className ="Links" id = "добавка">Добавки</Link></li>
        <li><Link to="/baits/attractants" className ="Links" id = "аттрактант">Аттрактанты</Link></li>
        <li><Link to="/baits/sprays" className ="Links" id = "спрей">Спреи</Link></li>
    </ul>
  </div>
);

export const Accessories = ({ match }) => (
  <div>
     <ul>
        <li><Link to="/accessories/inflatableBoat" className ="Links" id = "лодка">Надувные лодки</Link></li>
        <li><Link to="/accessories/pendantMotors" className ="Links" id = "двигатель">Подвесные двигатели</Link></li>
        <li><Link to="/accessories/echoSounders" className ="Links" id = "эхолот">Эхолоты</Link></li>
        <li><Link to="/accessories/carpBoats" className ="Links" id = "кораблик">Карповые кораблики</Link></li>
        <li><Link to="/accessories/carpMats" className ="Links" id = "мат">Карповые маты и мешки</Link></li>
        <li><Link to="/accessories/cobras" className ="Links" id = "кобра">Кобры, ракеты</Link></li>
        <li><Link to="/accessories/slingshots" className ="Links" id = "рогатка">Рогатки и катапульты</Link></li>
    </ul>
  </div>
);
