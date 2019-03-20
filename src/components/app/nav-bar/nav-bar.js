import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './nav-bar.scss';

// Components
import Main from '../../main/main.js';
import Friends from '../../friends/friends.js';

class NavBar extends Component {
	render(){

		const activeStyle = { fontWeight: "bold", color: "#FFC107" }

		return (
			<Router>
				<nav>
					<div className="navWide">
						<div className="wideDiv">
							<NavLink exact={true} className="link" activeStyle={activeStyle} to={'/'}>Home</NavLink>
							<NavLink className="link" activeStyle={activeStyle} to={'/friends'}>Friends</NavLink>
						</div>
					</div>
					<div className="navNarrow">
						<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
						<div className="narrowLinks">
							<NavLink className="link" activeStyle={activeStyle} to={'/'}>Home</NavLink>
							<NavLink className="link" activeStyle={activeStyle} to={'/friends'}>Friends</NavLink>
						</div>
					</div>
					
				</nav>
				<Switch>
              		<Route exact path='/' component={Main} />
					<Route exact path='/friends' component={Friends} />
          		</Switch>
			</Router>
			
		);
	}

	burgerToggle = () => {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
};

export default NavBar;