import React from 'react';
import './Modal.scss';
import Check from './checkmark-circle.png';
import Empty from './circle-form.png';
import Arrow from './next-arrow.png';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      emailSuccess: false,
      errorMessage: '',
      selectedOption: '',
    };
  }
  handleSubmission = async event => {
    event.preventDefault();
    let email = new FormData(event.target);
    event.persist();
    // Submit email data to server endpoint for sending
    try {
      const sent = await fetch('https://reqres.in/api/email', {
        method: 'POST',
        data: email,
      });
      if (sent.ok) {
        this.setState({emailSuccess: true});
        event.target.reset();
      } else {
        this.setState({
          errorMessage: 'Uh oh, something went wrong! Try again in a second',
        });
      }
    } catch (error) {
      console.error(error.stack);
    }
  };

  radioSelect = event => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  closeModal = () => {
    this.setState(
      {
        emailSuccess: false,
        errorMessage: '',
        selectAllChildren: '',
      },
      this.props.closeModal,
    );
  };

  render() {
    return (
      <div
        className={'Modal ' + (this.props.isActive && 'active')}
        id={this.props.dealer.id}>
        <div className="Modal__background" onClick={this.props.closeModal} />
        <div className="Modal__content">
          <header className="Modal__header">
            <p>Email</p>
            <h2>{this.props.dealer.name}</h2>
            <span className="Modal__close" onClick={this.props.closeModal} />
          </header>
          <section className="Modal__body">
            <p>
              Fill out the form below and {this.props.dealer.name} will get in
              touch.
            </p>
            <form className="Modal__form" onSubmit={this.handleSubmission}>
              <h3 className="Modal__error">{this.state.errorMessage}</h3>
              <label htmlFor="name">
                First and last name
                <input type="text" id="name" name="name" required />
                <img className="invalid" src={Empty} alt="invalid" />
                <img className="valid" src={Check} alt="valid" />
              </label>
              <label htmlFor="phone">
                Phone number
                <input type="tel" id="phone" name="phone" required />
                <img className="invalid" src={Empty} alt="invalid" />
                <img className="valid" src={Check} alt="valid" />
              </label>
              <label htmlFor="email">
                Email address
                <input type="email" id="email" name="email" required />
                <img className="invalid" src={Empty} alt="invalid" />
                <img className="valid" src={Check} alt="valid" />
              </label>
              <label htmlFor="comments">
                Comments or questions
                <textarea id="comments" name="comments" />
              </label>
              <div className="Modal__radio-buttons">
                <p>Do you currently own a pool or spa?</p>
                <label className="radioButton">
                  <input
                    checked={this.state.selectedOption === 'yes'}
                    id="yes"
                    name="pool"
                    onChange={this.radioSelect}
                    type="radio"
                    value="yes"
                  />
                  <span>Yes</span>
                </label>
                <label className="radioButton">
                  <input
                    checked={this.state.selectedOption === 'no'}
                    id="no"
                    name="pool"
                    onChange={this.radioSelect}
                    type="radio"
                    value="no"
                  />
                  <span>No</span>
                </label>
              </div>
              <button type="submit" className="Modal__submit">
                Send my email<img src={Arrow} alt="Green Arrow" />
              </button>
            </form>
            <section
              className={
                'Modal__success ' + (this.state.emailSuccess && 'active')
              }
              onClick={this.closeModal}>
              <h1>Email Sent!</h1>
              <svg
                className="Modal__checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52">
                <circle
                  className="Modal__checkmark-circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="Modal__checkmark-check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
              <p>{this.props.dealer.name} will be in touch with you shortly.</p>
            </section>
          </section>
        </div>
        <div className="Modal__footer">
          <p>
            Elit cupiditate nisi quibusdam iure vero. Est illo magni iusto
            quisquam assumenda autem delectus Illum laudantium fuga minus velit.
          </p>
        </div>
      </div>
    );
  }
}

export default Modal;
