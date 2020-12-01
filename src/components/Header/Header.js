import React, { Component } from 'react';
import classes from './Header.module.css';

class Header extends Component {
	render () {
		return (
			<header className={classes.Header}>
				<h1>Header</h1>
			</header>
		);
	}
}

export default Header;
