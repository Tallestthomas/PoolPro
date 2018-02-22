import React from 'react';
import './Header.scss';
import Logo from './pool-pros-logo.png';
import WaterImage from './water-image.png';

const Header = () => (
  <header>
    <section className="Header__topBar">
      <a href="#dealers">Dealers and Distributors</a>
      <a href="#commercial">Commercial Service</a>
    </section>
    <nav className="Header__navigation">
      <a href="#home">
        <img src={Logo} className="Header__logo" alt="Pool Pros logo" />
      </a>
      <section className="Header__LinkContainer">
        <a className="Header__navigationLink" href="#pools">
          Pools &amp; Spas
        </a>
        <a className="Header__navigationLink" href="#supplies">
          Supplies
        </a>
        <a className="Header__navigationLink" href="#resources">
          Resources
        </a>
        <a className="Header__navigationLink" href="#services">
          Services
        </a>
        <a href="#poolpro" className="Header__button">
          Find a Pool Pro
        </a>
      </section>
    </nav>
    <img className="Header__image" src={WaterImage} alt="Water" />
  </header>
);

export default Header;
