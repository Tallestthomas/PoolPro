import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  render() {
    return (
      <div
        className={this.props.isActive ? 'Modal active' : 'Modal'}
        id={this.props.dealer.id}>
        <div className="Modal__background" onClick={this.props.closeModal} />
        <div className="Modal__content">
          <header className="Modal__header">
            <h3>Email</h3>
            <h2>{this.props.dealer.name}</h2>
          </header>
          <section>
            <p>
              Fill out the form below and {this.props.dealer.name} will get in
              touch{' '}
            </p>
            <form className="Modal__form">
              <label htmlFor="name">
                First and last name
                <input type="text" id="name" name="name" />
              </label>
              <label htmlFor="phone">
                Phone number
                <input type="tel" id="phone" name="phone" />
              </label>
              <label htmlFor="email">
                Email address
                <input type="email" id="email" name="email" />
              </label>
              <label htmlFor="comments">
                Comments or questions
                <textarea id="comments" />
              </label>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default Modal;
