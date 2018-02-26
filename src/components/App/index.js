import React, {Component} from 'react';
import Header from '../Header';
import DealerSelection from '../DealerSelection';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <DealerSelection />
        <Footer />
      </main>
    );
  }
}

export default App;
