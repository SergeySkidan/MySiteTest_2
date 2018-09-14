import React from 'react';

import './aboutUs.css';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about_us">
    <h3>Интернет магазин <q>СПИННИНГ</q></h3>
    <h3>Контактная информация:</h3>
    <ul>
      <li><address>Киев</address></li>
      <li><address>пр-т Оболонский 58</address></li>
      <li>Телефон: +38 099 092-31-89</li>
      <li>e-mail: <a href="mailto:sergeyskidan1982@gmail.com">Электронная почта</a></li>
      <li>Skype: <a href="Skype: 9b4ea3089b8d1d50?Call">Позвонить</a></li>
      <li>Сайт: <a href="/">Spinning.com.ua</a></li>
    </ul>

  </div>);
  }
};

export default AboutUs;
