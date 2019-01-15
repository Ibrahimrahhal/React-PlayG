import React, { Component } from 'react';
import Navbar from './components/navbar';
import Body from './components/body';

class App extends Component {
  render() {
    return (
        <React.Fragment>
        <Navbar/>
        <Body/>
      </React.Fragment>
    );
  }
}

export default App;
