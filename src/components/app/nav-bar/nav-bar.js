import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.scss';

class NavBar extends Component {
	render(){

		const activeStyle = { fontWeight: "bold", color: "#FFC107" }

		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<NavLink exact={true} className="link" activeStyle={activeStyle} to={'/'}>Home</NavLink>
						<NavLink exact={true} className="link" activeStyle={activeStyle} to={'/friends'}>Friends</NavLink>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<NavLink exact={true} className="link" activeStyle={activeStyle} to={'/'}>Home</NavLink>
						<NavLink exact={true} className="link" activeStyle={activeStyle} to={'/friends'}>Friends</NavLink>
					</div>
				</div>	
			</nav>
			
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