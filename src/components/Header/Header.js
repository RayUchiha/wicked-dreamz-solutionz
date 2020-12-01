import React, { Component } from 'react';
import classes from './Header.module.css';

class Header extends Component {
	render () {
		return (
			<header className={classes.Header}>
				<h1>Header</h1>
				<nav>
					<h3>Nav Menu</h3>
				</nav>
			</header>
		);
	}
}

export default Header;
