import React, {Component} from 'react';
import Header from '../Header';
import DealerSelection from '../DealerSelection';
import Footer from '../Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }

  toggleMobileMenu = event => {
    this.setState({menuOpen: !this.state.menuOpen});
  };

  render() {
    return (
      <main>
        <Header
          toggleMenu={this.toggleMobileMenu}
          toggled={this.state.menuOpen}
        />
        <DealerSelection />
        <Footer />
      </main>
    );
  }
}

export default App;
