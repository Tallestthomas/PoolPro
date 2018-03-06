import React from 'react';
import './Header.scss';
import Logo from './pool-pros-logo.png';
import WaterImage from './water-image.png';
import ActionIcon from './action-commercial-icon.png';
import Location from './location-icon.png';
import MenuToggle from './menu-icon-mobile.png';
import Arrow from '../Modal/next-arrow.png';

const Header = props => (
  <header>
    <section className="Header__topBar">
      <a href="#dealers">Dealers and Distributors</a>
      <a href="#commercial">
        Commercial Service
        <img src={ActionIcon} alt="Commercial Service" />
      </a>
    </section>
    <nav className="Header__navigation">
      <a href="#home">
        <img src={Logo} className="Header__logo" alt="Pool Pros logo" />
      </a>
      <section
        className={'Header__LinkContainer ' + (props.toggled ? 'active' : '')}>
        <h3>Menu</h3>
        <a className="Header__navigationLink" href="#pools">
          Pools &amp; Spas
          <img src={Arrow} alt="Pools and spas" />
        </a>
        <a className="Header__navigationLink" href="#supplies">
          Supplies
          <img src={Arrow} alt="Spas" />
        </a>
        <a className="Header__navigationLink" href="#resources">
          Resources
          <img src={Arrow} alt="Resource" />
        </a>
        <a className="Header__navigationLink" href="#services">
          Services
          <img src={Arrow} alt="Services" />
        </a>
        <span
          className="Header__mobileCloseButton"
          onClick={props.toggleMenu}
        />
      </section>
      <a href="#poolpro" className="Header__button">
        <img src={Location} alt="Find a location near you" />
        <p>
          Find a<span>&nbsp;Pool</span>&nbsp;Pro
        </p>
      </a>
      <img
        className="Header__mobileToggle"
        src={MenuToggle}
        alt="ToggleMenu"
        onClick={props.toggleMenu}
      />
    </nav>
    <img className="Header__image" src={WaterImage} alt="Water" />
  </header>
);

export default Header;
