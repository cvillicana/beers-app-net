import React, { Component } from 'react';
import './app.scss'

// Components
import NavBar from './nav-bar/nav-bar';
import Footer from './footer/footer';

class App extends Component {
  render() {
    return (
      <div className="main">
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
