import React from 'react';
import { Router, Route } from 'react-router'
import { connect } from 'react-redux';
import {  Link } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';
import './product.constants.css';

export const FishingGear = ({ match }) => (
  <div className ="menu-list">
     <ul>
        <li><Link to="/fishingGear/spinning" className ="Links" id = "спиннинг"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18168230_52704554tmb.jpg" className = "list__image"/>Удилища и аксессуары</Link></li>
        <li><Link to="/fishingGear/coil" className ="Links" id = "катушка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18082171_52595794tmb.jpg" className = "list__image"/>Катушки и зип</Link></li>
        <li><Link to="/fishingGear/line" className ="Links" id = "леска"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18215930_52746351tmb.jpg" className = "list__image"/>Лески, шнуры</Link></li>
        <li><Link to="/fishingGear/cage" className ="Links" id = "садок"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17911881_52597861tmb.jpg" className = "list__image"/>Садки, подсаки</Link></li>
        <li><Link to="/fishingGear/bickStrikeAlarms" className ="Links" id = "сигнализатор"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18214402_52714277tmb.jpg" className = "list__image"/>Сигнализаторы поклевки</Link></li>
        <li><Link to="/fishingGear/racksAndStands" className ="Links" id = "стойка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17948621_52597648tmb.jpg" className = "list__image"/>Стойки и подставки</Link></li>
    </ul>
  </div>
);

export const Equipment = ({ match }) => (
  <div className ="menu-list">
     <ul>
        <li><Link to="/equipment/hooks" className ="Links" id = "крючок"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18224471_52734510tmb.jpg" className = "list__image"/>Крючки</Link></li>
        <li><Link to="/equipment/sinker" className ="Links" id = "грузило"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18017311_52656630tmb.jpg" className = "list__image"/>Грузила</Link></li>
        <li><Link to="/equipment/jigHeads" className ="Links" id = "джиг"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18194496_52723893tmb.jpg" className = "list__image"/>Джиг-головки</Link></li>
        <li><Link to="/equipment/feeders" className ="Links" id = "кормушка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18213415_52705920tmb.jpg" className = "list__image"/>Кормушки</Link></li>
        <li><Link to="/equipment/floats" className ="Links" id = "поплавок"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18216146_52725379tmb.jpg" className = "list__image"/>Поплавки</Link></li>
        <li><Link to="/equipment/carbines" className ="Links" id = "карабин"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17777066_52608183tmb.jpg" className = "list__image"/>Карабины</Link></li>
        <li><Link to="/equipment/fasteners" className ="Links" id = "застежка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18020811_52679815tmb.jpg" className = "list__image"/>Застежки</Link></li>
        <li><Link to="/equipment/swivels" className ="Links" id = "вертлюжок"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18142847_52620998tmb.jpg" className = "list__image"/>Вертлюжки</Link></li>
        <li><Link to="/equipment/clockworkRings" className ="Links" id = "кольцо"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17785373_52619797tmb.jpg" className = "list__image"/>Кольца</Link></li>
        <li><Link to="/equipment/leads" className ="Links" id = "поводок"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18193735_52661875tmb.jpg" className = "list__image"/>Поводки</Link></li>
    </ul>
  </div>
);

export const Baits = ({ match }) => (
  <div className ="menu-list">
     <ul>
        <li><Link to="/baits/spoon" className ="Links" id = "блесна"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18200248_52667956tmb.jpg" className = "list__image"/>Блесна</Link></li>
        <li><Link to="/baits/mormyshki" className ="Links" id = "мормышка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17982341_52674202tmb.jpg" className = "list__image"/>Мормышки</Link></li>
        <li><Link to="/baits/balancer" className ="Links" id = "балансир"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17804821_52592880tmb.jpg" className = "list__image"/>Балансиры</Link></li>
        <li><Link to="/baits/wobblers" className ="Links" id = "воблер"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18240516_52767089tmb.jpg" className = "list__image"/>Воблеры</Link></li>
        <li><Link to="/baits/silicone" className ="Links" id = "силикон"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18150204_52624680tmb.jpg" className = "list__image"/>Силикон</Link></li>
        <li><Link to="/baits/nozzles" className ="Links" id = "насадка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18221676_52725111tmb.jpg" className = "list__image"/>Насадки</Link></li>
        <li><Link to="/baits/lure" className ="Links" id = "прикормка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18161769_52628807tmb.jpg" className = "list__image"/>Прикормка</Link></li>
        <li><Link to="/baits/additives" className ="Links" id = "добавка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18242361_52770694tmb.jpg" className = "list__image"/>Добавки</Link></li>
        <li><Link to="/baits/attractants" className ="Links" id = "аттрактант"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18217474_52717872tmb.jpg" className = "list__image"/>Аттрактанты</Link></li>
        <li><Link to="/baits/sprays" className ="Links" id = "спрей"><img src="http://rybolov-expert.com.ua/published/publicdata/STORE/attachments/SC/products_pictures/sprey-feeder-sportdd_thm.jpg" className = "list__image"/>Спреи</Link></li>
    </ul>
  </div>
);

export const Accessories = ({ match }) => (
  <div className ="menu-list">
     <ul>
        <li><Link to="/accessories/inflatableBoat" className ="Links" id = "лодка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18211886_52694162tmb.jpg" className = "list__image"/>Надувные лодки</Link></li>
        <li><Link to="/accessories/pendantMotors" className ="Links" id = "двигатель"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18017591_52677014tmb.jpg" className = "list__image"/>Подвесные двигатели</Link></li>
        <li><Link to="/accessories/echoSounders" className ="Links" id = "эхолот"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18239245_52765422tmb.jpg" className = "list__image"/>Эхолоты, навигаторы</Link></li>
        <li><Link to="/accessories/carpBoats" className ="Links" id = "кораблик"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17942331_52599799tmb.jpg" className = "list__image"/>Карповые кораблики</Link></li>
        <li><Link to="/accessories/carpMats" className ="Links" id = "мат"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18239880_52765124tmb.jpg" className = "list__image"/>Карповые маты</Link></li>
        <li><Link to="/accessories/cobras" className ="Links" id = "кобра"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17925451_52597625tmb.jpg" className = "list__image"/>Кобры, ракеты</Link></li>
        <li><Link to="/accessories/slingshots" className ="Links" id = "рогатка"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18144982_52621966tmb.jpg" className = "list__image"/>Рогатки и катапульты</Link></li>
    </ul>
  </div>
);
