import React, { Component } from 'react';
import './app.scss'

// Components
import LoadingSpinner from '../shared-components/loading-spinner/loading-spinner';
const NavBar = React.lazy(() => import('./nav-bar/nav-bar'));

class App extends Component {
  render() {
    return (
      <React.Suspense fallback={<LoadingSpinner />}>
      <div className="main">
        <NavBar />
      </div>
      </React.Suspense>
    )
  }
}
export default App;
