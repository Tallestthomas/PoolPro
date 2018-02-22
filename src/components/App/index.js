import React, {Component} from 'react';
import Header from '../Header';
import DealerSelection from '../DealerSelection';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <DealerSelection />
      </main>
    );
  }
}

export default App;
