import React, { Component } from 'react';
import './app.scss'

// Components
import NavBar from './nav-bar/nav-bar';

class App extends Component {
  render() {
    return (
      <div className="main">
        <NavBar />
      </div>
    );
  }
}

export default App;
