import React from 'react';
import './TitleDialog.css';

function Title(props) {
  return (
    <div className={'Title' + props.color}>
      {props.children}
    </div>
  );
}

function TitleDialog() {
  return (
    <Title color="blue">

    <div className="container">
      <div className="decorative-title">
        <div className="decorative-bar left vertical thick"></div>
        <div className="decorative-bar left horizontal thick"></div>
        <div className="decorative-bar left horizontal thin"></div>
        <h1>СПИННИНГ</h1>
        <div className="decorative-bar right vertical thick"></div>
        <div className="decorative-bar right horizontal thick"></div>
        <div className="decorative-bar right horizontal thin"></div>
        </div>
      </div>

    </Title>
  );
}

export default TitleDialog;
