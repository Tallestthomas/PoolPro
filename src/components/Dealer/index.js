import React from 'react';
import './Dealer.scss';

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

  render() {
    return (
      <div className={this.state.active ? 'Dealer active' : 'Dealer'}>
        <div className="Dealer__name">
          <h2>{this.props.dealer.name}</h2>
        </div>
        <h3 className="Dealer__phone">{this.props.dealer.phone1}</h3>
        <p className="Dealer__cta">
          Can't talk now? Click below to send an email.
        </p>
        <button className="Dealer__button" onClick={() => console.log('Email')}>
          Contact this Pro
        </button>
        <p>Business Hours</p>
        <div>
          {this.props.dealer.certifications.map((cert, index) => (
            <p key={index}>{cert}</p>
          ))}
        </div>
      </div>
    );
  }
}
export default Dealer;
