import React from 'react';
import { Router, Route } from 'react-router'
import { connect } from 'react-redux';
import {  Link } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';


export const FishingGear = ({ match }) => (
  <div>
     <ul>
        <li><Link to="/fishingGear/spinning" id="Link"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18168230_52704554tmb.jpg" width="100" height="100"/>Удочки</Link></li>
        <li><Link to="/fishingGear/coil"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18082171_52595794tmb.jpg" width="100" height="100"/>Катушки</Link></li>
        <li><Link to="/fishingGear/line"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18215930_52746351tmb.jpg" width="100" height="100"/>Леска</Link></li>
        <li><Link to="/fishingGear/cage"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17911881_52597861tmb.jpg" width="100" height="100"/>Садки, подсаки</Link></li>
        <li><Link to="/fishingGear/bickStrikeAlarms"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/18214402_52714277tmb.jpg" width="100" height="100"/>Сигнализаторы поклевки</Link></li>
        <li><Link to="/fishingGear/racksAndStands"><img src="https://ibis.net.ua/published/publicdata/STORE/attachments/SC/products_pictures/17948621_52597648tmb.jpg" width="100" height="100"/>Стойки и подставки</Link></li>
    </ul>
  </div>
);

export const Equipment = ({ match }) => (
  <div>
     <ul>
        <li><Link to="/equipment/hooks">Крючки</Link></li>
        <li><Link to="/equipment/sinker">Грузила</Link></li>
        <li><Link to="/equipment/jigHeads">Джиг-головки</Link></li>
        <li><Link to="/equipment/feeders">Кормушки</Link></li>
        <li><Link to="/equipment/floats">Поплавки</Link></li>
        <li><Link to="/equipment/carbines">Карабины</Link></li>
        <li><Link to="/equipment/fasteners">Застежки</Link></li>
        <li><Link to="/equipment/swivels">Вертлюжки</Link></li>
        <li><Link to="/equipment/clockworkRings">Заводные кольца</Link></li>
        <li><Link to="/equipment/leads">Поводки</Link></li>
    </ul>
  </div>
);

export const Baits = ({ match }) => (
  <div>
     <ul>
        <li><Link to="/baits/spoon">Блесна</Link></li>
        <li><Link to="/baits/mormyshki">Мормышки</Link></li>
        <li><Link to="/baits/balancer">Балансиры</Link></li>
        <li><Link to="/baits/wobblers">Воблеры</Link></li>
        <li><Link to="/baits/silicone">Силикон</Link></li>
        <li><Link to="/baits/nozzles">Насадки</Link></li>
        <li><Link to="/baits/lure">Прикормка</Link></li>
        <li><Link to="/baits/additives">Добавки</Link></li>
        <li><Link to="/baits/attractants">Аттрактанты</Link></li>
        <li><Link to="/baits/sprays">Спреи</Link></li>
    </ul>
  </div>
);

export const Accessories = ({ match }) => (
  <div>
     <ul>
        <li><Link to="/accessories/inflatableBoat">Надувные лодки</Link></li>
        <li><Link to="/accessories/pendantMotors">Подвесные двигатели</Link></li>
        <li><Link to="/accessories/echoSounders">Эхолоты</Link></li>
        <li><Link to="/accessories/carpBoats">Карповые кораблики</Link></li>
        <li><Link to="/accessories/carpMats">Карповые маты и мешки</Link></li>
        <li><Link to="/accessories/cobras">Кобры, ракеты</Link></li>
        <li><Link to="/accessories/slingshots">Рогатки и катапульты</Link></li>
    </ul>
  </div>
);
