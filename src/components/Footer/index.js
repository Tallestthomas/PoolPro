import React from 'react';
import Logo from './pool-pros-logo-footer.png';
import './Footer.scss';
import FB from './facebook-icon.png';
import Twitter from './twitter-icon.png';
import YT from './youtube-icon.png';
import ActionIcon from '../Header/action-commercial-icon.png';

const Footer = () => (
  <footer className="Footer">
    <a href="#home">
      <img src={Logo} alt="Pool Pros" className="Footer__logo" />
    </a>
    <div className="Footer__social">
      <p>Connect with us</p>
      <a href="#twitter" target="_blank" rel="noopener">
        <img src={Twitter} alt="Pool Pros' Twitter" />
      </a>
      <a href="#facebook" target="_blank" rel="noopener">
        <img src={FB} alt="Pool Pros' Facebook" />
      </a>
      <a href="#youtube" target="_blank" rel="noopener">
        <img src={YT} alt="Pool Pros' Youtube" />
      </a>
    </div>
    <div className="Footer__bottomBar">
      <div className="mobileFooter">
        <a href="#dealers">Dealers and Distributors</a>
        <a href="#commercial">
          Commercial Service
          <img src={ActionIcon} alt="Commercial Service" />
        </a>
      </div>
      <a href="#home">&copy; 2017 Pool Pros</a>
      <a href="#privacy">Privacy Policy</a>
      <a href="#terms">Terms and Conditions</a>
    </div>
  </footer>
);

export default Footer;
