import React from 'react';
import { Router, Route } from 'react-router'
import { connect } from 'react-redux';
import {  Link } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';


export const FishingGear = ({ match }) => (
  <div>
     <ul>
        <li><Link to="/fishingGear/spinning">Удочки</Link></li>
        <li><Link to="/fishingGear/coil">Катушки</Link></li>
        <li><Link to="/fishingGear/line">Леска</Link></li>
        <li><Link to="/fishingGear/cage">Садки, подсаки</Link></li>
        <li><Link to="/fishingGear/bickStrikeAlarms">Сигнализаторы поклевки</Link></li>
        <li><Link to="/fishingGear/racksAndStands">Стойки и подставки</Link></li>
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
