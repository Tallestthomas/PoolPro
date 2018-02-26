import React from 'react';
import './Dealer.scss';
import Commercial from './users-commercial-pro.png';
import Email from './email-icon.png';
import Installation from './star-installation-pro.png';
import PhoneDesktop from './phone-icon-desktop.png';
import PhoneMobile from './phone-icon-mobile.png';
import Residential from './home-residential-pro.png';
import Service from './gear-service-pro.png';

class Dealer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        active: true,
      });
    }, 100);
  }

  setCertification = cert => {
    switch (cert) {
      case 'Installation Pro':
        return Installation;
      case 'Residential Pro':
        return Residential;
      case 'Commercial Pro':
        return Commercial;
      case 'Service Pro':
        return Service;
      default:
        return;
    }
  };

  render() {
    return (
      <div className={this.state.active ? 'Dealer active' : 'Dealer'}>
        <div className="Dealer__name">
          <h2>{this.props.dealer.name}</h2>
        </div>
        <a
          href={'tel:' + this.props.dealer.phone1}
          className="Dealer__phone-mobile">
          <img
            src={PhoneMobile}
            alt="Tap to call"
            className="Dealer__phone-image"
          />
          <span>Tap to Call</span> {this.props.dealer.phone1}
        </a>
        <h3 className="Dealer__phone-desktop">
          <img
            src={PhoneDesktop}
            alt="Call this pro"
            className="Dealer__phone-image"
          />
          {this.props.dealer.phone1}
        </h3>
        <p className="Dealer__cta">
          Can't talk now? Click below to send an email.
        </p>
        <button
          className="Dealer__button"
          onClick={this.props.onClick}
          value={this.props.dealer.companyID}>
          <img src={Email} alt="Email this pro" />
          Contact this Pro
        </button>
        <div className="Dealer__hours">
          <p>Business Hours</p>
          <p>Weekdays {this.props.dealer.weekHours.mon}</p>
          <p>Saturdays {this.props.dealer.weekHours.sat || 'CLOSED'}</p>
          <p>Sundays {this.props.dealer.weekHours.sun || 'CLOSED'}</p>
        </div>
        <div className="Dealer__certifications">
          {this.props.dealer.certifications.map((cert, index) => (
            <p key={index}>
              <img src={this.setCertification(cert)} alt={cert} />
              {cert}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
export default Dealer;
