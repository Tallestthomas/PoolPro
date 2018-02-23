import React from 'react';

const Dealer = props => (
  <div>
    <h2>{props.dealer.name}</h2>
    <span className="Dealer__line" />
    <h3>{props.dealer.phone1}</h3>
    <p>Can't talk now? Click below to send an email.</p>
    <button onClick={() => console.log('Email')}>Contact this Pro</button>
    <p>Business Hours</p>
    <div>{props.dealer.certifications.map(cert => <p>{cert}</p>)}</div>
  </div>
);

export default Dealer;
