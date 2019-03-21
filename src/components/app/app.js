import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../../_helpers/history';
import './app.scss'

// Components
import NavBar from './nav-bar/nav-bar';
// Components
import { Main } from '../main/main.js';
import { Friends } from '../friends/friends.js';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Router history={history}>
          <NavBar />
				  <div>
            <Switch>
              <Route exact path='/' component={Main} />
					    <Route exact path='/friends' component={Friends} />
            </Switch>
				  </div>
			  </Router>
      </div>
    );
  }
}

export default App;
