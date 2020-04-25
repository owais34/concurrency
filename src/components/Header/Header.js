import React from 'react';
import logo from './logo.png';
import './Header.css';
const Header=()=>{
return (
  <div className="header">
  <img src={logo} alt={"LOgo Img"} className="Logo"/>
  <h1 className="Title">Concurrency</h1>
  </div>
);

}

export default Header;
